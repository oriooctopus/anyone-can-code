import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnotherTest } from '../pages/lessons/_SublessonInstructions/SublessonInstructions.styles';

export default {
  title: 'Example/Example',
  component: AnotherTest,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AnotherTest>;

export const Example = (props) => {
  return (
    <>
      <AnotherTest color="red">wefew</AnotherTest>
    </>
  );
};
Example.args = {
  label: 'Button',
};
