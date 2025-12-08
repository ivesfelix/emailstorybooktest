import React from 'react';
import { NavBar, generateNavBarHTML } from '../components/NavBar';

export default {
  title: 'Email Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    html: {
      transform: (code, story) => generateNavBarHTML(story.args),
    },
  },
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'URL for the logo image',
      table: { category: 'Logo' }
    },
    logoAlt: {
      control: 'text',
      description: 'Alt text for the logo',
      table: { category: 'Logo' }
    },
    logoWidth: {
      control: 'number',
      description: 'Width of the logo in pixels',
      table: { category: 'Logo' }
    },
    logoHeight: {
      control: 'number',
      description: 'Height of the logo in pixels',
      table: { category: 'Logo' }
    },
    showNavLink1: {
      control: 'boolean',
      description: 'Show/hide nav link 1',
      table: { category: 'Links', subcategory: 'Link 1' }
    },
    navLink1Text: {
      control: 'text',
      description: 'Nav link 1 text',
      table: { category: 'Links', subcategory: 'Link 1' }
    },
    navLink1Href: {
      control: 'text',
      description: 'Nav link 1 URL',
      table: { category: 'Links', subcategory: 'Link 1' }
    },
    showNavLink2: {
      control: 'boolean',
      description: 'Show/hide nav link 2',
      table: { category: 'Links', subcategory: 'Link 2' }
    },
    navLink2Text: {
      control: 'text',
      description: 'Nav link 2 text',
      table: { category: 'Links', subcategory: 'Link 2' }
    },
    navLink2Href: {
      control: 'text',
      description: 'Nav link 2 URL',
      table: { category: 'Links', subcategory: 'Link 2' }
    },
    showNavLink3: {
      control: 'boolean',
      description: 'Show/hide nav link 3',
      table: { category: 'Links', subcategory: 'Link 3' }
    },
    navLink3Text: {
      control: 'text',
      description: 'Nav link 3 text',
      table: { category: 'Links', subcategory: 'Link 3' }
    },
    navLink3Href: {
      control: 'text',
      description: 'Nav link 3 URL',
      table: { category: 'Links', subcategory: 'Link 3' }
    },
    leftPadding: {
      control: 'text',
      description: 'Left padding (e.g., 32px, 0)',
      table: { category: 'Layout' }
    },
  },
};

export const Default = {
  args: {
    logoSrc: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png',
    logoAlt: 'Logo',
    logoWidth: 50,
    logoHeight: 50,
    showNavLink1: true,
    navLink1Text: 'Trends',
    navLink1Href: '#',
    showNavLink2: true,
    navLink2Text: 'Gifts',
    navLink2Href: '#',
    showNavLink3: true,
    navLink3Text: 'Deals',
    navLink3Href: '#',
    leftPadding: '32px',
  },
};

export const NoLinks = {
  args: {
    ...Default.args,
    showNavLink1: false,
    showNavLink2: false,
    showNavLink3: false,
  },
};

export const NoLeftPadding = {
  args: {
    ...Default.args,
    leftPadding: '0',
  },
};
