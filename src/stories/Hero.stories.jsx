import React from 'react';
import { Hero, generateHeroHTML } from '../components/Hero';
import { HeroWithImage, generateHeroWithImageHTML } from '../components/HeroWithImage';

export default {
  title: 'Email Components/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => {
        // Use HeroWithImage generator for Default story, Hero generator for others
        if (story.title.includes('Default')) {
          return generateHeroWithImageHTML(story.args);
        }
        return generateHeroHTML(story.args);
      },
    },
  },
  argTypes: {
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
    heroButtonStyleType: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style type',
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
      table: { category: 'Image' }
    },
    heroImageRatio: {
      control: 'select',
      options: ['16:9', '3:2', '5:4'],
      description: 'Hero image aspect ratio',
      table: { category: 'Image' }
    },
    imageHref: {
      control: false,
      table: { disable: true }
    },
  },
};

export const Default = {
  render: (args) => <HeroWithImage {...args} />,
  args: {
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    heroImageVariant: 'padded',
    heroImageRatio: '3:2',
    imageHref: '#',
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    heroButtonStyleType: 'primary',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
  },
};

export const TextWithButton = {
  args: {
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    heroButtonStyleType: 'primary',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
  },
};

export const MinimalHero = {
  args: {
    ...Default.args,
    showHeroSubtitle: false,
  },
};

export const TextOnly = {
  args: {
    ...Default.args,
    showHeroButton: false,
  },
};
