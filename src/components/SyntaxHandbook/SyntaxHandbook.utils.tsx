import { GetSyntaxHandbookDataQuery } from 'src/generated/graphql';

function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[],
): U[] {
  return Array.prototype.concat(...array.map(callbackfn));
}

/**
 * Takes in the data from the syntax handbook query
 * and returns just the syntax handbook entries
 */
export const getSyntaxHandbookEntriesFromQueryData = (
  data: GetSyntaxHandbookDataQuery,
) => {
  // TODO: clean this shit up
  const lessons =
    data?.courses?.data?.[0].attributes.modules.data?.[0]?.attributes
      ?.moduleLessons || [];

  return flatMap(
    lessons,
    ({
      lesson: {
        data: { attributes: lesson },
      },
    }) => {
      const lessonEntry = lesson?.syntaxEntry;
      debugger;
      const sublessonEntries = flatMap(
        lesson?.sublessons.data,
        ({ attributes: { syntaxEntry } }) => {
          return syntaxEntry ? [syntaxEntry] : [];
        },
      );

      return lessonEntry
        ? [lessonEntry, ...sublessonEntries]
        : sublessonEntries;
    },
  );
};
