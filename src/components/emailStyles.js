// Shared email styles for all components
export const getEmailStyles = () => `<style>
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
    @media only screen and (max-width: 599px) {
        .mobile-padding {
            padding-left: 16px !important;
            padding-right: 16px !important;
        }
        .mobile-padding-nav {
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
<center style="max-width: 600px; margin: 0 auto; background-color: #faf8f5;">
    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #faf8f5;">
    <tr>
    <td>
    <![endif]-->
    
    <!-- Email Container -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px; width: 100%; background-color: #faf8f5;">`;

export const getEmailClosingTags = () => `
    </table>
    
    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    <![endif]-->
</center>`;
