import React from 'react';
import EmailHeader, { EmailHeaderHTML } from '../components/EmailHeader';

export default {
  title: 'Email/EmailHeader',
  component: EmailHeader
};

export const Default = () => <EmailHeader title="Monthly Newsletter" subtitle="Latest updates and tips" />;

export const HTML = () => (
  <pre style={{ whiteSpace: 'pre-wrap', background: '#f6f6f6', padding: 12 }}>{EmailHeaderHTML('Monthly Newsletter', 'Latest updates and tips')}</pre>
);

HTML.storyName = 'HTML (copy/paste)';
