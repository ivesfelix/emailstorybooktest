import React from 'react';
import { EvergreenModule, generateEvergreenModuleHTML } from '../components/EvergreenModule';

export default {
  title: 'Email Components/EvergreenModule',
  component: EvergreenModule,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => generateEvergreenModuleHTML(story.args),
    },
  },
  argTypes: {
    evergreenIcon: {
      control: 'text',
      description: 'Icon image URL',
      table: { category: 'Icon' }
    },
    evergreenIconAlt: {
      table: { disable: true }
    },
    evergreenIconWidth: {
      control: 'number',
      description: 'Icon width in pixels',
      table: { category: 'Icon' }
    },
    evergreenIconHeight: {
      control: 'number',
      description: 'Icon height in pixels',
      table: { category: 'Icon' }
    },
    evergreenHeading: {
      control: 'text',
      description: 'Module heading',
      table: { category: 'Content' }
    },
    evergreenDescription: {
      control: 'text',
      description: 'Module description',
      table: { category: 'Content' }
    },
    evergreenLinkText: {
      control: 'text',
      description: 'Link text',
      table: { category: 'Content' }
    },
    evergreenLinkHref: {
      table: { disable: true }
    },
  },
};

export const Default = {
  args: {
    evergreenHeading: 'Shop straight from their studio',
    evergreenDescription: '97% of Etsy sellers in the US work and create from their own home.',
    evergreenLinkText: 'Explore more →',
    evergreenLinkHref: '#',
    evergreenIcon: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68a5e7f8ec01b100646c525f/original.png',
    evergreenIconAlt: 'Shop',
    evergreenIconWidth: 100,
    evergreenIconHeight: 100,
  },
};
