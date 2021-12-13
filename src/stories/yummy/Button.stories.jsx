import React from 'react';

import { Button } from './Button';

export default {
  title: 'Yummy UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonTextOnly = Template.bind({});
ButtonTextOnly.storyName = 'Button - Text Only';
ButtonTextOnly.args = {
  text: 'Button Title',
  icon: null,
  disabled: false,
  loading: false,
  outline: false,
  backgroundColor: null,
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.storyName = 'Button - Disabled';
ButtonDisabled.args = {
  ...ButtonTextOnly.args,
  disabled: true,
};

export const ButtonLoading = Template.bind({});
ButtonLoading.storyName = 'Button - Loading';
ButtonLoading.args = {
  ...ButtonTextOnly.args,
  loading: true,
};

export const ButtonOutlineTextOnly = Template.bind({});
ButtonOutlineTextOnly.storyName = 'Button - Outline - Text Only';
ButtonOutlineTextOnly.args = {
  text: 'Button Title',
  icon: null,
  disabled: false,
  loading: false,
  outline: true,
  backgroundColor: null,
};

export const ButtonOutlineDisabled = Template.bind({});
ButtonOutlineDisabled.storyName = 'Button - Outline - Disabled';
ButtonOutlineDisabled.args = {
  ...ButtonOutlineTextOnly.args,
  disabled: true,
};