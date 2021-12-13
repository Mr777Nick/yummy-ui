import React from 'react';

import { Label } from './Label';

export default {
  title: 'Yummy UI/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Label {...args} />;

export const InfoSmall = Template.bind({});
InfoSmall.storyName = 'Info - Small';
InfoSmall.args = {
  type: 'info',
  size: 'small',
  label: 'Label',
};

export const InfoMedium = Template.bind({});
InfoMedium.storyName = 'Info - Medium';
InfoMedium.args = {
  ...InfoSmall.args,
  size: 'medium',
};

export const InfoLarge = Template.bind({});
InfoLarge.storyName = 'Info - Large';
InfoLarge.args = {
  ...InfoSmall.args,
  size: 'large',
};

export const WarningSmall = Template.bind({});
WarningSmall.storyName = 'Warning - Small';
WarningSmall.args = {
  type: 'warning',
  size: 'small',
  label: 'Label',
};

export const WarningMedium = Template.bind({});
WarningMedium.storyName = 'Warning - Medium';
WarningMedium.args = {
  ...WarningSmall.args,
  size: 'medium',
};

export const WarningLarge = Template.bind({});
WarningLarge.storyName = 'Warning - Large';
WarningLarge.args = {
  ...WarningSmall.args,
  size: 'large',
};

export const DangerSmall = Template.bind({});
DangerSmall.storyName = 'Danger - Small';
DangerSmall.args = {
  type: 'danger',
  size: 'small',
  label: 'Label',
};

export const DangerMedium = Template.bind({});
DangerMedium.storyName = 'Danger - Medium';
DangerMedium.args = {
  ...DangerSmall.args,
  size: 'medium',
};

export const DangerLarge = Template.bind({});
DangerLarge.storyName = 'Danger - Large';
DangerLarge.args = {
  ...DangerSmall.args,
  size: 'large',
};

export const GraySmall = Template.bind({});
GraySmall.storyName = 'Gray - Small';
GraySmall.args = {
  type: 'gray',
  size: 'small',
  label: 'Label',
};

export const GrayMedium = Template.bind({});
GrayMedium.storyName = 'Gray - Medium';
GrayMedium.args = {
  ...GraySmall.args,
  size: 'medium',
};

export const GrayLarge = Template.bind({});
GrayLarge.storyName = 'Gray - Large';
GrayLarge.args = {
  ...GraySmall.args,
  size: 'large',
};
