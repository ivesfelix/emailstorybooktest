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
    h1: {
      control: 'text',
      description: 'Main hero heading',
      table: { category: 'Hero Section' }
    },
    subtitle: {
      control: 'text',
      description: 'Hero subheading text',
      table: { category: 'Hero Section' }
    },
    heroImage: {
      control: 'text',
      description: 'Hero image URL',
      table: { category: 'Hero Section' }
    },
    heroAlt: {
      control: 'text',
      description: 'Hero image alt text',
      table: { category: 'Hero Section' }
    },
    primaryButtonText: {
      control: 'text',
      description: 'Primary CTA button text',
      table: { category: 'Hero Section' }
    },
    primaryButtonHref: {
      control: 'text',
      description: 'Primary CTA button link',
      table: { category: 'Hero Section' }
    },
    product1Image: {
      control: 'text',
      description: 'Product 1 image URL',
      table: { category: 'Products' }
    },
    product2Image: {
      control: 'text',
      description: 'Product 2 image URL',
      table: { category: 'Products' }
    },
    product3Image: {
      control: 'text',
      description: 'Product 3 image URL',
      table: { category: 'Products' }
    },
    product4Image: {
      control: 'text',
      description: 'Product 4 image URL',
      table: { category: 'Products' }
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary CTA button text',
      table: { category: 'Products' }
    },
    secondaryButtonHref: {
      control: 'text',
      description: 'Secondary CTA button link',
      table: { category: 'Products' }
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
    h1: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
    product1Image: 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
    product2Image: 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
    product3Image: 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
    product4Image: 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
    secondaryButtonText: 'See more',
    secondaryButtonHref: '#',
    evergreenHeading: 'Shop straight from their studio',
    evergreenDescription: '97% of Etsy sellers in the US work and create from their own home.',
    evergreenLinkText: 'Explore more →',
    evergreenLinkHref: '#'
  },
  render: (args) => <EmailTemplate {...args} />
};


