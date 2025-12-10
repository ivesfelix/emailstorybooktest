import React from 'react';
import { CatPropTemplate, CatPropTemplateHTML } from '../components/CatPropTemplate';

export default {
  title: 'Email Templates/CatProp',
  component: CatPropTemplate,
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
      transform: (code, story) => CatPropTemplateHTML(story.args),
    },
  },
  argTypes: {
    // NavBar controls
    navBarVariant: {
      control: { type: 'select' },
      options: ['Default', 'NoLinks', 'NoLeftPadding'],
      description: 'NavBar variant style',
      table: { category: 'NavBar' }
    },
    logoImage: {
      control: 'text',
      description: 'Logo image URL',
      table: { category: 'NavBar', subcategory: 'Logo' }
    },
    logoAlt: {
      table: { disable: true }
    },
    logoWidth: {
      control: 'number',
      description: 'Width of the logo in pixels',
      table: { category: 'NavBar', subcategory: 'Logo' }
    },
    logoHeight: {
      control: 'number',
      description: 'Height of the logo in pixels',
      table: { category: 'NavBar', subcategory: 'Logo' }
    },
    showNavLink1: {
      control: 'boolean',
      description: 'Show/hide nav link 1',
      table: { category: 'NavBar', subcategory: 'Link 1' }
    },
    navLink1Text: {
      control: 'text',
      description: 'Nav link 1 text',
      table: { category: 'NavBar', subcategory: 'Link 1' }
    },
    navLink1Href: {
      table: { disable: true }
    },
    showNavLink2: {
      control: 'boolean',
      description: 'Show/hide nav link 2',
      table: { category: 'NavBar', subcategory: 'Link 2' }
    },
    navLink2Text: {
      control: 'text',
      description: 'Nav link 2 text',
      table: { category: 'NavBar', subcategory: 'Link 2' }
    },
    navLink2Href: {
      table: { disable: true }
    },
    showNavLink3: {
      control: 'boolean',
      description: 'Show/hide nav link 3',
      table: { category: 'NavBar', subcategory: 'Link 3' }
    },
    navLink3Text: {
      control: 'text',
      description: 'Nav link 3 text',
      table: { category: 'NavBar', subcategory: 'Link 3' }
    },
    navLink3Href: {
      table: { disable: true }
    },
    
    // Hero controls
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
    heroImageVariant: {
      control: { type: 'select' },
      options: ['padded', 'full-bleed'],
      description: 'Hero image layout variant',
      table: { category: 'Hero', subcategory: 'Image' }
    },
    heroImageRatio: {
      control: { type: 'select' },
      options: ['16:9', '3:2', '5:4'],
      description: 'Hero image aspect ratio',
      table: { category: 'Hero', subcategory: 'Image' }
    },
    heroAlt: {
      table: { disable: true }
    },
    showHeroHeadline: {
      control: 'boolean',
      description: 'Show/hide headline',
      table: { category: 'Hero', subcategory: 'Content' }
    },
    headline: {
      control: 'text',
      description: 'Hero headline text',
      table: { category: 'Hero', subcategory: 'Content' }
    },
    showHeroSubtitle: {
      control: 'boolean',
      description: 'Show/hide subtitle',
      table: { category: 'Hero', subcategory: 'Content' }
    },
    subtitle: {
      control: 'text',
      description: 'Hero subtitle text',
      table: { category: 'Hero', subcategory: 'Content' }
    },
    showHeroButton: {
      control: 'boolean',
      description: 'Show/hide CTA button',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    heroButtonStyleType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Hero button style type',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    primaryButtonText: {
      control: 'text',
      description: 'CTA button text',
      table: { category: 'Hero', subcategory: 'CTA' }
    },
    primaryButtonHref: {
      table: { disable: true }
    },
    
    // ProductGrid controls
    gridRows: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Number of grid rows to display',
      table: { category: 'ProductGrid', subcategory: 'Layout' }
    },
    showGridButton: {
      control: 'boolean',
      description: 'Show/hide grid CTA button',
      table: { category: 'ProductGrid', subcategory: 'Layout' }
    },
    gridButtonStyleType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Grid button style type',
      table: { category: 'ProductGrid', subcategory: 'Layout' }
    },
    showGridMetadata: {
      control: 'boolean',
      description: 'Show/hide grid titles and prices',
      table: { category: 'ProductGrid', subcategory: 'Layout' }
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary CTA button text',
      table: { category: 'ProductGrid', subcategory: 'Layout' }
    },
    secondaryButtonHref: {
      table: { disable: true }
    },
    grid1Image: {
      control: 'text',
      description: 'Grid 1 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 1' }
    },
    grid1Title: {
      control: 'text',
      description: 'Grid 1 title',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 1' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid1Price: {
      control: 'text',
      description: 'Grid 1 price',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 1' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid2Image: {
      control: 'text',
      description: 'Grid 2 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 2' }
    },
    grid2Title: {
      control: 'text',
      description: 'Grid 2 title',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 2' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid2Price: {
      control: 'text',
      description: 'Grid 2 price',
      table: { category: 'ProductGrid', subcategory: 'Row 1 - Grid 2' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid3Image: {
      control: 'text',
      description: 'Grid 3 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 3' }
    },
    grid3Title: {
      control: 'text',
      description: 'Grid 3 title',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 3' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid3Price: {
      control: 'text',
      description: 'Grid 3 price',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 3' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid4Image: {
      control: 'text',
      description: 'Grid 4 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 4' }
    },
    grid4Title: {
      control: 'text',
      description: 'Grid 4 title',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 4' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid4Price: {
      control: 'text',
      description: 'Grid 4 price',
      table: { category: 'ProductGrid', subcategory: 'Row 2 - Grid 4' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid5Image: {
      control: 'text',
      description: 'Grid 5 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 5' }
    },
    grid5Title: {
      control: 'text',
      description: 'Grid 5 title',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 5' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid5Price: {
      control: 'text',
      description: 'Grid 5 price',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 5' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid6Image: {
      control: 'text',
      description: 'Grid 6 image URL',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 6' }
    },
    grid6Title: {
      control: 'text',
      description: 'Grid 6 title',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 6' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    grid6Price: {
      control: 'text',
      description: 'Grid 6 price',
      table: { category: 'ProductGrid', subcategory: 'Row 3 - Grid 6' },
      if: { arg: 'showGridMetadata', truthy: true }
    },
    
    // EvergreenModule controls
    evergreenIcon: {
      control: 'text',
      description: 'Icon image URL',
      table: { category: 'EvergreenModule', subcategory: 'Icon' }
    },
    evergreenIconAlt: {
      table: { disable: true }
    },
    evergreenIconWidth: {
      control: 'number',
      description: 'Icon width in pixels',
      table: { category: 'EvergreenModule', subcategory: 'Icon' }
    },
    evergreenIconHeight: {
      control: 'number',
      description: 'Icon height in pixels',
      table: { category: 'EvergreenModule', subcategory: 'Icon' }
    },
    evergreenHeading: {
      control: 'text',
      description: 'Module heading',
      table: { category: 'EvergreenModule', subcategory: 'Content' }
    },
    evergreenDescription: {
      control: 'text',
      description: 'Module description',
      table: { category: 'EvergreenModule', subcategory: 'Content' }
    },
    evergreenLinkText: {
      control: 'text',
      description: 'Link text',
      table: { category: 'EvergreenModule', subcategory: 'Link' }
    },
    evergreenLinkHref: {
      table: { disable: true }
    },
    
    // Footer controls
    footerVariant: {
      control: { type: 'select' },
      options: ['BuyerTransactional', 'BuyerMarketing'],
      description: 'Footer variant style (changes legal text)',
      table: { category: 'Footer'}
    },
    footerLogoImage: {
      table: { disable: true }
    },
    footerLogoAlt: {
      table: { disable: true }
    },
    footerLogoWidth: {
      table: { disable: true }
    },
    footerLogoHeight: {
      table: { disable: true }
    },
    showSocialSection: {
      table: { disable: true }
    },
    socialLabel: {
      table: { disable: true }
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
      table: { disable: true }
    },
    appLabel: {
      table: { disable: true }
    },
    appStoreHref: {
      table: { disable: true }
    },
    googlePlayHref: {
      table: { disable: true }
    },
  }
};

