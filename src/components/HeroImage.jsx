import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

export const generateHeroImageHTML = ({
  heroImage = 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
  heroAlt = 'Hero Image',
  heroImageVariant = 'padded', // 'padded' or 'full-bleed'
  heroImageRatio = '3:2', // '3:2', '16:9', or '5:4'
  imageHref = '#',
}) => {
  const isFullBleed = heroImageVariant === 'full-bleed';
  
  // Calculate image dimensions based on ratio
  const getImageDimensions = () => {
    const baseWidth = isFullBleed ? 600 : 536;
    
    switch(heroImageRatio) {
      case '16:9':
        return { width: baseWidth, height: Math.round(baseWidth * 9 / 16) }; // Full: 600x338, Padded: 536x302
      case '5:4':
        return { width: baseWidth, height: Math.round(baseWidth * 4 / 5) }; // Full: 600x480, Padded: 536x429
      case '3:2':
      default:
        return { width: baseWidth, height: Math.round(baseWidth * 2 / 3) }; // Full: 600x400, Padded: 536x357
    }
  };
  
  const { width: imgWidth, height: imgHeight } = getImageDimensions();
  
  // Get the mobile class based on ratio
  const getMobileClass = () => {
    switch(heroImageRatio) {
      case '16:9':
        return 'hero-image-mobile-16-9';
      case '5:4':
        return 'hero-image-mobile-5-4';
      case '3:2':
      default:
        return 'hero-image-mobile-3-2';
    }
  };
  
  const mobileClass = getMobileClass();
  
  return `${getEmailStyles()}
            
            <!-- Hero Image Section -->
    ${isFullBleed ? `
    <tr>
        <td style="padding: 0;">
            <!-- Full Bleed Hero Image -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 0;">
                        <a href="${imageHref}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${heroImage}" alt="${heroAlt}" width="${imgWidth}" height="${imgHeight}" style="border: none; clear: both; display: block; height: ${imgHeight}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${mobileClass}">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    ` : `
    <tr>
        <td style="padding: 24px 32px 0 32px;" class="mobile-padding-hero-image">
            <!-- Padded Hero Image -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 0;">
                        <a href="${imageHref}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${heroImage}" alt="${heroAlt}" width="${imgWidth}" height="${imgHeight}" style="border: none; border-radius: 8px; clear: both; display: block; height: ${imgHeight}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${mobileClass}">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    `}
    
${getEmailClosingTags()}`;
};

export const HeroImage = (props) => {
  const html = generateHeroImageHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HeroImage;
