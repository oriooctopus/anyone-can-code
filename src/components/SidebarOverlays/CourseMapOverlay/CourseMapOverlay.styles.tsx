import { Button, ButtonProps, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { rem } from 'src/styles/typography/font';
import { FlLink } from 'components/Link/FlLink';

const lessonSharedStyles = {
  alignItems: 'center',
  borderTop: '1px solid gray',
  borderBottom: '1px solid gray',
  d: 'flex',
  px: rem(25),
  height: rem(50),
};

interface ICourseMapOverlayLesson {
  name: string;
  slug: string;
}

const LessonButton = (buttonProps: ButtonProps) => (
  <Button size="sm" {...buttonProps} />
);

// const lessonIconColorMap: Record<ProgressStateEnum, string> = {
//   [ProgressStateEnum.INCOMPLETE]: '#ECE9E9',
//   [ProgressStateEnum.CURRENT]: '#A77E14',
//   [ProgressStateEnum.COMPLETE]: '#14A76C',
// };

/*
 * Refactor this so that there is a lesson container that has all the lessons
 * and controls which one is hovered instead of this weird hover shit.
 * To do so you'll need to change things so that the lesson is a fragment on the query,
 * that way it'll generate a type that can be used in the props
 *
 * Also add make it so that there aren't any borders on hover
 */
export const CourseMapOverlayLesson = ({
  name,
  slug,
}: ICourseMapOverlayLesson) => {
  const [showActions, setShowActions] = useState(false);

  return showActions ? (
    <FlLink
      {...lessonSharedStyles}
      bgColor="#e0e0e0"
      href={`/lesson/${slug}`}
      onMouseLeave={() => setShowActions(false)}
      w="100%"
    >
      <Text>Go to lesson</Text>
      <FlLink
        href="/this-is-a-url-to-practice-the-lesson-that-i-have-not-built-yet"
        marginInlineStart="auto"
      >
        <LessonButton>Practice</LessonButton>
      </FlLink>
      <FlLink
        href="/this-is-a-url-to-review-the-lesson-that-i-have-not-built-yet"
        ml={2}
      >
        <LessonButton ml={2}>Summary</LessonButton>
      </FlLink>
    </FlLink>
  ) : (
    <FlLink href={`/lesson/${slug}`}>
      <Flex {...lessonSharedStyles} justify="space-between">
        <Text fontSize="20px" fontWeight={600}>
          {name}
        </Text>
        {/* <BiCheckCircle color={lessonIconColorMap['COMPLETE']} size={38} /> */}
      </Flex>
    </FlLink>
  );
};
