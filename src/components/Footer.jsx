import React from 'react';

export const generateFooterHTML = ({
  logoSrc = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
  logoAlt = 'Etsy',
  logoWidth = 63,
  logoHeight = 32,
  showSocialSection = true,
  socialLabel = "Let's be friends",
  instagramHref = '#',
  facebookHref = '#',
  threadsHref = '#',
  pinterestHref = '#',
  tiktokHref = '#',
  showAppSection = true,
  appLabel = 'Download the Etsy app',
  appStoreHref = '#',
  googlePlayHref = '#',
  legalText1 = 'If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.',
  legalText2 = 'You are receiving this email because you registered on',
  legalText2Link = 'Etsy.com',
  legalText2LinkHref = '#',
  legalText3 = 'Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.',
}) => {
  return `
    <!-- Footer -->
    <tr>
        <td style="padding: 24px 32px 40px 32px; background-color: #faf8f5;" class="mobile-padding-footer footer-section">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <!-- Logo -->
                <tr>
                    <td style="padding-bottom: 16px;">
                        <img src="${logoSrc}" alt="${logoAlt}" width="${logoWidth}" height="${logoHeight}" style="display: block; width: ${logoWidth}px; height: ${logoHeight}px; border: 0;">
                    </td>
                </tr>
                
                <!-- Divider -->
                <tr>
                    <td style="padding-bottom: 0; border-bottom: 1px solid #E0DAD6;" class="footer-divider-mobile divider"></td>
                </tr>
                
                ${showSocialSection ? `
                <!-- Social Section -->
                <tr>
                    <td style="padding: 8px 0 8px 0;" class="footer-social-section-mobile">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.3; color: #312b36; vertical-align: middle; padding-right: 16px; white-space: nowrap;" class="footer-social-label">
                                    ${socialLabel}
                                </td>
                                <td style="vertical-align: middle;" class="footer-social-icons">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="padding-right: 0;">
                                                <a href="${instagramHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb082132260064a900ab/original.png" alt="Instagram" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                            </td>
                                            <td style="padding-right: 0;">
                                                <a href="${facebookHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f2b92450063bb8239/original.png" alt="Facebook" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                            </td>
                                            <td style="padding-right: 0;">
                                                <a href="${threadsHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f18cde300639245e6/original.png" alt="Threads" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                            </td>
                                            <td style="padding-right: 0;">
                                                <a href="${pinterestHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f1c601f0065598eae/original.png" alt="Pinterest" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                            </td>
                                            <td>
                                                <a href="${tiktokHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f00ec74006529034a/original.png" alt="TikTok" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Divider -->
                <tr>
                    <td style="border-bottom: 1px solid #E0DAD6;" class="footer-divider-mobile divider"></td>
                </tr>
                ` : ''}
                
                ${showAppSection ? `
                <!-- App Download Section -->
                <tr>
                    <td style="padding: 16px 0 24px 0;" class="footer-app-section-mobile">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.3; color: #312b36; vertical-align: middle; padding-right: 16px; white-space: nowrap;" class="footer-app-label">
                                    ${appLabel}
                                </td>
                                <td style="vertical-align: middle;" class="footer-app-badges">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="padding-right: 16px;">
                                                <a href="${appStoreHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68bf151a4899cf0065a329ae/original.png" alt="Download on the App Store" width="120" height="40" style="display: block; width: 120px; height: 40px; border: 0;"></a>
                                            </td>
                                            <td>
                                                <a href="${googlePlayHref}"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68bf151a6525e10065372abd/original.png" alt="Get it on Google Play" width="135" height="40" style="display: block; width: 135px; height: 40px; border: 0;"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                ` : ''}
                
                <!-- Legal Text -->
                <tr>
                    <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #665e5c;" class="text-secondary">
                        <p style="margin: 0 0 1.25em 0;">${legalText1}</p>
                        <p style="margin: 0 0 1.25em 0;">${legalText2} <a href="${legalText2LinkHref}" style="color: #665e5c; text-decoration: underline;">${legalText2Link}</a> with this email address.</p>
                        <p style="margin: 0;">${legalText3}</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
  `;
};

export const Footer = (props) => {
  const html = generateFooterHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Footer;
