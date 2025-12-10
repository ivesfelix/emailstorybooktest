import React from 'react';
import { generateNavBarHTML } from './NavBar';
import { generateHeroHTML } from './Hero';
import { generateProductGridHTML } from './ProductGrid';
import { generateEvergreenModuleHTML } from './EvergreenModule';
import { generateFooterHTML } from './Footer';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

// Base email template with customizable sections
const generateEmailHTML = ({
  // NavBar props
  navBarVariant = 'Default',
  logoImage = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png',
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
  
  // Hero Props
  headline = 'Curated for you: Dollhouse Miniatures',
  subtitle = 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
  heroImage = 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
  heroAlt = 'Dollhouse Miniatures',
  showHeroImage = true,
  showHeroHeadline = true,
  showHeroSubtitle = true,
  showHeroButton = true,
  heroButtonStyleType = 'primary',
  primaryButtonText = 'Shop now',
  primaryButtonHref = '#',
  
  // ProductGrid props
  gridRows = 2,
  showGridButton = true,
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
  
  // Evergreen props
  evergreenHeading = 'Shop straight from their studio',
  evergreenDescription = '97% of Etsy sellers in the US work and create from their own home.',
  evergreenLinkText = 'Explore more →',
  evergreenLinkHref = '#',
  evergreenIcon = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68a5e7f8ec01b100646c525f/original.png',
  evergreenIconAlt = 'Shop',
  evergreenIconWidth = 100,
  evergreenIconHeight = 100,
  
  // Footer props
  footerLogoImage = 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c19142f918b60065ae9302/original.png',
  footerLogoAlt = 'Etsy',
  footerLogoWidth = 63,
  footerLogoHeight = 32,
  showSocialSection = true,
  socialLabel = "Let's be friends",
  instagramHref = '#',
  facebookHref = '#',
  threadsHref = '#',
  pinterestHref = '#',
  tiktokHref = '#',
  showAppBadges = true,
  appLabel = 'Download the Etsy app',
  appStoreHref = '#',
  googlePlayHref = '#',
  footerVariant = 'BuyerMarketing',
}) => {
  // Generate each section's HTML using the component functions
  const navBarHTML = generateNavBarHTML({
    navBarVariant,
    logoImage,
    logoAlt,
    logoWidth,
    logoHeight,
    showNavLink1,
    navLink1Text,
    navLink1Href,
    showNavLink2,
    navLink2Text,
    navLink2Href,
    showNavLink3,
    navLink3Text,
    navLink3Href,
  });

  const heroHTML = generateHeroHTML({
    headline,
    subtitle,
    heroImage,
    heroAlt,
    showHeroImage,
    showHeroHeadline,
    showHeroSubtitle,
    showHeroButton,
    heroButtonStyleType,
    primaryButtonText,
    primaryButtonHref,
  });

  const productGridHTML = generateProductGridHTML({
    gridRows,
    showGridButton,
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
  });

  const evergreenHTML = generateEvergreenModuleHTML({
    evergreenHeading,
    evergreenDescription,
    evergreenLinkText,
    evergreenLinkHref,
    evergreenIcon,
    evergreenIconAlt,
    evergreenIconWidth,
    evergreenIconHeight,
  });

  // Generate legal text based on footerVariant
  const legalText = footerVariant === 'BuyerMarketing'
    ? '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on Etsy.com with this email address. To stop receiving Etsy marketing emails, <a href="#" style="color: #665e5c; text-decoration: underline;">unsubscribe here</a>.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>'
    : '<p style="margin: 0 0 1.25em 0;">You are receiving this email because you registered on <a href="#" style="color: #665e5c; text-decoration: underline;">Etsy.com</a> with this email address.</p><p style="margin: 0 0 1.25em 0;">If you live in North America or South America, this email is sent by Etsy, Inc., 117 Adams Street, Brooklyn, NY, 11201, US; if you live elsewhere, this email is sent by Etsy Ireland UC, a subsidiary of Etsy, Inc., One Le Pole Square, Ship Street Great, Dublin 8, D08 E6PD, Ireland having company registration number 495696 and VAT registration number IE9777587C.</p><p style="margin: 0;">Copyright 2025 Etsy, Inc., an affiliate of Etsy Ireland UC. All rights reserved.</p>';

  const footerHTML = generateFooterHTML({
    logoImage: footerLogoImage,
    logoAlt: footerLogoAlt,
    logoWidth: footerLogoWidth,
    logoHeight: footerLogoHeight,
    showSocialSection,
    socialLabel,
    instagramHref,
    facebookHref,
    threadsHref,
    pinterestHref,
    tiktokHref,
    showAppBadges,
    appLabel,
    appStoreHref,
    googlePlayHref,
    legalText,
  });

  // Extract just the content from each component (remove the styles and wrapper tags)
  const extractContent = (html) => {
    // Remove the opening styles and wrapper
    let content = html.replace(getEmailStyles(), '');
    // Remove the closing tags
    content = content.replace(getEmailClosingTags(), '');
    return content.trim();
  };

  const navBarContent = extractContent(navBarHTML);
  const heroContent = extractContent(heroHTML);
  const productGridContent = extractContent(productGridHTML);
  const evergreenContent = extractContent(evergreenHTML);
  const footerContent = extractContent(footerHTML);

  // Assemble the complete email with styles once at the top
  return `${getEmailStyles()}
${navBarContent}
${heroContent}
${productGridContent}
${evergreenContent}
${footerContent}
${getEmailClosingTags()}`;
};

export const CatPropTemplate = (props = {}) => {
  const html = generateEmailHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export const CatPropTemplateHTML = (props = {}) => {
  return generateEmailHTML(props);
};

export default CatPropTemplate;
