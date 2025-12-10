import React from 'react';
import { HeroImage, generateHeroImageHTML } from '../components/HeroImage';

export default {
  title: 'Email Components/Hero Image',
  component: HeroImage,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => generateHeroImageHTML(story.args),
    },
  },
  argTypes: {
    heroImage: {
      control: 'text',
      description: 'Hero image URL',
      table: { category: 'Image' }
    },
    heroAlt: {
      control: false,
      table: { disable: true }
    },
    heroImageVariant: {
      control: 'select',
      options: ['padded', 'full-bleed'],
      description: 'Hero image layout variant',
      table: { category: 'Layout' }
    },
    heroImageRatio: {
      control: 'select',
      options: ['16:9', '3:2', '5:4'],
      description: 'Hero image aspect ratio (only applies to padded variant)',
      table: { category: 'Layout' }
    },
    imageHref: {
      control: false,
      table: { disable: true }
    },
  },
};

export const Padded16x9 = {
  args: {
    heroImageVariant: 'padded',
    heroImageRatio: '16:9',
    imageHref: '#',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
  },
};

export const Padded3x2 = {
  args: {
    ...Padded16x9.args,
    heroImageRatio: '3:2',
  },
};

export const Padded5x4 = {
  args: {
    ...Padded16x9.args,
    heroImageRatio: '5:4',
  },
};

export const FullBleed16x9 = {
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '16:9',
  },
};

export const FullBleed3x2 = {
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '3:2',
  },
};

export const FullBleed5x4 = {
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '5:4',
  },
};
