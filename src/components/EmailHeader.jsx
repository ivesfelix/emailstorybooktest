import React from 'react';

const layoutConfigs = {
  'logo-center': {
    alignment: 'center',
    showLogo: true,
    showLinks: false
  },
  'logo-left': {
    alignment: 'left',
    showLogo: true,
    showLinks: false
  },
  'logo-left-links': {
    alignment: 'left',
    showLogo: true,
    showLinks: true
  }
};

export const EmailHeader = ({ 
  title = 'Hello from Email', 
  subtitle = '',
  layout = 'logo-center',
  logoUrl = 'https://via.placeholder.com/150x50?text=Logo',
  links = [
    { text: 'Home', url: '#' },
    { text: 'About', url: '#' },
    { text: 'Contact', url: '#' }
  ]
}) => {
  const config = layoutConfigs[layout] || layoutConfigs['logo-center'];
  
  if (layout === 'logo-left-links') {
    return (
      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>
                      {config.showLogo && <img src={logoUrl} alt={title} style={{ height: '40px', display: 'block' }} />}
                    </td>
                    <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                      {config.showLinks && links.map((link, i) => (
                        <a key={i} href={link.url} style={{ margin: '0 10px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>
                          {link.text}
                        </a>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              {subtitle && <p style={{ margin: '12px 0 0', color: '#666', fontSize: '14px' }}>{subtitle}</p>}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td style={{ padding: '20px', textAlign: config.alignment }}>
            {config.showLogo && <img src={logoUrl} alt={title} style={{ height: '50px', marginBottom: '12px', display: config.alignment === 'center' ? 'block' : 'inline-block', marginLeft: config.alignment === 'center' ? 'auto' : '0', marginRight: config.alignment === 'center' ? 'auto' : '0' }} />}
            <h1 style={{ margin: 0, fontSize: '22px', color: '#333' }}>{title}</h1>
            {subtitle && <p style={{ margin: '8px 0 0', color: '#666' }}>{subtitle}</p>}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailHeaderHTML = (title = 'Hello from Email', subtitle = '', layout = 'logo-center', logoUrl = 'https://via.placeholder.com/150x50?text=Logo', links = []) => {
  const config = layoutConfigs[layout] || layoutConfigs['logo-center'];
  
  if (layout === 'logo-left-links') {
    const linksHtml = config.showLinks ? links.map(link => `<a href="${link.url}" style="margin:0 10px;color:#333;text-decoration:none;font-size:14px;">${link.text}</a>`).join('') : '';
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td style="padding:20px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td style="text-align:left;vertical-align:middle;">${config.showLogo ? `<img src="${logoUrl}" alt="${title}" style="height:40px;display:block;" />` : ''}</td><td style="text-align:right;vertical-align:middle;">${linksHtml}</td></tr></tbody></table>${subtitle ? `<p style="margin:12px 0 0;color:#666;font-size:14px;">${subtitle}</p>` : ''}</td></tr></tbody></table>`;
  }
  
  const imgStyle = config.alignment === 'center' ? 'height:50px;margin-bottom:12px;display:block;margin-left:auto;margin-right:auto;' : 'height:50px;margin-bottom:12px;display:inline-block;margin-left:0;margin-right:0;';
  const logoHtml = config.showLogo ? `<img src="${logoUrl}" alt="${title}" style="${imgStyle}" />` : '';
  
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td style="padding:20px;text-align:${config.alignment};">${logoHtml}<h1 style="margin:0;font-size:22px;color:#333;">${title}</h1>${subtitle ? `<p style="margin:8px 0 0;color:#666;">${subtitle}</p>` : ''}</td></tr></tbody></table>`;
};

export default EmailHeader;
