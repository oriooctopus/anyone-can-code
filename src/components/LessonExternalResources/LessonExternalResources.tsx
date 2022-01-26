import { Box, IconButton } from '@chakra-ui/react';
import { BiLayerPlus } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useGetLessonExternalResourcesDataQuery } from 'src/generated/graphql';
import { ILessonRouteParams } from 'src/pages/Lesson/Lesson';
import { removeEmpty } from 'src/utils/general';
import { LearningSidebarPopupButton } from 'components/LearningSidebarPopupButton/LearningSidebarPopupButton';
import { FlLink } from 'components/Link/FlLink';

export const LessonExternalResources = () => {
  const { slug } = useParams<ILessonRouteParams>();

  const { data } = useGetLessonExternalResourcesDataQuery({
    variables: {
      slug,
    },
  });

  const externalResources =
    data?.lessons?.data?.[0].attributes?.externalResources;

  if (!externalResources?.length) {
    return null;
  }

  const popup = (
    <Box>
      {externalResources
        .filter(removeEmpty)
        .map(({ link, name, type }, index) => (
          <FlLink
            borderTop={index === 0 ? '1px solid black' : ''}
            borderBottom="1px solid black"
            borderRadius={0}
            borderBottomRadius={
              index === externalResources.length - 1 ? '20px' : 0
            }
            display="block"
            padding="14px 18px"
            href={link}
            width="100%"
          >
            {name && `${name} -`} {link}
          </FlLink>
        ))}
    </Box>
  );

  return (
    <LearningSidebarPopupButton
      popupContent={popup}
      buttonTooltip="External Resources"
    >
      <IconButton
        aria-label="Toggle Syntax Handbook"
        icon={<BiLayerPlus size={30} />}
        variant="unstyled"
      />
    </LearningSidebarPopupButton>
  );
};
