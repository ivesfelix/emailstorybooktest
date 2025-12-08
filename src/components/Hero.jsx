import React from 'react';

export const generateHeroHTML = ({
  h1 = 'Curated for you: Dollhouse Miniatures',
  subtitle = 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
  heroImage = 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
  heroAlt = 'Dollhouse Miniatures',
  showHeroImage = true,
  showHeroHeading = true,
  showHeroSubtitle = true,
  showHeroCTA = true,
  primaryButtonText = 'Shop now',
  primaryButtonHref = '#',
}) => {
  return `
    <!-- Hero Section -->
    <tr>
        <td style="padding: 24px 32px 40px 32px;" class="mobile-padding-hero">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                ${showHeroImage ? `
                <!-- Hero Image -->
                <tr>
                    <td align="center" style="padding: 0 0 24px;">
                        <a href="${primaryButtonHref}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${heroImage}" alt="${heroAlt}" width="536" height="357" style="border: none; border-radius: 8px; clear: both; display: block; height: auto; max-height: 357px; max-width: 536px; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="hero-image-mobile">
                        </a>
                    </td>
                </tr>
                ` : ''}
                ${showHeroHeading ? `
                <!-- Hero Heading -->
                <tr>
                    <td style="padding-bottom: 12px; font-family: 'ABC Otto', Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.05; letter-spacing: -1.5px; color: #312b36;" class="h1-mobile">
                        ${h1}
                    </td>
                </tr>
                ` : ''}
                ${showHeroSubtitle ? `
                <!-- Hero Subheading -->
                <tr>
                    <td style="padding-bottom: 24px; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36;">
                        ${subtitle}
                    </td>
                </tr>
                ` : ''}
                ${showHeroCTA ? `
                <!-- Hero Button -->
                <tr>
                    <td style="padding: 0; text-align: left;">
                        <!-- Bulletproof Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="border-radius: 24px; background: #312b36;">
                                    <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${primaryButtonHref}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="f" fillcolor="#312b36">
                                        <w:anchorlock/>
                                        <center style="color:#faf8f5;font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${primaryButtonText}</center>
                                    </v:roundrect>
                                    <![endif]-->
                                    <!--[if !mso]><!-->
                                    <a href="${primaryButtonHref}" class="primary-button" style="background-color: #312b36; border: 1.5px solid #312b36; border-radius: 24px; color: #faf8f5; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${primaryButtonText}</a>
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
  `;
};

export const Hero = (props) => {
  const html = generateHeroHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Hero;
