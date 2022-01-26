import { Box, Heading } from '@chakra-ui/react';
import { useGetCourseMapOverlayDataQuery } from 'src/generated/graphql';
import { flattenStrapi } from 'src/utils/normalizeStrapi';
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
  const [{ modules }] = flattenStrapi(data.courses);

  if (!modules) {
    return null;
  }

  return (
    <SidebarOverlayBase>
      {modules.map(({ moduleLessons, name: moduleName }) => (
        <Box key={moduleName}>
          <Heading fontSize="26px" p={4}>
            {moduleName}
          </Heading>
          {(moduleLessons || []).map((moduleLesson) => {
            if (!moduleLesson?.lesson?.data?.attributes) {
              return null;
            }

            const { name, slug } = moduleLesson?.lesson?.data?.attributes;

            return (
              <CourseMapOverlayLesson name={name} slug={slug} key={name} />
            );
          })}
        </Box>
      ))}
    </SidebarOverlayBase>
  );
};
