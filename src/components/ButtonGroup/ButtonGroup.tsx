import { ButtonProps } from "@chakra-ui/react";

type props = {
  buttonStyle: ButtonProps;
  currentValue: unknown;
  options: Array<{
    label: string;
    value: unknown;
  }>;
};

export const ButtonGroup = () => (
  <Flex>
    {options.map(({label, value}) => (
      <Button {...buttonStyle}
    ))

    }
  </Flex>
);
