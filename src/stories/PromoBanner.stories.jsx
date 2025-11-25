import React from 'react';
import { PromoBanner, PromoBannerHTML } from '../components/PromoBanner';

export default {
  title: 'Etsy Components/PromoBanner',
  component: PromoBanner,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => PromoBannerHTML(
        story.args.imageSrc,
        story.args.headline,
        story.args.copy,
        story.args.href,
        story.args.linkText
      ),
    },
  },
};

export const Interactive = {
  args: {
    imageSrc: '/images/bannerImage.png',
    headline: 'Free shipping on orders $35+',
    copy: 'Save on shipping costs when you shop your favorite items. Limited time offer.',
    href: 'https://www.etsy.com/learn-more',
    linkText: 'Learn more'
  },
  argTypes: {
    imageSrc: { control: 'text' },
    headline: { control: 'text' },
    copy: { control: 'text' },
    href: { control: 'text' },
    linkText: { control: 'text' }
  },
  render: (args) => <PromoBanner {...args} />
};
