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
  },
  argTypes: {
    showNavLink1: {
      control: 'boolean',
      description: 'Show/hide nav link 1',
      table: { category: 'Nav Bar', subcategory: '1. Link 1' }
    },
    navLink1Text: {
      control: 'text',
      description: 'Nav link 1 text',
      table: { category: 'Nav Bar', subcategory: '1. Link 1' }
    },
    navLink1Href: {
      control: 'text',
      description: 'Nav link 1 URL',
      table: { category: 'Nav Bar', subcategory: '1. Link 1' }
    },
    showNavLink2: {
      control: 'boolean',
      description: 'Show/hide nav link 2',
      table: { category: 'Nav Bar', subcategory: '2. Link 2' }
    },
    navLink2Text: {
      control: 'text',
      description: 'Nav link 2 text',
      table: { category: 'Nav Bar', subcategory: '2. Link 2' }
    },
    navLink2Href: {
      control: 'text',
      description: 'Nav link 2 URL',
      table: { category: 'Nav Bar', subcategory: '2. Link 2' }
    },
    showNavLink3: {
      control: 'boolean',
      description: 'Show/hide nav link 3',
      table: { category: 'Nav Bar', subcategory: '3. Link 3' }
    },
    navLink3Text: {
      control: 'text',
      description: 'Nav link 3 text',
      table: { category: 'Nav Bar', subcategory: '3. Link 3' }
    },
    navLink3Href: {
      control: 'text',
      description: 'Nav link 3 URL',
      table: { category: 'Nav Bar', subcategory: '3. Link 3' }
    },
    showHeroImage: {
      control: 'boolean',
      description: 'Show/hide hero image',
      table: { category: 'Hero Section', subcategory: '1. Image' }
    },
    heroImage: {
      control: 'text',
      description: 'Hero image URL',
      table: { category: 'Hero Section', subcategory: '1. Image' }
    },
    heroAlt: {
      control: 'text',
      description: 'Hero image alt text',
      table: { category: 'Hero Section', subcategory: '1. Image' }
    },
    showHeroHeading: {
      control: 'boolean',
      description: 'Show/hide hero heading (h1)',
      table: { category: 'Hero Section', subcategory: '2. Heading' }
    },
    h1: {
      control: 'text',
      description: 'Main hero heading',
      table: { category: 'Hero Section', subcategory: '2. Heading' }
    },
    showHeroSubtitle: {
      control: 'boolean',
      description: 'Show/hide hero subtitle',
      table: { category: 'Hero Section', subcategory: '3. Subtitle' }
    },
    subtitle: {
      control: 'text',
      description: 'Hero subheading text',
      table: { category: 'Hero Section', subcategory: '3. Subtitle' }
    },
    showHeroCTA: {
      control: 'boolean',
      description: 'Show/hide hero CTA button',
      table: { category: 'Hero Section', subcategory: '4. CTA' }
    },
    primaryButtonText: {
      control: 'text',
      description: 'Primary CTA button text',
      table: { category: 'Hero Section', subcategory: '4. CTA' }
    },
    primaryButtonHref: {
      control: 'text',
      description: 'Primary CTA button link',
      table: { category: 'Hero Section', subcategory: '4. CTA' }
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
      table: { category: 'Evergreen Section' }
    },
    evergreenDescription: {
      control: 'text',
      description: 'Evergreen section description',
      table: { category: 'Evergreen Section' }
    },
    evergreenLinkText: {
      control: 'text',
      description: 'Evergreen section link text',
      table: { category: 'Evergreen Section' }
    },
    evergreenLinkHref: {
      control: 'text',
      description: 'Evergreen section link URL',
      table: { category: 'Evergreen Section' }
    }
  }
};

export const Default = {
  args: {
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
    showGridMetadata: false,
    grid1Title: 'Miniature Butter Sticks',
    grid1Price: '$24.50',
    grid2Title: 'Dollhouse Miniature',
    grid2Price: '$32.00',
    grid3Title: 'Tiny Kitchen Set',
    grid3Price: '$18.75',
    grid4Title: 'Mini Accessories',
    grid4Price: '$28.99',
    secondaryButtonText: 'See more',
    secondaryButtonHref: '#',
    evergreenHeading: 'Shop straight from their studio',
    evergreenDescription: '97% of Etsy sellers in the US work and create from their own home.',
    evergreenLinkText: 'Explore more →',
    evergreenLinkHref: '#'
  },
  render: (args) => <EmailTemplate {...args} />
};


