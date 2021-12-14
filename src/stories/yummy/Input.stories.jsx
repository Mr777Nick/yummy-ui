import React from 'react';

import { Input } from './Input';

export default {
  title: 'Yummy UI/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  error: false,
  helperText: '',
  disabled: false,
}

export const InputHelperText = Template.bind({});
InputHelperText.args = {
  ...InputDefault.args,
  helperText: 'Helper Text',
}

export const InputError = Template.bind({});
InputError.args = {
  ...InputDefault.args,
  helperText: 'There is an error with this.',
  error: true,
}

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  ...InputDefault.args,
  disabled: true,
}