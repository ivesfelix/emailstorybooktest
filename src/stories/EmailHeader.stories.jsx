import React from 'react';
import EmailHeader, { EmailHeaderHTML } from '../components/EmailHeader';

export default {
  title: 'Email/EmailHeader',
  component: EmailHeader,
  includeStories: ['Interactive'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text',
      defaultValue: 'Monthly Newsletter'
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle text',
      defaultValue: 'Latest updates and tips'
    },
    layout: {
      control: 'select',
      options: ['logo-center', 'logo-left', 'logo-left-links'],
      description: 'Header layout style',
      defaultValue: 'logo-center'
    },
    logoUrl: {
      control: 'text',
      description: 'Logo image URL',
      defaultValue: 'https://via.placeholder.com/150x50?text=Logo'
    }
  }
};

export const Interactive = {
  render: (args) => <EmailHeader {...args} />,
  args: {
    title: 'Monthly Newsletter',
    subtitle: 'Latest updates and tips',
    layout: 'logo-center',
    logoUrl: 'https://via.placeholder.com/150x50?text=Logo',
    links: [
      { text: 'Home', url: '#' },
      { text: 'About', url: '#' },
      { text: 'Contact', url: '#' }
    ]
  },
  parameters: {
    html: {
      transform: (code, context) => {
        return EmailHeaderHTML(
          context.args.title, 
          context.args.subtitle, 
          context.args.layout, 
          context.args.logoUrl, 
          context.args.links
        );
      }
    }
  }
};

export const LogoCenter = () => (
  <EmailHeader 
    title="Welcome Back" 
    subtitle="Your weekly digest" 
    layout="logo-center"
    logoUrl="https://via.placeholder.com/150x50?text=Company+Logo"
  />
);

export const LogoLeft = () => (
  <EmailHeader 
    title="Company Newsletter" 
    subtitle="March 2024 Edition" 
    layout="logo-left"
    logoUrl="https://via.placeholder.com/150x50?text=Brand"
  />
);

export const LogoLeftWithLinks = () => (
  <EmailHeader 
    title="Weekly Update" 
    subtitle="Don't miss out" 
    layout="logo-left-links"
    logoUrl="https://via.placeholder.com/150x50?text=Logo"
    links={[
      { text: 'Home', url: 'https://example.com' },
      { text: 'Products', url: 'https://example.com/products' },
      { text: 'Contact', url: 'https://example.com/contact' }
    ]}
  />
);
