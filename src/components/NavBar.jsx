import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

export const generateNavBarHTML = ({
  navBarVariant = 'Default',
  logoSrc = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png',
  logoAlt = 'Logo',
  logoWidth = 50,
  logoHeight = 50,
  showNavLink1 = true,
  navLink1Text = 'Trends',
  navLink1Href = '#',
  showNavLink2 = true,
  navLink2Text = 'Gifts',
  navLink2Href = '#',
  showNavLink3 = true,
  navLink3Text = 'Deals',
  navLink3Href = '#',
  leftPadding = '32px',
}) => {
  // Apply variant overrides
  let navBarShowLink1 = showNavLink1;
  let navBarShowLink2 = showNavLink2;
  let navBarShowLink3 = showNavLink3;
  let navBarLeftPadding = leftPadding;
  
  if (navBarVariant === 'NoLinks') {
    navBarShowLink1 = false;
    navBarShowLink2 = false;
    navBarShowLink3 = false;
  } else if (navBarVariant === 'NoLeftPadding') {
    navBarLeftPadding = '0';
  }
  
  const rightPadding = '32px';
  
  return `${getEmailStyles()}
            
            <!-- Nav Bar -->
    <tr>
        <td style="padding: 0 ${rightPadding} 0 ${navBarLeftPadding};" class="mobile-padding-nav">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td width="${logoWidth}" style="padding: 0; vertical-align: middle;">
                        <!-- Logo -->
                        <img src="${logoSrc}" alt="${logoAlt}" width="${logoWidth}" height="${logoHeight}" style="display: block; width: ${logoWidth}px; height: ${logoHeight}px; border: 0;">
                    </td>
                    <td style="padding: 0 0 0 16px; text-align: right; vertical-align: middle;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                            <tr>
                                ${navBarShowLink1 ? `
                                <td style="padding: 0 12px;">
                                    <a href="${navLink1Href}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${navLink1Text}</a>
                                </td>
                                ` : ''}
                                ${navBarShowLink2 ? `
                                <td style="padding: 0 12px;">
                                    <a href="${navLink2Href}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${navLink2Text}</a>
                                </td>
                                ` : ''}
                                ${navBarShowLink3 ? `
                                <td style="padding: 0 ${navBarShowLink2 || navBarShowLink1 ? '0' : '0'} 0 ${navBarShowLink2 || navBarShowLink1 ? '12px' : '0'};">
                                    <a href="${navLink3Href}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${navLink3Text}</a>
                                </td>
                                ` : ''}
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
${getEmailClosingTags()}`;
};

export const NavBar = (props) => {
  const html = generateNavBarHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default NavBar;
