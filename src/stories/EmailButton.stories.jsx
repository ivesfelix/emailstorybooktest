import React from 'react';
import EmailButton, { EmailButtonHTML } from '../components/EmailButton';

export default {
  title: 'Email/EmailButton',
  component: EmailButton,
  includeStories: ['Interactive'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button text',
      defaultValue: 'Click Here'
    },
    href: {
      control: 'text',
      description: 'Button link URL',
      defaultValue: 'https://example.com'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      defaultValue: 'medium'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button style variant',
      defaultValue: 'primary'
    }
  }
};

export const Interactive = {
  args: {
    children: 'Click Here',
    href: 'https://example.com',
    size: 'medium',
    variant: 'primary'
  },
  parameters: {
    html: {
      transform: (code, context) => {
        return EmailButtonHTML(
          context.args.children, 
          context.args.href, 
          context.args.size, 
          context.args.variant
        );
      }
    }
  }
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
    <EmailButton size="small">Small</EmailButton>
    <EmailButton size="medium">Medium</EmailButton>
    <EmailButton size="large">Large</EmailButton>
  </div>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
    <EmailButton variant="primary">Primary</EmailButton>
    <EmailButton variant="secondary">Secondary</EmailButton>
    <EmailButton variant="text">Text</EmailButton>
  </div>
);
