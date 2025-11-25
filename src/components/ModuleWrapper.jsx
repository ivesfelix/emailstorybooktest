import React from 'react';

export const ModuleWrapper = ({ children }) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#ffffff' }}>
      <tbody>
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellPadding="0" cellSpacing="0" border="0" style={{ margin: '0 auto' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '20px' }}>{children}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const ModuleWrapperHTML = (innerHtml = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;"><tbody><tr><td align="center"><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tbody><tr><td style="padding:20px;">${innerHtml}</td></tr></tbody></table></td></tr></tbody></table>`;
};

export default ModuleWrapper;
