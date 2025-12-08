import React from 'react';
import { EmailTemplate, EmailTemplateHTML } from '../components/EmailTemplate';

export default {
  title: 'Email Templates/CatProp',
  component: EmailTemplate,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        iphone5: {
          name: 'iPhone 5',
          styles: {
            width: '320px',
            height: '568px',
          },
          type: 'mobile',
        },
        iphone14pro: {
          name: 'iPhone 14 Pro',
          styles: {
            width: '393px',
            height: '852px',
          },
          type: 'mobile',
        },
      },
    },
    html: {
      transform: (code, story) => EmailTemplateHTML(story.args),
    },
    controls: {
      sort: 'none'
    },
  },
  argTypes: {
    showNavLink1: {
      control: 'boolean',
      description: 'Show/hide nav link 1',
      table: { category: 'Nav Bar', subcategory: 'Link 1' }
    },
    navLink1Text: {
      control: 'text',
      description: 'Nav link 1 text',
      table: { category: 'Nav Bar', subcategory: 'Link 1' }
    },
    navLink1Href: {
      control: 'text',
      description: 'Nav link 1 URL',
      table: { category: 'Nav Bar', subcategory: 'Link 1' }
    },
    showNavLink2: {
      control: 'boolean',
      description: 'Show/hide nav link 2',
      table: { category: 'Nav Bar', subcategory: 'Link 2' }
    },
    navLink2Text: {
      control: 'text',
      description: 'Nav link 2 text',
      table: { category: 'Nav Bar', subcategory: 'Link 2' }
    },
    navLink2Href: {
      control: 'text',
      description: 'Nav link 2 URL',
      table: { category: 'Nav Bar', subcategory: 'Link 2' }
    },
    showNavLink3: {
      control: 'boolean',
      description: 'Show/hide nav link 3',
      table: { category: 'Nav Bar', subcategory: 'Link 3' }
    },
    navLink3Text: {
      control: 'text',
      description: 'Nav link 3 text',
      table: { category: 'Nav Bar', subcategory: 'Link 3' }
    },
    navLink3Href: {
      control: 'text',
      description: 'Nav link 3 URL',
      table: { category: 'Nav Bar', subcategory: 'Link 3' }
    },
    showHeroImage: {
      control: 'boolean',
      description: 'Show/hide hero image',
      table: { category: 'Hero', subcategory: 'Image' }
    },
    heroImage: {
      control: 'text',
      description: 'Hero image URL',
      table: { category: 'Hero', subcategory: 'Image' }
    },
    heroAlt: {
      control: 'text',
      description: 'Hero image alt text',
      table: { category: 'Hero', subcategory: 'Image' }
    },
    showHeroHeading: {
      control: 'boolean',
      description: 'Show/hide hero heading (h1)',
      table: { category: 'Hero', subcategory: 'Heading' }
    },
    h1: {
      control: 'text',
      description: 'Main hero heading',
      table: { category: 'Hero', subcategory: 'Heading' }
    },
    showHeroSubtitle: {
      control: 'boolean',
      description: 'Show/hide hero subtitle',
      table: { category: 'Hero', subcategory: 'Subtitle' }
    },
    subtitle: {
      control: 'text',
      description: 'Hero subheading text',
      table: { category: 'Hero', subcategory: 'Subtitle' }
    },
    showHeroCTA: {
      control: 'boolean',
      description: 'Show/hide hero CTA button',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    primaryButtonText: {
      control: 'text',
      description: 'Primary CTA button text',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    primaryButtonHref: {
      control: 'text',
      description: 'Primary CTA button link',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    gridRows: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Number of grid rows to display',
      table: { category: 'Grid' }
    },
    grid1Image: {
      control: 'text',
      description: 'Grid 1 image URL',
      table: { category: 'Grid' }
    },
    grid2Image: {
      control: 'text',
      description: 'Grid 2 image URL',
      table: { category: 'Grid' }
    },
    grid3Image: {
      control: 'text',
      description: 'Grid 3 image URL',
      table: { category: 'Grid' }
    },
    grid4Image: {
      control: 'text',
      description: 'Grid 4 image URL',
      table: { category: 'Grid' }
    },
    grid5Image: {
      control: 'text',
      description: 'Grid 5 image URL',
      table: { category: 'Grid' },
      if: { arg: 'gridRows', eq: 3 }
    },
    grid6Image: {
      control: 'text',
      description: 'Grid 6 image URL',
      table: { category: 'Grid' },
      if: { arg: 'gridRows', eq: 3 }
    },
    showGridMetadata: {
      control: 'boolean',
      description: 'Show/hide grid metadata (title and price)',
      table: { category: 'Grid' }
    },
    grid1Title: {
      control: 'text',
      description: 'Grid 1 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid1Price: {
      control: 'text',
      description: 'Grid 1 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid2Title: {
      control: 'text',
      description: 'Grid 2 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid2Price: {
      control: 'text',
      description: 'Grid 2 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid3Title: {
      control: 'text',
      description: 'Grid 3 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid3Price: {
      control: 'text',
      description: 'Grid 3 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid4Title: {
      control: 'text',
      description: 'Grid 4 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid4Price: {
      control: 'text',
      description: 'Grid 4 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid5Title: {
      control: 'text',
      description: 'Grid 5 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid5Price: {
      control: 'text',
      description: 'Grid 5 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid6Title: {
      control: 'text',
      description: 'Grid 6 title',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid6Price: {
      control: 'text',
      description: 'Grid 6 price',
      table: { category: 'Grid' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary CTA button text',
      table: { category: 'Grid' }
    },
    secondaryButtonHref: {
      control: 'text',
      description: 'Secondary CTA button link',
      table: { category: 'Grid' }
    },
    evergreenHeading: {
      control: 'text',
      description: 'Evergreen section heading',
      table: { category: 'Evergreen' }
    },
    evergreenDescription: {
      control: 'text',
      description: 'Evergreen section description',
      table: { category: 'Evergreen' }
    },
    evergreenLinkText: {
      control: 'text',
      description: 'Evergreen section link text',
      table: { category: 'Evergreen' }
    },
    evergreenLinkHref: {
      control: 'text',
      description: 'Evergreen section link URL',
      table: { category: 'Evergreen' }
    }
  }
};

export const Default = {
  args: {
    gridRows: 2,
    showNavLink1: true,
    navLink1Text: 'Trends',
    navLink1Href: '#',
    showNavLink2: true,
    navLink2Text: 'Gifts',
    navLink2Href: '#',
    showNavLink3: true,
    navLink3Text: 'Deals',
    navLink3Href: '#',
    showHeroImage: true,
    showHeroHeading: true,
    showHeroSubtitle: true,
    showHeroCTA: true,
    h1: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
    grid1Image: 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
    grid2Image: 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
    grid3Image: 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
    grid4Image: 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
    grid5Image: 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
    grid6Image: 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
    showGridMetadata: false,
    grid1Title: 'Listing title',
    grid1Price: '$24.50',
    grid2Title: 'Listing title',
    grid2Price: '$32.00',
    grid3Title: 'Listing title',
    grid3Price: '$18.75',
    grid4Title: 'Listing title',
    grid4Price: '$28.99',
    grid5Title: 'Listing title',
    grid5Price: '$22.00',
    grid6Title: 'Listing title',
    grid6Price: '$35.50',
    secondaryButtonText: 'See more',
    secondaryButtonHref: '#',
    evergreenHeading: 'Shop straight from their studio',
    evergreenDescription: '97% of Etsy sellers in the US work and create from their own home.',
    evergreenLinkText: 'Explore more →',
    evergreenLinkHref: '#'
  },
  render: (args) => <EmailTemplate {...args} />
};


