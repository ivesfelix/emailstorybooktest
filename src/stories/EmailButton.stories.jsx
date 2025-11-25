import React from 'react';
import EmailButton, { EmailButtonHTML } from '../components/EmailButton';

export default {
  title: 'Email/EmailButton',
  component: EmailButton
};

export const Primary = () => <EmailButton href="https://example.com">Primary CTA</EmailButton>;

Primary.storyName = 'Primary (rendered)';

export const HTML = () => (
  <pre style={{ whiteSpace: 'pre-wrap', background: '#f6f6f6', padding: 12 }}>{EmailButtonHTML('Primary CTA', 'https://example.com')}</pre>
);

HTML.storyName = 'HTML (copy/paste)';
