import React from 'react';

export const EmailHeader = ({ title = 'Hello from Email', subtitle = '' }) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td style={{ padding: '20px 0', textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '22px', color: '#333' }}>{title}</h1>
            {subtitle ? <p style={{ margin: '8px 0 0', color: '#666' }}>{subtitle}</p> : null}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailHeaderHTML = (title = 'Hello from Email', subtitle = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td style="padding:20px 0;text-align:center;"><h1 style="margin:0;font-size:22px;color:#333;">${title}</h1>${subtitle ? `<p style="margin:8px 0 0;color:#666;">${subtitle}</p>` : ''}</td></tr></tbody></table>`;
};

export default EmailHeader;
