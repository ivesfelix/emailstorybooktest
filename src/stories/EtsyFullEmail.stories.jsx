import React from 'react';
import TopNav from '../components/TopNav';
import PromoRibbon from '../components/PromoRibbon';
import PersonalizedHero from '../components/PersonalizedHero';
import TwoColumnProductGrid from '../components/TwoColumnProductGrid';
import SectionHeader from '../components/SectionHeader';
import H2Title from '../components/H2Title';
import ExpertProfile from '../components/ExpertProfile';
import ExpertPicksGrid from '../components/ExpertPicksGrid';
import PromoBanner from '../components/PromoBanner';
import LegalBlurb from '../components/LegalBlurb';
import SocialFooter from '../components/SocialFooter';
import AppBadges from '../components/AppBadges';
import ComplianceFooter from '../components/ComplianceFooter';

export default {
  title: 'Etsy Templates/Full Email',
  parameters: {
    layout: 'fullscreen',
  },
};

export const EtsyNewsletter = {
  args: {
    // Top Nav
    logoSrc: '/images/etsy logo.gif',
    logoHref: 'https://www.etsy.com',
    navLink1Href: 'https://www.etsy.com/cyber-deals',
    navLink1Text: 'Cyber Deals',
    navLink2Href: 'https://www.etsy.com/gift-ideas',
    navLink2Text: 'Gift Ideas',
    navLink3Href: 'https://www.etsy.com/holiday-hub',
    navLink3Text: 'Holiday Hub',
    
    // Promo Ribbon
    promoImageSrc: '/images/banner.gif',
    promoHref: 'https://www.etsy.com/spring-sale',
    
    // Hero
    heroImageSrc: '/images/headline image.jpg',
    heroHeadline: 'Next up for you: Invitations',
    heroCopy: 'Discover your personalized roundup of Etsy finds, here to brighten your day.',
    heroCtaLabel: 'Shop now',
    
    // Product Grid
    gridCtaLabel: 'Shop all',
    
    // Expert Section
    expertAvatarSrc: '/images/avatar.png',
    expertName: 'Sarah Johnson',
    expertTitle: 'Senior Editor',
    expertQuote: 'These handpicked items represent the best of what Etsy has to offer this season.',
    
    // Promo Banner
    promoBannerHeadline: 'Cyber Specials: Get up to 60% off*',
    promoBannerCopy: '',
    
    // Footer
    socialHeadline: "Let's be friends",
    appBadgeHeadline: 'Download the Etsy app',
    companyName: 'Etsy, Inc.',
    companyAddress: '117 Adams Street, Brooklyn, NY 11201'
  },
  argTypes: {
    // Top Nav controls
    logoSrc: { control: 'text', description: 'Logo image URL' },
    navLink1Text: { control: 'text' },
    navLink2Text: { control: 'text' },
    navLink3Text: { control: 'text' },
    
    // Hero controls
    heroHeadline: { control: 'text' },
    heroCopy: { control: 'text' },
    heroCtaLabel: { control: 'text' },
    
    // Expert controls
    expertName: { control: 'text' },
    expertTitle: { control: 'text' },
    expertQuote: { control: 'text' },
    
    // Promo Banner controls
    promoBannerHeadline: { control: 'text' },
    promoBannerCopy: { control: 'text' },
    
    // App Badges controls
    appBadgeHeadline: { control: 'text' },
  },
  render: (args) => (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#FAF8F5', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <TopNav 
        logoSrc={args.logoSrc}
        logoHref={args.logoHref}
        link1Href={args.navLink1Href}
        link1Text={args.navLink1Text}
        link2Href={args.navLink2Href}
        link2Text={args.navLink2Text}
        link3Href={args.navLink3Href}
        link3Text={args.navLink3Text}
      />
      
      <PromoRibbon 
        href={args.promoHref}
        imageSrc={args.promoImageSrc}
        alt="Promotional Banner"
      />
      
      <PersonalizedHero 
        imageSrc={args.heroImageSrc}
        headline={args.heroHeadline}
        copy={args.heroCopy}
        ctaLabel={args.heroCtaLabel}
      />
      
      <TwoColumnProductGrid 
        items={[
          {
            href: '#',
            imageSrc: '/images/gridImage1.jpg',
            itemName: 'Handmade Ceramic Vase',
            shopName: 'ArtisanPottery'
          },
          {
            href: '#',
            imageSrc: '/images/gridImage2.jpg',
            itemName: 'Wooden Serving Bowl',
            shopName: 'WoodworksCo'
          }
        ]}
        ctaLabel={args.gridCtaLabel}
      />
      
      <SectionHeader 
        imageSrc="/images/shapeImage.png"
        alt="Expert Picks"
      />
      
      <H2Title 
        text="Handpicked just for you"
      />
      
      <ExpertProfile 
        avatarSrc={args.expertAvatarSrc}
        name={args.expertName}
        title={args.expertTitle}
        quote={args.expertQuote}
      />
      
      <ExpertPicksGrid 
        items={[
          {
            href: '#',
            imageSrc: '/images/gridImage3.jpg',
            itemName: 'Vintage Art Print',
            shopName: 'RetroGallery'
          },
          {
            href: '#',
            imageSrc: '/images/gridImage4.jpg',
            itemName: 'Leather Messenger Bag',
            shopName: 'CraftedLeather'
          }
        ]}
        ctaLabel="Shop the collection"
      />
      
      <PromoBanner 
        imageSrc="/images/bannerImage.png"
        headline={args.promoBannerHeadline}
        copy={args.promoBannerCopy}
        linkText="Learn more"
      />
      
      <LegalBlurb 
        text="Offer valid while supplies last. Terms and conditions apply. See website for full details."
      />
      
      <SocialFooter 
        headline={args.socialHeadline}
        socialLinks={[
          { href: '#', iconSrc: '/images/social-Facebook.png', alt: 'Facebook' },
          { href: '#', iconSrc: '/images/social-Instagram.png', alt: 'Instagram' },
          { href: '#', iconSrc: '/images/social-Threads.png', alt: 'Threads' },
          { href: '#', iconSrc: '/images/social-Pinterest.png', alt: 'Pinterest' },
          { href: '#', iconSrc: '/images/social-tickTock.png', alt: 'TikTok' }
        ]}
      />
      
      <AppBadges 
        headline={args.appBadgeHeadline}
        appStoreSrc="/images/AppsStoreButton.png"
        googlePlaySrc="/images/GooglePlayButton.png"
      />
      
      <ComplianceFooter 
        companyName={args.companyName}
        address={args.companyAddress}
        unsubscribeText="Unsubscribe"
        copyrightYear={new Date().getFullYear()}
      />
    </div>
  )
};
