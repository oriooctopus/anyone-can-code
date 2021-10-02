import { GridItem, GridItemProps } from '@chakra-ui/layout';

export const DefaultContentPanelGridItem = (props: GridItemProps) => (
  <GridItem
    colSpan={{
      lg: true ? 5 : 7,
      md: true ? 7 : 9,
    }}
    {...props}
  />
);
