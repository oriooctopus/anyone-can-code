import { GetSyntaxHandbookDataQuery } from 'src/generated/graphql';
import { removeEmpty } from 'src/utils/general';

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
  const lessons = flatMap(
    (
      data?.courses?.data?.[0].attributes?.modules?.data?.[0]?.attributes
        ?.moduleLessons || []
    ).filter(removeEmpty),
    ({ lesson }) => (lesson?.data?.attributes ? [lesson.data.attributes] : []),
  );

  return flatMap(lessons, ({ syntaxEntry: lessonEntry, sublessons }) => {
    const sublessonEntries = flatMap(
      sublessons?.data || [],
      ({ attributes }) => {
        return attributes?.syntaxEntry ? [attributes.syntaxEntry] : [];
      },
    );

    return lessonEntry ? [lessonEntry, ...sublessonEntries] : sublessonEntries;
  });
};
