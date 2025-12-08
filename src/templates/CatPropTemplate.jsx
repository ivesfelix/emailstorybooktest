import React from 'react';

// Base email template with customizable sections
const generateEmailHTML = ({
  navBarVariant = 'Default',
  showNavLink1 = true,
  navLink1Text = 'Trends',
  navLink1Href = '#',
  showNavLink2 = true,
  navLink2Text = 'Gifts',
  navLink2Href = '#',
  showNavLink3 = true,
  navLink3Text = 'Deals',
  navLink3Href = '#',
  h1 = 'Curated for you: Dollhouse Miniatures',
  subtitle = 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
  heroImage = 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
  heroAlt = 'Dollhouse Miniatures',
  showHeroImage = true,
  showHeroHeading = true,
  showHeroSubtitle = true,
  showHeroCTA = true,
  heroButtonStyleType = 'primary',
  primaryButtonText = 'Shop now',
  primaryButtonHref = '#',
  gridRows = 2,
  showGridCTA = true,
  gridButtonStyleType = 'secondary',
  showGridMetadata = false,
  grid1Image = 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
  grid2Image = 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
  grid3Image = 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
  grid4Image = 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
  grid5Image = 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
  grid6Image = 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
  grid1Title = 'Product Title',
  grid1Price = '$25.00',
  grid2Title = 'Product Title',
  grid2Price = '$25.00',
  grid3Title = 'Product Title',
  grid3Price = '$25.00',
  grid4Title = 'Product Title',
  grid4Price = '$25.00',
  grid5Title = 'Product Title',
  grid5Price = '$25.00',
  grid6Title = 'Product Title',
  grid6Price = '$25.00',
  secondaryButtonText = 'See more',
  secondaryButtonHref = '#',
  evergreenHeading = 'Shop straight from their studio',
  evergreenDescription = '97% of Etsy sellers in the US work and create from their own home.',
  evergreenLinkText = 'Explore more →',
  evergreenLinkHref = '#',
  footerVariant = 'BuyerMarketing',
}) => {
  // Apply NavBar variant settings
  let navBarLeftPadding = '32px';
  let navBarShowLink1 = showNavLink1;
  let navBarShowLink2 = showNavLink2;
  let navBarShowLink3 = showNavLink3;
  
  if (navBarVariant === 'NoLinks') {
    navBarShowLink1 = false;
    navBarShowLink2 = false;
    navBarShowLink3 = false;
  } else if (navBarVariant === 'NoLeftPadding') {
    navBarLeftPadding = '0';
  }
  
  const navBarRightPadding = '32px';
  const navBarMobilePaddingStyle = navBarLeftPadding === '0' ? `padding-left: 0 !important; padding-right: 16px !important;` : `padding-left: 16px !important; padding-right: 16px !important;`;
  
  // Apply Hero Button styling
  const heroIsPrimary = heroButtonStyleType === 'primary';
  const heroButtonClass = heroIsPrimary ? 'primary-button' : 'secondary-button';
  const heroBgColor = heroIsPrimary ? '#312b36' : 'transparent';
  const heroTextColor = heroIsPrimary ? '#faf8f5' : '#312b36';
  const heroBorderColor = '#312b36';
  const heroMsoFillColor = heroIsPrimary ? '#312b36' : 'transparent';
  const heroMsoStroke = heroIsPrimary ? 'f' : 't';
  
  // Apply Grid Button styling
  const gridIsPrimary = gridButtonStyleType === 'primary';
  const gridButtonClass = gridIsPrimary ? 'primary-button' : 'secondary-button';
  const gridBgColor = gridIsPrimary ? '#312b36' : 'transparent';
  const gridTextColor = gridIsPrimary ? '#faf8f5' : '#312b36';
  const gridBorderColor = '#312b36';
  const gridMsoFillColor = gridIsPrimary ? '#312b36' : 'transparent';
  const gridMsoStroke = gridIsPrimary ? 'f' : 't';
  
  // Apply Footer variant settings
  const footerLegalText = footerVariant === 'BuyerMarketing' 
    ? '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on Etsy.com with this email address. To stop receiving Etsy marketing emails, <a href="#" style="color: #665e5c; text-decoration: underline;">unsubscribe here</a>.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>'
    : '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on <a href="#" style="color: #665e5c; text-decoration: underline;">Etsy.com</a> with this email address.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>';
  
  return `<style>
        /* ABC Diatype */
        @font-face {
            font-family: 'ABC Diatype';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            font-variant-numeric: lining-nums proportional-nums;
            src: url('https://www.etsy.com/assets/type/ABCDiatype-Regular.woff2') format('woff2'),
                 url('https://www.etsy.com/assets/type/ABCDiatype-Regular.woff') format('woff');
        }
        @font-face {
            font-family: 'ABC Diatype';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            font-variant-numeric: lining-nums proportional-nums;
            src: url('https://www.etsy.com/assets/type/ABCDiatype-Medium.woff2') format('woff2'),
                 url('https://www.etsy.com/assets/type/ABCDiatype-Medium.woff') format('woff');
        }
        @font-face {
            font-family: 'ABC Diatype';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            font-variant-numeric: lining-nums proportional-nums;
            src: url('https://www.etsy.com/assets/type/ABCDiatype-Bold.woff2') format('woff2'),
                 url('https://www.etsy.com/assets/type/ABCDiatype-Bold.woff') format('woff');
        }
        
        /* ABC Otto */
        @font-face {
            font-family: 'ABC Otto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            font-variant-numeric: lining-nums proportional-nums;
            src: url('https://www.etsy.com/assets/type/ABCOtto-Regular.woff2') format('woff2'),
                 url('https://www.etsy.com/assets/type/ABCOtto-Regular.woff') format('woff');
        }
        
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #faf8f5;
            font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        }
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        img {
            -ms-interpolation-mode: bicubic;
        }
        a {
            text-decoration: none;
        }
        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        u + #body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
        
        /* Mobile Responsive Styles */
        @media only screen and (max-width: 600px) {
            .mobile-padding {
                padding-left: 16px !important;
                padding-right: 16px !important;
            }
            .mobile-padding-hero {
                padding: 24px 16px 40px 16px !important;
            }
            .mobile-padding-grid {
                padding: 0 16px 24px 16px !important;
            }
            .mobile-padding-button {
                padding: 0 16px 40px 16px !important;
            }
            .mobile-padding-nav {
                ${navBarMobilePaddingStyle}
            }
            .mobile-padding-evergreen {
                padding: 40px 16px !important;
            }
            .mobile-padding-footer {
                padding: 24px 16px 40px 16px !important;
            }
            /* Product grid mobile spacing */
            .grid-item-left {
                padding: 0 6px 12px 0 !important;
            }
            .grid-item-right {
                padding: 0 0 12px 6px !important;
            }
            .grid-item-bottom-left {
                padding: 0 6px 0 0 !important;
            }
            .grid-item-bottom-right {
                padding: 0 0 0 6px !important;
            }
            /* H1 Mobile Styles */
            .h1-mobile {
                font-size: 36px !important;
                line-height: 1.05 !important;
                letter-spacing: -1.08px !important;
            }
            /* Hero Image Mobile Styles */
            .hero-image-mobile {
                aspect-ratio: 3 / 2 !important;
            }
            /* Footer Mobile Styles */
            .footer-social-label {
                display: block !important;
                margin-bottom: 12px !important;
            }
            .footer-app-label {
                display: block !important;
                margin-bottom: 12px !important;
            }
            .footer-social-icons {
                display: block !important;
            }
            .footer-app-badges {
                display: block !important;
            }
            /* Footer divider mobile spacing */
            .footer-divider-mobile {
                padding: 0 0 0 0 !important;
            }
            /* Social section mobile spacing */
            .footer-social-section-mobile {
                padding: 16px 0 16px 0 !important;
            }
            /* App section mobile spacing */
            .footer-app-section-mobile {
                padding: 16px 0 24px 0 !important;
            }
        }
        
        /* Dark Mode Styles */
        .dark-mode body,
        .dark-mode html {
            background: #1C181F !important;
        }
        .dark-mode center {
            background-color: #1C181F !important;
        }
        .dark-mode table {
            background-color: #1C181F !important;
        }
        /* H1 */
        .dark-mode .h1-mobile,
        .dark-mode h1 {
            color: #FAF8F5 !important;
        }
        /* Paragraph text */
        .dark-mode p,
        .dark-mode td {
            color: #FAF8F5 !important;
        }
        /* Text secondary (legal text) */
        .dark-mode .text-secondary,
        .dark-mode .text-secondary p,
        .dark-mode .text-secondary a {
            color: #C3B9C4 !important;
        }
        /* Links */
        .dark-mode a {
            color: #FAF8F5 !important;
        }
        /* Primary button */
        .dark-mode .primary-button {
            background-color: #FAF8F5 !important;
            border-color: #FAF8F5 !important;
            color: #1C181F !important;
        }
        /* Secondary button */
        .dark-mode .secondary-button {
            border-color: #FAF8F5 !important;
            color: #FAF8F5 !important;
        }
        /* Seasonal/Evergreen module */
        .dark-mode .evergreen-section {
            background-color: #2F203C !important;
        }
        .dark-mode .evergreen-section td {
            background-color: #2F203C !important;
        }
        /* Dividers */
        .dark-mode .divider {
            border-color: #514956 !important;
        }
        /* Footer */
        .dark-mode .footer-section {
            background-color: #1C181F !important;
        }
    </style>
<center style="max-width: 600px; margin: 0 auto; background-color: #faf8f5;" class="center">
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #faf8f5;" class="table">
        <tr>
        <td>
        <![endif]-->

        <!-- Email Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px; width: 100%; background-color: #faf8f5;" class="table">
            
            <!-- Nav Bar -->
            <tr>
                <td style="padding: 0 ${navBarRightPadding} 0 ${navBarLeftPadding};" class="mobile-padding-nav">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td width="50" style="padding: 0; vertical-align: middle;">
                                <!-- Logo -->
                                <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png" alt="Logo" width="50" height="50" style="display: block; width: 50px; height: 50px; border: 0;">
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

            <!-- Product Grid Section -->
            <tr>
                <td style="padding: 0 32px 24px 32px;" class="mobile-padding-grid">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <!-- Row 1 -->
                        <tr>
                            <!-- Product 1 -->
                            <td width="50%" style="padding: 0 12px 24px 0;" class="grid-item-left">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid1Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid1Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid1Price}</p>
                                </div>
                                ` : ''}
                            </td>
                            <!-- Product 2 -->
                            <td width="50%" style="padding: 0 0 ${gridRows > 1 ? '24px' : '0'} 12px;" class="grid-item-right">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid2Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid2Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid2Price}</p>
                                </div>
                                ` : ''}
                            </td>
                        </tr>
                        ${gridRows >= 2 ? `
                        <!-- Row 2 -->
                        <tr>
                            <!-- Product 3 -->
                            <td width="50%" style="padding: 0 12px ${gridRows > 2 ? '24px' : '0'} 0;" class="grid-item-bottom-left">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid3Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid3Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid3Price}</p>
                                </div>
                                ` : ''}
                            </td>
                            <!-- Product 4 -->
                            <td width="50%" style="padding: 0 0 ${gridRows > 2 ? '24px' : '0'} 12px;" class="grid-item-bottom-right">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid4Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid4Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid4Price}</p>
                                </div>
                                ` : ''}
                            </td>
                        </tr>
                        ` : ''}
                        ${gridRows >= 3 ? `
                        <!-- Row 3 -->
                        <tr>
                            <!-- Product 5 -->
                            <td width="50%" style="padding: 0 12px 0 0;" class="grid-item-bottom-left">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid5Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid5Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid5Price}</p>
                                </div>
                                ` : ''}
                            </td>
                            <!-- Product 6 -->
                            <td width="50%" style="padding: 0 0 0 12px;" class="grid-item-bottom-right">
                                <a href="#" style="text-decoration: none; display: block;">
                                    <img src="${grid6Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                                </a>
                                ${showGridMetadata ? `
                                <div style="padding-top: 8px;">
                                    <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid6Title}</p>
                                    <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid6Price}</p>
                                </div>
                                ` : ''}
                            </td>
                        </tr>
                        ` : ''}
                    </table>
                </td>
            </tr>
            ${showGridCTA ? `
            <!-- See More Button -->
            <tr>
                <td style="padding: 0 32px 40px 32px;" class="mobile-padding-button">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                        <tr>
                            <td align="left" style="padding: 0;">
                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${secondaryButtonHref}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${gridMsoStroke}" strokecolor="${gridBorderColor}" strokeweight="1.5px" fillcolor="${gridMsoFillColor}">
                                    <w:anchorlock/>
                                    <center style="color:${gridTextColor};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${secondaryButtonText}</center>
                                </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-->
                                <a href="${secondaryButtonHref}" class="${gridButtonClass}" style="background-color: ${gridBgColor}; border: 1.5px solid ${gridBorderColor}; border-radius: 24px; color: ${gridTextColor}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none;">${secondaryButtonText}</a>
                                <!--<![endif]-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            ` : ''}

            <!-- Evergreen Module -->
            <tr>
                <td style="padding: 40px 32px; background-color: #ded3e8;" class="mobile-padding-evergreen evergreen-section">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <!-- Icon -->
                        <tr>
                            <td style="padding-bottom: 16px; text-align: center;">
                                <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68a5e7f8ec01b100646c525f/original.png" alt="Shop" width="100" height="100" style="display: inline-block; width: 100px; height: 100px; border: 0;">
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

            <!-- Footer -->
            <tr>
                <td style="padding: 24px 32px 40px 32px; background-color: #faf8f5;" class="mobile-padding-footer footer-section">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <!-- Etsy Logo -->
                        <tr>
                            <td style="padding-bottom: 16px;">
                                <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png" alt="Etsy" width="63" height="32" style="display: block; width: 63px; height: 32px; border: 0;">
                            </td>
                        </tr>
                        
                        <!-- Divider -->
                        <tr>
                            <td style="padding-bottom: 0; border-bottom: 1px solid #E0DAD6;" class="footer-divider-mobile divider"></td></td>
                        </tr>
                        
                        <!-- Social Section -->
                        <tr>
                            <td style="padding: 8px 0 8px 0;" class="footer-social-section-mobile">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                                    <tr>
                                        <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.3; color: #312b36; vertical-align: middle; padding-right: 16px; white-space: nowrap;" class="footer-social-label">
                                            Let's be friends
                                        </td>
                                        <td style="vertical-align: middle;" class="footer-social-icons">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td style="padding-right: 0;">
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb082132260064a900ab/original.png" alt="Instagram" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                                    </td>
                                                    <td style="padding-right: 0;">
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f2b92450063bb8239/original.png" alt="Facebook" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                                    </td>
                                                    <td style="padding-right: 0;">
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f18cde300639245e6/original.png" alt="Threads" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                                    </td>
                                                    <td style="padding-right: 0;">
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f1c601f0065598eae/original.png" alt="Pinterest" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
                                                    </td>
                                                    <td>
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68d1bb8f00ec74006529034a/original.png" alt="TikTok" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;"></a>
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
                        
                        <!-- App Download Section -->
                        <tr>
                            <td style="padding: 16px 0 24px 0;" class="footer-app-section-mobile">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                                    <tr>
                                        <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.3; color: #312b36; vertical-align: middle; padding-right: 16px; white-space: nowrap;" class="footer-app-label">
                                            Download the Etsy app
                                        </td>
                                        <td style="vertical-align: middle;" class="footer-app-badges">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td style="padding-right: 16px;">
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68bf151a4899cf0065a329ae/original.png" alt="Download on the App Store" width="120" height="40" style="display: block; width: 120px; height: 40px; border: 0;"></a>
                                                    </td>
                                                    <td>
                                                        <a href="#"><img src="https://braze-images.com/appboy/communication/assets/image_assets/images/68bf151a6525e10065372abd/original.png" alt="Get it on Google Play" width="135" height="40" style="display: block; width: 135px; height: 40px; border: 0;"></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <!-- Legal Text -->
                        <tr>
                            <td style="font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #665e5c;" class="text-secondary">
                                ${footerLegalText}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

        </table>

        <!--[if mso | IE]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </center>`;
};

export const CatPropTemplate = ({ 
  h1 = 'Curated for you: Dollhouse Miniatures',
  subtitle = 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
  heroImage = 'https://via.placeholder.com/536x357/D4A574/FFFFFF?text=Hero+Image',
  heroAlt = 'Dollhouse Miniatures',
  showHeroImage = true,
  showHeroHeading = true,
  showHeroSubtitle = true,
  showHeroCTA = true,
  heroButtonStyleType = 'primary',
  navBarVariant = 'Default',
  showNavLink1 = true,
  navLink1Text = 'Trends',
  navLink1Href = '#',
  showNavLink2 = true,
  navLink2Text = 'Gifts',
  navLink2Href = '#',
  showNavLink3 = true,
  navLink3Text = 'Deals',
  navLink3Href = '#',
  primaryButtonText = 'Shop now',
  primaryButtonHref = '#',
  gridRows = 2,
  showGridCTA = true,
  gridButtonStyleType = 'secondary',
  showGridMetadata = false,
  grid1Image = 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
  grid2Image = 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
  grid3Image = 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
  grid4Image = 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
  grid5Image = 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
  grid6Image = 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
  grid1Title = 'Product Title',
  grid1Price = '$25.00',
  grid2Title = 'Product Title',
  grid2Price = '$25.00',
  grid3Title = 'Product Title',
  grid3Price = '$25.00',
  grid4Title = 'Product Title',
  grid4Price = '$25.00',
  grid5Title = 'Product Title',
  grid5Price = '$25.00',
  grid6Title = 'Product Title',
  grid6Price = '$25.00',
  secondaryButtonText = 'See more',
  secondaryButtonHref = '#',
  evergreenHeading = 'Shop straight from their studio',
  evergreenDescription = '97% of Etsy sellers in the US work and create from their own home.',
  evergreenLinkText = 'Explore more →',
  evergreenLinkHref = '#',
  footerVariant = 'BuyerMarketing',
}) => {
  const html = generateEmailHTML({
    navBarVariant,
    showNavLink1,
    navLink1Text,
    navLink1Href,
    showNavLink2,
    navLink2Text,
    navLink2Href,
    showNavLink3,
    navLink3Text,
    navLink3Href,
    h1,
    subtitle,
    heroImage,
    heroAlt,
    showHeroImage,
    showHeroHeading,
    showHeroSubtitle,
    showHeroCTA,
    heroButtonStyleType,
    primaryButtonText,
    primaryButtonHref,
    gridRows,
    showGridCTA,
    gridButtonStyleType,
    showGridMetadata,
    grid1Image,
    grid2Image,
    grid3Image,
    grid4Image,
    grid5Image,
    grid6Image,
    grid1Title,
    grid1Price,
    grid2Title,
    grid2Price,
    grid3Title,
    grid3Price,
    grid4Title,
    grid4Price,
    grid5Title,
    grid5Price,
    grid6Title,
    grid6Price,
    secondaryButtonText,
    secondaryButtonHref,
    evergreenHeading,
    evergreenDescription,
    evergreenLinkText,
    evergreenLinkHref,
    footerVariant,
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export const CatPropTemplateHTML = (props = {}) => {
  return generateEmailHTML(props);
};

export default CatPropTemplate;
