import React from 'react';

export const PromoBanner = ({ 
  imageSrc = 'https://via.placeholder.com/40x40?text=Icon',
  headline = 'Promo Headline',
  copy = 'Promotional copy text goes here.',
  href = '#',
  linkText = 'Learn more'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '40px 0 0' }}>
      <tbody>
        <tr>
          <td style={{ backgroundColor: '#F7D5DA', padding: '24px 16px' }}>
            <table role="presentation" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingRight: '16px', verticalAlign: 'middle' }}>
                    <img 
                      src={imageSrc} 
                      width="256"
                      alt=""
                      style={{ 
                        display: 'block', 
                        border: 0 
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div style={{ 
                      margin: 0, 
                      font: '700 18px Helvetica,Arial,sans-serif', 
                      lineHeight: '130%', 
                      color: '#332F2E' 
                    }}>
                      {headline}
                    </div>
                    <div style={{ 
                      margin: '8px 0 0', 
                      font: '400 14px Helvetica,Arial,sans-serif', 
                      lineHeight: '145%', 
                      color: '#332F2E' 
                    }}>
                      {copy}
                    </div>
                    <a href={href} style={{ 
                      display: 'inline-block', 
                      marginTop: '12px', 
                      font: '700 14px Helvetica,Arial,sans-serif', 
                      lineHeight: '130%', 
                      color: '#332F2E', 
                      textDecoration: 'underline' 
                    }}>
                      {linkText}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const PromoBannerHTML = (imageSrc = '', headline = '', copy = '', href = '#', linkText = 'Learn more') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0 0;"><tr><td style="background-color:#F7D5DA;padding:24px 16px;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding-right:16px;vertical-align:middle;"><img src="${imageSrc}" width="256" alt="" style="display:block;border:0;"/></td><td style="vertical-align:middle;"><div style="margin:0;font:700 18px Helvetica,Arial,sans-serif;line-height:130%;color:#332F2E;">${headline}</div><div style="margin:8px 0 0;font:400 14px Helvetica,Arial,sans-serif;line-height:145%;color:#332F2E;">${copy}</div><a href="${href}" style="display:inline-block;margin-top:12px;font:700 14px Helvetica,Arial,sans-serif;line-height:130%;color:#332F2E;text-decoration:underline;">${linkText}</a></td></tr></table></td></tr></table>`;
};

export default PromoBanner;
