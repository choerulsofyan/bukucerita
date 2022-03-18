import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';

export default {
    title: 'Example/Divider',
    component: Divider,
    argTypes: {
    },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const DefaultAlign = Template.bind({});
DefaultAlign.args = {
    title: 'Default Left Aligned'
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
    contentAlign: 'center',
    title: 'The Center Aligned Content'
};

export const RightAligned = Template.bind({});
RightAligned.args = {
    contentAlign: 'right',
    title: 'You can change this text & its align below'
};
