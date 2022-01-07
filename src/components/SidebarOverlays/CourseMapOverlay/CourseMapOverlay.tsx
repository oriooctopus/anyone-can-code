import { Box, Heading } from '@chakra-ui/react';
import { useGetCourseMapOverlayDataQuery } from 'src/generated/graphql';
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

  const course = data?.courses?.data?.[0];
  // for these kinds of things, it might be cleaner to have them return an array when empty
  const modules =
    (course?.attributes?.modules.data || []).filter((module) =>
      Boolean(module),
    ) || [];
  debugger;

  return (
    <SidebarOverlayBase>
      {modules.map(
        ({ attributes: moduleData }) =>
          moduleData && (
            <Box key={moduleData.name}>
              <Heading fontSize="26px" p={4}>
                {moduleData.name}
              </Heading>
              {moduleData.moduleLessons &&
                moduleData.moduleLessons?.map(
                  ({
                    lesson: {
                      data: { attributes: lesson },
                    },
                  }) =>
                    lesson && (
                      <CourseMapOverlayLesson
                        name={lesson.name}
                        slug={lesson.slug}
                      />
                    ),
                )}
            </Box>
          ),
      )}
    </SidebarOverlayBase>
  );
};
