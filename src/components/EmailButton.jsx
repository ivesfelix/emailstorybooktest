import React from 'react';

export const EmailButton = ({ href = '#', children = 'Button' }) => {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td align="center" style={{ borderRadius: '4px', backgroundColor: '#1b82e2' }}>
            <a
              href={href}
              style={{ display: 'inline-block', padding: '12px 20px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}
            >
              {children}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailButtonHTML = (text = 'Button', href = '#') => {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td align="center" style="border-radius:4px;background-color:#1b82e2;"><a href="${href}" style="display:inline-block;padding:12px 20px;color:#ffffff;text-decoration:none;font-weight:600;">${text}</a></td></tr></tbody></table>`;
};

export default EmailButton;
