import{j as B}from"./jsx-runtime-Dob27XW0.js";import"./index-uubelm5h.js";import{g as M,a as j}from"./emailStyles-518zK1lX.js";const I=({heroImage:o="https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg",heroAlt:r="Hero Image",heroImageVariant:f="padded",heroImageRatio:n="3:2",imageHref:l="#",headline:u="Curated for you: Dollhouse Miniatures",subtitle:x="Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.",showHeroHeadline:y=!0,showHeroSubtitle:$=!0,showHeroButton:a=!0,heroButtonStyleType:w="primary",primaryButtonText:s="Shop now",primaryButtonHref:d="#"})=>{const c=f==="full-bleed",H=()=>{const e=c?600:536;switch(n){case"16:9":return{width:e,height:Math.round(e*9/16)};case"5:4":return{width:e,height:Math.round(e*4/5)};case"3:2":default:return{width:e,height:Math.round(e*2/3)}}},{width:h,height:i}=H(),g=(()=>{switch(n){case"16:9":return"hero-image-mobile-16-9";case"5:4":return"hero-image-mobile-5-4";case"3:2":default:return"hero-image-mobile-3-2"}})(),t=w==="primary",v=t?"primary-button":"secondary-button",p=t?"#312b36":"transparent",m=t?"#faf8f5":"#312b36",b="#312b36",C=t?"#312b36":"transparent",k=t?"f":"t";return`${M()}
            
            <!-- Hero Image Section -->
    ${c?`
    <tr>
        <td style="padding: 0;">
            <!-- Full Bleed Hero Image -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 0;">
                        <a href="${l}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${o}" alt="${r}" width="${h}" height="${i}" style="border: none; clear: both; display: block; height: ${i}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${g}">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    `:`
    <tr>
        <td style="padding: 24px 32px 0 32px;" class="mobile-padding-hero-image">
            <!-- Padded Hero Image -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 0;">
                        <a href="${l}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${o}" alt="${r}" width="${h}" height="${i}" style="border: none; border-radius: 8px; clear: both; display: block; height: ${i}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${g}">
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
                ${y?`
                <!-- Hero Headline -->
                <tr>
                    <td style="padding-bottom: 12px; font-family: 'ABC Otto', Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.05; letter-spacing: -1.5px; color: #312b36;" class="h1-mobile">
                        ${u}
                    </td>
                </tr>
                `:""}
                ${$?`
                <!-- Hero Subtitle -->
                <tr>
                    <td style="padding-bottom: ${a?"24px":"0"}; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36;">
                        ${x}
                    </td>
                </tr>
                `:""}
                ${a?`
                <!-- Hero Button -->
                <tr>
                    <td style="padding: 0; text-align: left;">
                        <!-- Bulletproof Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="border-radius: 24px; background: ${p};">
                                    <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${d}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${k}" strokecolor="${b}" strokeweight="1.5px" fillcolor="${C}">
                                        <w:anchorlock/>
                                        <center style="color:${m};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${s}</center>
                                    </v:roundrect>
                                    <![endif]-->
                                    <!--[if !mso]><!-->
                                    <a href="${d}" class="${v}" style="background-color: ${p}; border: 1.5px solid ${b}; border-radius: 24px; color: ${m}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${s}</a>
                                    <!--<![endif]-->
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                `:""}
            </table>
        </td>
    </tr>
    
${j()}`},_=o=>{const r=I(o);return B("div",{dangerouslySetInnerHTML:{__html:r}})};_.__docgenInfo={description:"",methods:[],displayName:"HeroWithImage"};export{_ as H,I as g};
