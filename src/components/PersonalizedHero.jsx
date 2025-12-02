import React from 'react';
import CTA from './CTA';

export const PersonalizedHero = ({ 
  imageHref = '#',
  imageSrc = 'https://via.placeholder.com/600x250?text=Hero+Image',
  headlineHref = '#',
  headline = 'Next up for you: {Category}}',
  copyHref = '#',
  copy = 'Discover your personalized roundup of Etsy finds, here to brighten your day.',
  ctaHref = '#',
  ctaLabel = 'Shop now'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '0 16px 40px' }}>
      <tbody>
        <tr>
          <td align="center" style={{ padding: '0 0 24px' }}>
            <a href={imageHref} style={{ textDecoration: 'none', border: 0 }}>
              <img 
                src={imageSrc} 
                width="600" 
                alt=""
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  maxWidth: '600px', 
                  maxHeight: '250px', 
                  height: 'auto', 
                  borderRadius: '8px', 
                  objectFit: 'cover', 
                  border: 0 
                }}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href={headlineHref} style={{ textDecoration: 'none', color: '#332F2E' }}>
              <h1 style={{ 
                margin: 0, 
                font: '400 36px "ABC Otto"', 
                lineHeight: '105%', 
                letterSpacing: '-1.08px', 
                textAlign: 'left' 
              }}>
                {headline}
              </h1>
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '12px' }}>
            <a href={copyHref} style={{ textDecoration: 'none', color: '#332F2E' }}>
              <p style={{ margin: 0, font: '400 18px "ABC Diatype"', lineHeight: '130%', textAlign: 'left' }}>
                {copy}
              </p>
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '24px' }}>
            <CTA href={ctaHref} variant="primary">{ctaLabel}</CTA>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const PersonalizedHeroHTML = (imageHref = '#', imageSrc = '', headlineHref = '#', headline = '', copyHref = '#', copy = '', ctaHref = '#', ctaLabel = 'Shop now') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:0 16px 40px;"><tr><td align="center" style="padding:0 0 24px;"><a href="${imageHref}" style="text-decoration:none;border:0;"><img src="${imageSrc}" width="600" alt="" style="display:block;width:100%;max-width:600px;max-height:250px;height:auto;border-radius:8px;object-fit:cover;border:0;"/></a></td></tr><tr><td><a href="${headlineHref}" style="text-decoration:none;color:#332F2E;"><h1 style="margin:0;font:400 36px \"ABC Otto\";line-height:105%;letter-spacing:-1.08px;text-align:left;">${headline}</h1></a></td></tr><tr><td style="padding-top:12px;"><a href="${copyHref}" style="text-decoration:none;color:#332F2E;"><p style="margin:0;font:400 18px \"ABC Diatype\";line-height:130%;text-align:left;">${copy}</p></a></td></tr><tr><td style="padding-top:24px;"><a href="${ctaHref}" style="display:inline-block;padding:10.5px 32px;border-radius:24px;background:#332F2E;border:2px solid #332F2E;color:#FAF8F5;font:700 18px \"ABC Diatype\";line-height:130%;text-decoration:none;">${ctaLabel}</a></td></tr></table>`;
};

export default PersonalizedHero;
