import React from 'react';
import { Hero, generateHeroHTML } from '../components/Hero';

export default {
  title: 'Email Components/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => generateHeroHTML(story.args),
    },
  },
  argTypes: {
    showHeroImage: {
      control: 'boolean',
      description: 'Show/hide hero image',
      table: { category: 'Image' }
    },
    heroImage: {
      control: 'text',
      description: 'Hero image URL',
      table: { category: 'Image' }
    },
    heroAlt: {
      control: 'text',
      description: 'Hero image alt text',
      table: { category: 'Image' }
    },
    showHeroHeadline: {
      control: 'boolean',
      description: 'Show/hide headline',
      table: { category: 'Content' }
    },
    headline: {
      control: 'text',
      description: 'Hero headline text',
      table: { category: 'Content' }
    },
    showHeroSubtitle: {
      control: 'boolean',
      description: 'Show/hide subtitle',
      table: { category: 'Content' }
    },
    subtitle: {
      control: 'text',
      description: 'Hero subtitle text',
      table: { category: 'Content' }
    },
    showHeroButton: {
      control: 'boolean',
      description: 'Show/hide CTA button',
      table: { category: 'CTA' }
    },
    primaryButtonText: {
      control: 'text',
      description: 'CTA button text',
      table: { category: 'CTA' }
    },
    primaryButtonHref: {
      control: 'text',
      description: 'CTA button URL',
      table: { category: 'CTA' }
    },
  },
};

export const Default = {
  args: {
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    showHeroImage: true,
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
  },
};

export const NoImage = {
  args: {
    ...Default.args,
    showHeroImage: false,
  },
};

export const MinimalHero = {
  args: {
    ...Default.args,
    showHeroImage: false,
    showHeroSubtitle: false,
  },
};

export const TextOnly = {
  args: {
    ...Default.args,
    showHeroImage: false,
    showHeroButton: false,
  },
};
