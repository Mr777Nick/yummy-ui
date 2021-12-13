import React from 'react';

import { Loader } from './Loader';

export default {
  title: 'Yummy UI/Loader',
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const CircleLoader = Template.bind({});
CircleLoader.args = {
  type: 'circle',
};