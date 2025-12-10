import React from 'react';
import { ProductGrid, generateProductGridHTML } from '../components/ProductGrid';

export default {
  title: 'Email Components/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'padded',
    html: {
      transform: (code, story) => generateProductGridHTML(story.args),
    },
  },
  argTypes: {
    gridRows: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Number of grid rows to display',
      table: { category: 'Layout' }
    },
    showGridButton: {
      control: 'boolean',
      description: 'Show/hide grid CTA button',
      table: { category: 'Button' }
    },
    gridButtonStyleType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Grid button style type',
      table: { category: 'Button' }
    },
    showGridMetadata: {
      control: 'boolean',
      description: 'Show/hide grid titles and prices',
      table: { category: 'Layout' }
    },
    grid1Image: {
      control: 'text',
      description: 'Grid 1 image URL',
      table: { category: 'Row 1', subcategory: 'Grid 1' }
    },
    grid1Title: {
      control: 'text',
      description: 'Grid 1 title',
      table: { category: 'Row 1', subcategory: 'Grid 1' }
    },
    grid1Price: {
      control: 'text',
      description: 'Grid 1 price',
      table: { category: 'Row 1', subcategory: 'Grid 1' }
    },
    grid2Image: {
      control: 'text',
      description: 'Grid 2 image URL',
      table: { category: 'Row 1', subcategory: 'Grid 2' }
    },
    grid2Title: {
      control: 'text',
      description: 'Grid 2 title',
      table: { category: 'Row 1', subcategory: 'Grid 2' }
    },
    grid2Price: {
      control: 'text',
      description: 'Grid 2 price',
      table: { category: 'Row 1', subcategory: 'Grid 2' }
    },
    grid3Image: {
      control: 'text',
      description: 'Grid 3 image URL',
      table: { category: 'Row 2', subcategory: 'Grid 3' }
    },
    grid3Title: {
      control: 'text',
      description: 'Grid 3 title',
      table: { category: 'Row 2', subcategory: 'Grid 3' }
    },
    grid3Price: {
      control: 'text',
      description: 'Grid 3 price',
      table: { category: 'Row 2', subcategory: 'Grid 3' }
    },
    grid4Image: {
      control: 'text',
      description: 'Grid 4 image URL',
      table: { category: 'Row 2', subcategory: 'Grid 4' }
    },
    grid4Title: {
      control: 'text',
      description: 'Grid 4 title',
      table: { category: 'Row 2', subcategory: 'Grid 4' }
    },
    grid4Price: {
      control: 'text',
      description: 'Grid 4 price',
      table: { category: 'Row 2', subcategory: 'Grid 4' }
    },
    grid5Image: {
      control: 'text',
      description: 'Grid 5 image URL',
      table: { category: 'Row 3', subcategory: 'Grid 5' }
    },
    grid5Title: {
      control: 'text',
      description: 'Grid 5 title',
      table: { category: 'Row 3', subcategory: 'Grid 5' }
    },
    grid5Price: {
      control: 'text',
      description: 'Grid 5 price',
      table: { category: 'Row 3', subcategory: 'Grid 5' }
    },
    grid6Image: {
      control: 'text',
      description: 'Grid 6 image URL',
      table: { category: 'Row 3', subcategory: 'Grid 6' }
    },
    grid6Title: {
      control: 'text',
      description: 'Grid 6 title',
      table: { category: 'Row 3', subcategory: 'Grid 6' }
    },
    grid6Price: {
      control: 'text',
      description: 'Grid 6 price',
      table: { category: 'Row 3', subcategory: 'Grid 6' }
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Secondary CTA button text',
      table: { category: 'Button' }
    },
    secondaryButtonHref: {
      table: { disable: true }
    },
  },
};

export const TwoRows = {
  args: {
    gridRows: 2,
    showGridButton: true,
    gridButtonStyleType: 'secondary',
    grid1Image: 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
    grid2Image: 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
    grid3Image: 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
    grid4Image: 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
    grid5Image: 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
    grid6Image: 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
    showGridMetadata: false,
    grid1Title: 'Listing title',
    grid1Price: '$25.00',
    grid2Title: 'Listing title',
    grid2Price: '$25.00',
    grid3Title: 'Listing title',
    grid3Price: '$25.00',
    grid4Title: 'Listing title',
    grid4Price: '$25.00',
    grid5Title: 'Listing title',
    grid5Price: '$25.00',
    grid6Title: 'Listing title',
    grid6Price: '$25.00',
    secondaryButtonText: 'See more',
    secondaryButtonHref: '#',
  },
};

export const OneRow = {
  args: {
    ...TwoRows.args,
    gridRows: 1,
  },
};

export const ThreeRows = {
  args: {
    ...TwoRows.args,
    gridRows: 3,
  },
};

export const WithMetadata = {
  args: {
    ...TwoRows.args,
    showGridMetadata: true,
  },
};
