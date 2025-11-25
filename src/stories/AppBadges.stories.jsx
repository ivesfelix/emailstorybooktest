import React from 'react';
import { AppBadges, AppBadgesHTML } from '../components/AppBadges';

export default {
  title: 'Etsy Components/AppBadges',
  component: AppBadges,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => AppBadgesHTML(
        story.args.headline,
        story.args.appStoreHref,
        story.args.appStoreSrc,
        story.args.googlePlayHref,
        story.args.googlePlaySrc
      ),
    },
  },
};

export const Interactive = {
  args: {
    headline: 'Download the Etsy app',
    appStoreHref: 'https://apps.apple.com/etsy',
    appStoreSrc: '/images/AppsStoreButton.png',
    googlePlayHref: 'https://play.google.com/store/apps/etsy',
    googlePlaySrc: '/images/GooglePlayButton.png'
  },
  argTypes: {
    headline: { control: 'text', description: 'Headline text above the app badges' },
    appStoreHref: { control: 'text' },
    appStoreSrc: { control: 'text' },
    googlePlayHref: { control: 'text' },
    googlePlaySrc: { control: 'text' }
  },
  render: (args) => <AppBadges {...args} />
};
