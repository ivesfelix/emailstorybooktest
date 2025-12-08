import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './EmailStyles';

export const generateEvergreenModuleHTML = ({
  evergreenHeading = 'Shop straight from their studio',
  evergreenDescription = '97% of Etsy sellers in the US work and create from their own home.',
  evergreenLinkText = 'Explore more →',
  evergreenLinkHref = '#',
  evergreenIcon = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68a5e7f8ec01b100646c525f/original.png',
  evergreenIconAlt = 'Shop',
  evergreenIconWidth = 100,
  evergreenIconHeight = 100,
}) => {
  return `${getEmailStyles()}
            
            <!-- Evergreen Module -->
    <tr>
        <td style="padding: 40px 32px; background-color: #ded3e8;" class="mobile-padding-evergreen evergreen-section">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <!-- Icon -->
                <tr>
                    <td style="padding-bottom: 16px; text-align: center;">
                        <img src="${evergreenIcon}" alt="${evergreenIconAlt}" width="${evergreenIconWidth}" height="${evergreenIconHeight}" style="display: inline-block; width: ${evergreenIconWidth}px; height: ${evergreenIconHeight}px; border: 0;">
                    </td>
                </tr>
                <!-- Heading -->
                <tr>
                    <td style="padding-bottom: 4px; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 20px; font-weight: bold; line-height: 1.25; letter-spacing: -0.2px; color: #312b36; text-align: center;">
                        ${evergreenHeading}
                    </td>
                </tr>
                <!-- Description -->
                <tr>
                    <td style="padding-bottom: 24px; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36; text-align: center;">
                        ${evergreenDescription}
                    </td>
                </tr>
                <!-- Arrow Link -->
                <tr>
                    <td style="text-align: center;">
                        <a href="${evergreenLinkHref}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold; line-height: 1.3; text-decoration: none;">${evergreenLinkText}</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
${getEmailClosingTags()}`;
};

export const EvergreenModule = (props) => {
  const html = generateEvergreenModuleHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EvergreenModule;
