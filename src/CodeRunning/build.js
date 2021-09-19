import { getTransformers } from './transformers';
import { cssToHtml, jsToHtml, concatHtml } from './builders.js';
import { challengeTypes } from '../utils/challengeTypes';

const globalRequires = [
  {
    link:
      'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css',
  },
];

const applyFunction = (fn) =>
  async function (file) {
    try {
      if (file.error) {
        return file;
      }
      const newFile = await fn.call(this, file);
      if (typeof newFile !== 'undefined') {
        return newFile;
      }
      return file;
    } catch (error) {
      return { ...file, error };
    }
  };

const composeFunctions = (...fns) =>
  fns.map(applyFunction).reduce((f, g) => (x) => f(x).then(g));

function buildSourceMap(files) {
  // TODO: concatenating the source/contents is a quick hack for multi-file
  // editing. It is used because all the files (js, html and css) end up with
  // the same name 'index'. This made the last file the only file to  appear in
  // sources.
  // A better solution is to store and handle them separately. Perhaps never
  // setting the name to 'index'. Use 'contents' instead?
  // TODO: is file.source ever defined?
  return files.reduce(
    (sources, file) => {
      sources[file.name] += file.source || file.contents;
      sources.editableContents += file.editableContents || '';
      return sources;
    },
    { index: '', editableContents: '' },
  );
}

function checkFilesErrors(files) {
  const errors = files.filter(({ error }) => error).map(({ error }) => error);
  if (errors.length) {
    throw errors;
  }
  return files;
}

export function buildDOMChallenge({ files, required = [], template = '' }) {
  const finalRequires = [...globalRequires, ...required /*  ...frameRunner */];
  const loadEnzyme = Object.keys(files).some((key) => files[key].ext === 'jsx');
  const toHtml = [jsToHtml, cssToHtml];
  const pipeLine = composeFunctions(...getTransformers(), ...toHtml);
  const finalFiles = Object.keys(files)
    .map((key) => files[key])
    .map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then((files) => ({
      challengeType: challengeTypes.html,
      build: concatHtml({ required: finalRequires, template, files }),
      sources: buildSourceMap(files),
      loadEnzyme,
    }));
}

export function buildJSChallenge({ files }, options) {
  const pipeLine = composeFunctions(...getTransformers(options));

  const finalFiles = Object.keys(files)
    .map((key) => files[key])
    .map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then((files) => ({
      challengeType: challengeTypes.js,
      build: files
        .reduce(
          (body, file) => [...body, file.head, file.contents, file.tail],
          [],
        )
        .join('\n'),
      sources: buildSourceMap(files),
    }));
}

export function buildBackendChallenge({ url }) {
  return {
    challengeType: challengeTypes.backend,
    build: concatHtml({ required: frameRunner }),
    sources: { url },
  };
}

export function challengeHasPreview({ challengeType }) {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern
  );
}

export function isJavaScriptChallenge({ challengeType }) {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.bonfire
  );
}

export function isLoopProtected(challengeMeta) {
  return challengeMeta.superBlock !== 'Coding Interview Prep';
}
