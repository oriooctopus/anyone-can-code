import { Box, Heading } from '@chakra-ui/react';
import { useGetCourseMapOverlayDataQuery } from 'src/generated/graphql';
import { notEmpty } from 'src/utils/general';
import { CourseMapOverlayLesson } from 'components/SidebarOverlays/CourseMapOverlay/CourseMapOverlay.styles';
import { SidebarOverlayBase } from 'components/SidebarOverlays/SidebarOverlayBase/SidebarOverlayBase';

// TODO: this whole component needs to be written much cleaner
export const CourseMapOverlay = () => {
  const { data } = useGetCourseMapOverlayDataQuery({
    variables: {
      // TODO: Make this dynamic
      slug: 'js-foundations',
    },
  });

  if (!data?.courses) {
    return null;
  }

  // right now we're just getting the first one, this should be optimized in the query level
  const [{ modules }] = normalizeStrapiData(data.courses);

  if (!modules) {
    return null;
  }

  const normalizedModules = normalizeStrapiData(modules);

  return (
    <SidebarOverlayBase>
      {normalizedModules.map(({ moduleLessons, name: moduleName }) => (
        <Box key={moduleName}>
          <Heading fontSize="26px" p={4}>
            {moduleName}
          </Heading>
          {(moduleLessons || []).map((moduleLesson) => {
            if (!moduleLesson?.lesson) {
              return null;
            }

            const { name, slug } = normalizeStrapiData(moduleLesson?.lesson);

            return (
              <CourseMapOverlayLesson name={name} slug={slug} key={name} />
            );
          })}
        </Box>
      ))}
    </SidebarOverlayBase>
  );
};
function normalizeStrapiData(modules: any) {
  throw new Error('Function not implemented.');
}
