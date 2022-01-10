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

  const course = data?.courses?.data?.[0];
  // for these kinds of things, it might be cleaner to have them return an array when empty
  const modules =
    (course?.attributes?.modules?.data || []).filter((module) =>
      Boolean(module),
    ) || [];

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
                moduleData.moduleLessons?.map((moduleLesson) => {
                  const { name, slug } =
                    moduleLesson?.lesson?.data?.attributes || {};
                  return (
                    <CourseMapOverlayLesson
                      name={name}
                      slug={slug}
                      key={name}
                    />
                  );
                })}
            </Box>
          ),
      )}
    </SidebarOverlayBase>
  );
};
