import React from 'react';
import { ProductGrid, generateProductGridHTML } from '../components/ProductGrid';

export default {
  title: 'Email Components/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'fullscreen',
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
    showGridMetadata: {
      control: 'boolean',
      description: 'Show/hide product titles and prices',
      table: { category: 'Layout' }
    },
    grid1Image: {
      control: 'text',
      description: 'Product 1 image URL',
      table: { category: 'Row 1', subcategory: 'Product 1' }
    },
    grid1Title: {
      control: 'text',
      description: 'Product 1 title',
      table: { category: 'Row 1', subcategory: 'Product 1' }
    },
    grid1Price: {
      control: 'text',
      description: 'Product 1 price',
      table: { category: 'Row 1', subcategory: 'Product 1' }
    },
    grid2Image: {
      control: 'text',
      description: 'Product 2 image URL',
      table: { category: 'Row 1', subcategory: 'Product 2' }
    },
    grid2Title: {
      control: 'text',
      description: 'Product 2 title',
      table: { category: 'Row 1', subcategory: 'Product 2' }
    },
    grid2Price: {
      control: 'text',
      description: 'Product 2 price',
      table: { category: 'Row 1', subcategory: 'Product 2' }
    },
    grid3Image: {
      control: 'text',
      description: 'Product 3 image URL',
      table: { category: 'Row 2', subcategory: 'Product 3' }
    },
    grid3Title: {
      control: 'text',
      description: 'Product 3 title',
      table: { category: 'Row 2', subcategory: 'Product 3' }
    },
    grid3Price: {
      control: 'text',
      description: 'Product 3 price',
      table: { category: 'Row 2', subcategory: 'Product 3' }
    },
    grid4Image: {
      control: 'text',
      description: 'Product 4 image URL',
      table: { category: 'Row 2', subcategory: 'Product 4' }
    },
    grid4Title: {
      control: 'text',
      description: 'Product 4 title',
      table: { category: 'Row 2', subcategory: 'Product 4' }
    },
    grid4Price: {
      control: 'text',
      description: 'Product 4 price',
      table: { category: 'Row 2', subcategory: 'Product 4' }
    },
    grid5Image: {
      control: 'text',
      description: 'Product 5 image URL',
      table: { category: 'Row 3', subcategory: 'Product 5' }
    },
    grid5Title: {
      control: 'text',
      description: 'Product 5 title',
      table: { category: 'Row 3', subcategory: 'Product 5' }
    },
    grid5Price: {
      control: 'text',
      description: 'Product 5 price',
      table: { category: 'Row 3', subcategory: 'Product 5' }
    },
    grid6Image: {
      control: 'text',
      description: 'Product 6 image URL',
      table: { category: 'Row 3', subcategory: 'Product 6' }
    },
    grid6Title: {
      control: 'text',
      description: 'Product 6 title',
      table: { category: 'Row 3', subcategory: 'Product 6' }
    },
    grid6Price: {
      control: 'text',
      description: 'Product 6 price',
      table: { category: 'Row 3', subcategory: 'Product 6' }
    },
  },
};

export const TwoRows = {
  args: {
    gridRows: 2,
    grid1Image: 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
    grid2Image: 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
    grid3Image: 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
    grid4Image: 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
    grid5Image: 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
    grid6Image: 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
    showGridMetadata: false,
    grid1Title: 'Handmade Vase',
    grid1Price: '$32.00',
    grid2Title: 'Ceramic Bowl',
    grid2Price: '$28.00',
    grid3Title: 'Woven Basket',
    grid3Price: '$45.00',
    grid4Title: 'Clay Mug',
    grid4Price: '$22.00',
    grid5Title: 'Art Print',
    grid5Price: '$18.00',
    grid6Title: 'Throw Pillow',
    grid6Price: '$38.00',
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
