import React from 'react';
import ModuleWrapper, { ModuleWrapperHTML } from '../components/ModuleWrapper';
import EmailHeader, { EmailHeaderHTML } from '../components/EmailHeader';
import EmailButton, { EmailButtonHTML } from '../components/EmailButton';

export default {
  title: 'Email/Templates',
};

const buildNewsletterHtml = () => {
  const header = EmailHeaderHTML('Monthly Newsletter', 'Top stories & announcements');
  const cta = EmailButtonHTML('Read More', 'https://example.com');
  const article = `<h2 style="font-size:18px;color:#333;margin:0 0 8px;">Article title</h2><p style="margin:0 0 12px;color:#555;">A short preview paragraph describing the article content and enticing the reader to click through for more.</p>${cta}`;
  return ModuleWrapperHTML(header + article);
};

export const Newsletter = () => {
  const html = buildNewsletterHtml();
  return (
    <div>
      <div style={{ border: '1px solid #eee', padding: 12, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: html }} />
      <h4>HTML (copy / paste)</h4>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f6f6f6', padding: 12 }}>{html}</pre>
    </div>
  );
};

Newsletter.storyName = 'Newsletter (render + HTML)';
