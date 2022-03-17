import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/* export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  label: 'Button',
}; */

export const Colors = Template.bind({});
Colors.args = {
  color: 'primary',
  label: 'Primary',
};

export const Outline = Template.bind({});
Outline.args = {
  color: 'info',
  isOutlined: true,
  label: 'Outlined',
};

export const Sizing = Template.bind({});
Sizing.args = {
  size: 'lg',
  label: 'I am large button',
};