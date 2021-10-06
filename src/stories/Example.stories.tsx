import { AnotherTest } from '../pages/lessons/_SublessonInstructions/SublessonInstructions.styles';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

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