export const Default = {
  args: {
    // NavBar
    navBarVariant: 'Default',
    logoImage: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png',
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
    
    // Hero
    showHeroImage: true,
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    heroImageVariant: 'padded',
    heroImageRatio: '3:2',
    heroButtonStyleType: 'primary',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#',
    
    // ProductGrid
    gridRows: 2,
    showGridButton: true,
    gridButtonStyleType: 'secondary',
    secondaryButtonText: 'See more',
    secondaryButtonHref: '#',
    showGridMetadata: false,
    grid1Image: 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
    grid2Image: 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
    grid3Image: 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
    grid4Image: 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
    grid5Image: 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
    grid6Image: 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
    grid1Title: 'Product Title',
    grid1Price: '$25.00',
    grid2Title: 'Product Title',
    grid2Price: '$25.00',
    grid3Title: 'Product Title',
    grid3Price: '$25.00',
    grid4Title: 'Product Title',
    grid4Price: '$25.00',
    grid5Title: 'Product Title',
    grid5Price: '$25.00',
    grid6Title: 'Product Title',
    grid6Price: '$25.00',
    
    // EvergreenModule
    evergreenHeading: 'Shop straight from their studio',
    evergreenDescription: '97% of Etsy sellers in the US work and create from their own home.',
    evergreenLinkText: 'Explore more →',
    evergreenLinkHref: '#',
    evergreenIcon: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68a5e7f8ec01b100646c525f/original.png',
    evergreenIconAlt: 'Shop',
    evergreenIconWidth: 100,
    evergreenIconHeight: 100,
    
    // Footer
    footerVariant: 'BuyerMarketing',
    footerLogoImage: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
    footerLogoAlt: 'Etsy',
    footerLogoWidth: 63,
    footerLogoHeight: 32,
    showSocialSection: true,
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
  },
  render: (args) => <CatPropTemplate {...args} />
};
