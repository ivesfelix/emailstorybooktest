import React from 'react';
import { PersonalizedHero, PersonalizedHeroHTML } from '../components/PersonalizedHero';

export default {
  title: 'Components/PersonalizedHero',
  component: PersonalizedHero,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => PersonalizedHeroHTML(
        story.args.imageHref,
        story.args.imageSrc,
        story.args.headlineHref,
        story.args.headline,
        story.args.copyHref,
        story.args.copy,
        story.args.ctaHref,
        story.args.ctaLabel
      ),
    },
  },
};

export const Interactive = {
  args: {
    imageHref: 'https://www.etsy.com/',
    imageSrc: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    headlineHref: 'https://www.etsy.com/',
    headline: 'Next up for you: Dollhouse Miniatures',
    copyHref: 'https://www.etsy.com/personalized',
    copy: 'Discover your personalized roundup of Etsy finds, here to brighten your day.',
    ctaHref: 'https://www.etsy.com/shop-now',
    ctaLabel: 'Shop now'
  },
  argTypes: {
    imageHref: { control: 'text' },
    imageSrc: { control: 'text' },
    headlineHref: { control: 'text' },
    headline: { control: 'text' },
    copyHref: { control: 'text' },
    copy: { control: 'text' },
    ctaHref: { control: 'text' },
    ctaLabel: { control: 'text' }
  },
  render: (args) => <PersonalizedHero {...args} />
};
