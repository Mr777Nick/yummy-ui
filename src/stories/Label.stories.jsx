import React from 'react';

import { Label } from './Label';

export default {
  title: 'Example/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Label {...args} />;

export const InfoSmall = Template.bind({});
InfoSmall.args = {
  type: 'info',
  size: 'small',
  label: 'Label',
};

export const InfoMedium = Template.bind({});
InfoMedium.args = {
  type: 'info',
  size: 'medium',
  label: 'Label',
};

export const InfoLarge = Template.bind({});
InfoLarge.args = {
  type: 'info',
  size: 'large',
  label: 'Label',
};

export const WarningSmall = Template.bind({});
WarningSmall.args = {
  type: 'warning',
  size: 'small',
  label: 'Label',
};

export const WarningMedium = Template.bind({});
WarningMedium.args = {
  type: 'warning',
  size: 'medium',
  label: 'Label',
};

export const WarningLarge = Template.bind({});
WarningLarge.args = {
  type: 'warning',
  size: 'large',
  label: 'Label',
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  type: 'danger',
  size: 'small',
  label: 'Label',
};

export const DangerMedium = Template.bind({});
DangerMedium.args = {
  type: 'danger',
  size: 'medium',
  label: 'Label',
};

export const DangerLarge = Template.bind({});
DangerLarge.args = {
  type: 'danger',
  size: 'large',
  label: 'Label',
};

export const GraySmall = Template.bind({});
GraySmall.args = {
  type: 'gray',
  size: 'small',
  label: 'Label',
};

export const GrayMedium = Template.bind({});
GrayMedium.args = {
  type: 'gray',
  size: 'medium',
  label: 'Label',
};

export const GrayLarge = Template.bind({});
GrayLarge.args = {
  type: 'gray',
  size: 'large',
  label: 'Label',
};
