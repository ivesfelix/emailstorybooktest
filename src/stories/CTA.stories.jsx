import React from 'react';
import { CTA, CTAHTML } from '../components/CTA';

export default {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => CTAHTML(
        story.args.children,
        story.args.href,
        story.args.variant
      ),
    },
  },
};

export const Interactive = {
  args: {
    children: 'Shop now',
    href: 'https://www.etsy.com',
    variant: 'primary'
  },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  },
  render: (args) => <CTA {...args} />
};

export const Primary = {
  args: {
    children: 'Primary Button',
    href: '#',
    variant: 'primary'
  },
  render: (args) => <CTA {...args} />
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    href: '#',
    variant: 'secondary'
  },
  render: (args) => <CTA {...args} />
};
