import React from 'react';
import { Footer, generateFooterHTML } from '../components/Footer';

export default {
  title: 'Email Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    html: {
      transform: (code, story) => generateFooterHTML(story.args),
    },
  },
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'Footer logo URL',
      table: { category: 'Logo' }
    },
    logoAlt: {
      control: 'text',
      description: 'Footer logo alt text',
      table: { category: 'Logo' }
    },
    logoWidth: {
      control: 'number',
      description: 'Logo width in pixels',
      table: { category: 'Logo' }
    },
    logoHeight: {
      control: 'number',
      description: 'Logo height in pixels',
      table: { category: 'Logo' }
    },
    showSocialSection: {
      control: 'boolean',
      description: 'Show/hide social media section',
      table: { category: 'Social Media' }
    },
    socialLabel: {
      control: 'text',
      description: 'Social media section label',
      table: { category: 'Social Media' }
    },
    instagramHref: {
      control: 'text',
      description: 'Instagram URL',
      table: { category: 'Social Media' }
    },
    facebookHref: {
      control: 'text',
      description: 'Facebook URL',
      table: { category: 'Social Media' }
    },
    threadsHref: {
      control: 'text',
      description: 'Threads URL',
      table: { category: 'Social Media' }
    },
    pinterestHref: {
      control: 'text',
      description: 'Pinterest URL',
      table: { category: 'Social Media' }
    },
    tiktokHref: {
      control: 'text',
      description: 'TikTok URL',
      table: { category: 'Social Media' }
    },
    showAppSection: {
      control: 'boolean',
      description: 'Show/hide app download section',
      table: { category: 'App Download' }
    },
    appLabel: {
      control: 'text',
      description: 'App download section label',
      table: { category: 'App Download' }
    },
    appStoreHref: {
      control: 'text',
      description: 'App Store URL',
      table: { category: 'App Download' }
    },
    googlePlayHref: {
      control: 'text',
      description: 'Google Play URL',
      table: { category: 'App Download' }
    },
    legalText: {
      control: 'text',
      description: 'Legal text (can include HTML with paragraph tags)',
      table: { category: 'Legal' }
    },
  },
};

export const BuyerTransactional = {
  args: {
    logoSrc: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
    logoAlt: 'Etsy',
    logoWidth: 63,
    logoHeight: 32,
    showSocialSection: true,
    socialLabel: "Let's be friends",
    instagramHref: '#',
    facebookHref: '#',
    threadsHref: '#',
    pinterestHref: '#',
    tiktokHref: '#',
    showAppSection: true,
    appLabel: 'Download the Etsy app',
    appStoreHref: '#',
    googlePlayHref: '#',
    legalText: '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on <a href="#" style="color: #665e5c; text-decoration: underline;">Etsy.com</a> with this email address.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>',
  },
};

export const BuyerMarketing = {
  args: {
    logoSrc: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
    logoAlt: 'Etsy',
    logoWidth: 63,
    logoHeight: 32,
    showSocialSection: true,
    socialLabel: "Let's be friends",
    instagramHref: '#',
    facebookHref: '#',
    threadsHref: '#',
    pinterestHref: '#',
    tiktokHref: '#',
    showAppSection: true,
    appLabel: 'Download the Etsy app',
    appStoreHref: '#',
    googlePlayHref: '#',
    legalText: '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on Etsy.com with this email address. To stop receiving Etsy marketing emails, <a href="#" style="color: #665e5c; text-decoration: underline;">unsubscribe here</a>.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>',
  },
};
