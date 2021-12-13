import React from 'react';

import { Banner } from './Banner';

export default {
  title: 'Yummy UI/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const BannerInfo = Template.bind({});
BannerInfo.args = {
  text: 'All items processed',
  type: 'info',
}

export const BannerSuccess = Template.bind({});
BannerSuccess.args = {
  text: 'Order successfully finished!',
  type: 'success',
}

export const BannerWarning = Template.bind({});
BannerWarning.args = {
  text: '1 of 2 item(s) processed',
  type: 'warning',
}

export const BannerDanger = Template.bind({});
BannerDanger.args = {
  text: 'Order #123456-78 is cancelled!',
  type: 'danger',
}