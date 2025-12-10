import React from 'react';
import { Footer, generateFooterHTML } from '../components/Footer';

export default {
  title: 'Email Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => generateFooterHTML(story.args),
    },
  },
  argTypes: {
    logoImage: {
      control: 'text',
      description: 'Footer logo URL',
      table: { category: 'Logo' }
    },
    logoAlt: {
      table: { disable: true }
    },
    showSocialIcons: {
      control: 'boolean',
      description: 'Show/hide social media icons',
      table: { category: 'Social Media' }
    },
    socialLabel: {
      control: 'text',
      description: 'Social media section label',
      table: { category: 'Social Media' }
    },
    instagramHref: {
      table: { disable: true }
    },
    facebookHref: {
      table: { disable: true }
    },
    threadsHref: {
      table: { disable: true }
    },
    pinterestHref: {
      table: { disable: true }
    },
    tiktokHref: {
      table: { disable: true }
    },
    showAppBadges: {
      control: 'boolean',
      description: 'Show/hide app store badges section',
      table: { category: 'App Store Badges' }
    },
    appLabel: {
      control: 'text',
      description: 'App store badges section label',
      table: { category: 'App Store Badges' }
    },
    appStoreHref: {
      table: { disable: true }
    },
    googlePlayHref: {
      table: { disable: true }
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
    logoImage: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
    logoAlt: 'Etsy',
    showSocialIcons: true,
    socialLabel: "Let's be friends",
    instagramHref: '#',
    facebookHref: '#',
    threadsHref: '#',
    pinterestHref: '#',
    tiktokHref: '#',
    showAppBadges: true,
    appLabel: 'Download the Etsy app',
    appStoreHref: '#',
    googlePlayHref: '#',
    legalText: '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on <a href="#" style="color: #665e5c; text-decoration: underline;">Etsy.com</a> with this email address.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>',
  },
};

export const BuyerMarketing = {
  args: {
    logoImage: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
    logoAlt: 'Etsy',
    showSocialIcons: true,
    socialLabel: "Let's be friends",
    instagramHref: '#',
    facebookHref: '#',
    threadsHref: '#',
    pinterestHref: '#',
    tiktokHref: '#',
    showAppBadges: true,
    appLabel: 'Download the Etsy app',
    appStoreHref: '#',
    googlePlayHref: '#',
    legalText: '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on Etsy.com with this email address. To stop receiving Etsy marketing emails, <a href="#" style="color: #665e5c; text-decoration: underline;">unsubscribe here</a>.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>',
  },
};
