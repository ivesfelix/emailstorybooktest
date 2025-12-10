import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

export const generateHeroWithImageHTML = ({
  // Hero Image props
  heroImage = 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
  heroAlt = 'Hero Image',
  heroImageVariant = 'padded', // 'padded' or 'full-bleed'
  heroImageRatio = '3:2', // '3:2', '16:9', or '5:4'
  imageHref = '#',
  // Hero Content props
  headline = 'Curated for you: Dollhouse Miniatures',
  subtitle = 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
  showHeroHeadline = true,
  showHeroSubtitle = true,
  showHeroButton = true,
  heroButtonStyleType = 'primary',
  primaryButtonText = 'Shop now',
  primaryButtonHref = '#',
}) => {
  const isFullBleed = heroImageVariant === 'full-bleed';
  
  // Calculate image dimensions based on ratio
  const getImageDimensions = () => {
    const baseWidth = isFullBleed ? 600 : 536;
    
    switch(heroImageRatio) {
      case '16:9':
        return { width: baseWidth, height: Math.round(baseWidth * 9 / 16) };
      case '5:4':
        return { width: baseWidth, height: Math.round(baseWidth * 4 / 5) };
      case '3:2':
      default:
        return { width: baseWidth, height: Math.round(baseWidth * 2 / 3) };
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
  
  // Apply Hero Button styling
  const heroIsPrimary = heroButtonStyleType === 'primary';
  const heroButtonClass = heroIsPrimary ? 'primary-button' : 'secondary-button';
  const heroBgColor = heroIsPrimary ? '#312b36' : 'transparent';
  const heroTextColor = heroIsPrimary ? '#faf8f5' : '#312b36';
  const heroBorderColor = '#312b36';
  const heroMsoFillColor = heroIsPrimary ? '#312b36' : 'transparent';
  const heroMsoStroke = heroIsPrimary ? 'f' : 't';
  
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
    
    <!-- Hero Content Section -->
    <tr>
        <td style="padding: 24px 32px 40px 32px;" class="mobile-padding-hero-content">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                ${showHeroHeadline ? `
                <!-- Hero Headline -->
                <tr>
                    <td style="padding-bottom: 12px; font-family: 'ABC Otto', Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.05; letter-spacing: -1.5px; color: #312b36;" class="h1-mobile">
                        ${headline}
                    </td>
                </tr>
                ` : ''}
                ${showHeroSubtitle ? `
                <!-- Hero Subtitle -->
                <tr>
                    <td style="padding-bottom: ${showHeroButton ? '24px' : '0'}; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36;">
                        ${subtitle}
                    </td>
                </tr>
                ` : ''}
                ${showHeroButton ? `
                <!-- Hero Button -->
                <tr>
                    <td style="padding: 0; text-align: left;">
                        <!-- Bulletproof Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="border-radius: 24px; background: ${heroBgColor};">
                                    <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${primaryButtonHref}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${heroMsoStroke}" strokecolor="${heroBorderColor}" strokeweight="1.5px" fillcolor="${heroMsoFillColor}">
                                        <w:anchorlock/>
                                        <center style="color:${heroTextColor};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${primaryButtonText}</center>
                                    </v:roundrect>
                                    <![endif]-->
                                    <!--[if !mso]><!-->
                                    <a href="${primaryButtonHref}" class="${heroButtonClass}" style="background-color: ${heroBgColor}; border: 1.5px solid ${heroBorderColor}; border-radius: 24px; color: ${heroTextColor}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${primaryButtonText}</a>
                                    <!--<![endif]-->
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                ` : ''}
            </table>
        </td>
    </tr>
    
${getEmailClosingTags()}`;
};

export const HeroWithImage = (props) => {
  const html = generateHeroWithImageHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HeroWithImage;
