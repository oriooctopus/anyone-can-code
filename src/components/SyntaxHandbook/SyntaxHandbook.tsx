import { Box, Button, Heading, IconButton } from '@chakra-ui/react';
import { BsJournals } from 'react-icons/bs';
import {
  GetSyntaxHandbookDataQuery,
  SublessonEntity,
  useGetSyntaxHandbookDataQuery,
} from 'src/generated/graphql';
import {
  FlattenAttributes,
  FlattenData,
  NormalizeStrapi,
  normalizeStrapiData,
} from 'src/utils/general';
import { NN } from 'src/utils/typescriptUtils';
import { LearningSidebarPopupButton } from 'components/LearningSidebarPopupButton/LearningSidebarPopupButton';
import Markdown from 'components/Markdown/Markdown';
import { getSyntaxHandbookEntriesFromQueryData } from 'components/SyntaxHandbook/SyntaxHandbook.utils';

// type test2 = FlattenAttributes<NN<GetSyntaxHandbookDataQuery['courses']>>;
type base = NN<GetSyntaxHandbookDataQuery['courses']>;
type test4 = FlattenData<base>;
type test5 = NormalizeStrapi<base>;
type test3 = FlattenAttributes<SublessonEntity>['challenges'];

export const SyntaxHandbook = () => {
  const { data } = useGetSyntaxHandbookDataQuery({
    variables: {
      // TODO: Make this dynamic
      slug: 'js-foundations',
    },
  });

  if (!data?.courses) {
    return null;
  }

  const help = data;
  data.courses;

  const test = normalizeStrapiData(data.courses);

  const syntaxEntries = getSyntaxHandbookEntriesFromQueryData(data);

  /**
   * TODO: Fix this shitty code
   * Once we settle on more specific details on functionality
   * and design make this code way more elegant/clean
   */
  const popup = (
    <Box textAlign="left">
      <Heading margin="20px 0 16px 12px" size="md">
        Syntax Handbook
      </Heading>
      {syntaxEntries.map(({ data }, index) => {
        if (!data?.attributes) {
          return null;
        }

        const {
          attributes: { content, maxWidth, name },
        } = data;
        return (
          <LearningSidebarPopupButton
            popupContent={
              <Markdown
                containerOverrides={{ padding: '16px', borderRadius: '10px' }}
              >
                {content}
              </Markdown>
            }
            popoverWidth={maxWidth || 400}
            key={name}
            buttonTooltip="Syntax Handbook"
          >
            <Button
              borderTop={index === 0 ? '1px solid black' : ''}
              borderBottom="1px solid black"
              borderRadius={0}
              borderBottomRadius={
                index === syntaxEntries.length - 1 ? '20px' : 0
              }
              padding="14px 18px"
              onClick={() => {}}
              variant="ghost"
              width="100%"
              justifyContent="start"
            >
              {name}
            </Button>
          </LearningSidebarPopupButton>
        );
      })}
    </Box>
  );

  return (
    <LearningSidebarPopupButton
      buttonTooltip="Syntax Handbook"
      popupContent={popup}
    >
      <IconButton
        aria-label="Toggle Syntax Handbook"
        icon={<BsJournals size={30} />}
        variant="unstyled"
      />
    </LearningSidebarPopupButton>
  );
};
