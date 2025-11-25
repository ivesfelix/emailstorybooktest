import React from 'react';
import ModuleWrapper, { ModuleWrapperHTML } from '../components/ModuleWrapper';
import EmailHeader, { EmailHeaderHTML } from '../components/EmailHeader';
import EmailButton, { EmailButtonHTML } from '../components/EmailButton';

export default {
  title: 'Email/Templates',
  argTypes: {
    headerTitle: {
      control: 'text',
      description: 'Newsletter header title',
      defaultValue: 'Monthly Newsletter'
    },
    headerSubtitle: {
      control: 'text',
      description: 'Newsletter header subtitle',
      defaultValue: 'Top stories & announcements'
    },
    headerLayout: {
      control: 'select',
      options: ['logo-center', 'logo-left', 'logo-left-links'],
      description: 'Header layout',
      defaultValue: 'logo-center'
    },
    articleTitle: {
      control: 'text',
      description: 'Article headline',
      defaultValue: 'Article title'
    },
    articleText: {
      control: 'text',
      description: 'Article preview text',
      defaultValue: 'A short preview paragraph describing the article content and enticing the reader to click through for more.'
    },
    ctaText: {
      control: 'text',
      description: 'Call to action button text',
      defaultValue: 'Read More'
    },
    ctaUrl: {
      control: 'text',
      description: 'Call to action button URL',
      defaultValue: 'https://example.com'
    },
    buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      defaultValue: 'medium'
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button variant',
      defaultValue: 'primary'
    }
  }
};

const buildNewsletterHtml = (args) => {
  const header = EmailHeaderHTML(
    args.headerTitle, 
    args.headerSubtitle, 
    args.headerLayout,
    'https://via.placeholder.com/150x50?text=Logo'
  );
  const cta = EmailButtonHTML(args.ctaText, args.ctaUrl, args.buttonSize, args.buttonVariant);
  const article = `<h2 style="font-size:18px;color:#333;margin:0 0 8px;">${args.articleTitle}</h2><p style="margin:0 0 12px;color:#555;">${args.articleText}</p>${cta}`;
  return ModuleWrapperHTML(header + article);
};

const NewsletterComponent = (args) => {
  return (
    <ModuleWrapper>
      <EmailHeader 
        title={args.headerTitle} 
        subtitle={args.headerSubtitle}
        layout={args.headerLayout}
        logoUrl="https://via.placeholder.com/150x50?text=Logo"
      />
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '18px', color: '#333', margin: '0 0 8px' }}>{args.articleTitle}</h2>
        <p style={{ margin: '0 0 12px', color: '#555' }}>{args.articleText}</p>
        <EmailButton 
          href={args.ctaUrl}
          size={args.buttonSize}
          variant={args.buttonVariant}
        >
          {args.ctaText}
        </EmailButton>
      </div>
    </ModuleWrapper>
  );
};

export const Newsletter = {
  render: NewsletterComponent,
  args: {
    headerTitle: 'Monthly Newsletter',
    headerSubtitle: 'Top stories & announcements',
    headerLayout: 'logo-center',
    articleTitle: 'Article title',
    articleText: 'A short preview paragraph describing the article content and enticing the reader to click through for more.',
    ctaText: 'Read More',
    ctaUrl: 'https://example.com',
    buttonSize: 'medium',
    buttonVariant: 'primary'
  },
  parameters: {
    html: {
      transform: (code, context) => buildNewsletterHtml(context.args)
    }
  }
};
