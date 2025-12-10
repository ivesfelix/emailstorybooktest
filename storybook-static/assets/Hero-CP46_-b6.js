import{j as b}from"./jsx-runtime-Dob27XW0.js";import"./index-uubelm5h.js";import{g as y,a as $}from"./emailStyles-CNiWnjAW.js";const w=({h1:t="Curated for you: Dollhouse Miniatures",subtitle:o="Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.",heroImage:s="https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg",heroAlt:d="Dollhouse Miniatures",showHeroImage:c=!0,showHeroHeading:p=!0,showHeroSubtitle:h=!0,showHeroCTA:g=!0,heroButtonStyleType:f="primary",primaryButtonText:i="Shop now",primaryButtonHref:r="#"})=>{const e=f==="primary",m=e?"primary-button":"secondary-button",n=e?"#312b36":"transparent",l=e?"#faf8f5":"#312b36",a="#312b36",x=e?"#312b36":"transparent",u=e?"f":"t";return`${y()}
            
            <!-- Hero Section -->
    <tr>
        <td style="padding: 24px 32px 40px 32px;" class="mobile-padding-hero">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                ${c?`
                <!-- Hero Image -->
                <tr>
                    <td align="center" style="padding: 0 0 24px;">
                        <a href="${r}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${s}" alt="${d}" width="536" height="357" style="border: none; border-radius: 8px; clear: both; display: block; height: auto; max-height: 357px; max-width: 536px; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="hero-image-mobile">
                        </a>
                    </td>
                </tr>
                `:""}
                ${p?`
                <!-- Hero Heading -->
                <tr>
                    <td style="padding-bottom: 12px; font-family: 'ABC Otto', Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.05; letter-spacing: -1.5px; color: #312b36;" class="h1-mobile">
                        ${t}
                    </td>
                </tr>
                `:""}
                ${h?`
                <!-- Hero Subheading -->
                <tr>
                    <td style="padding-bottom: 24px; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36;">
                        ${o}
                    </td>
                </tr>
                `:""}
                ${g?`
                <!-- Hero Button -->
                <tr>
                    <td style="padding: 0; text-align: left;">
                        <!-- Bulletproof Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="border-radius: 24px; background: ${n};">
                                    <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${r}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${u}" strokecolor="${a}" strokeweight="1.5px" fillcolor="${x}">
                                        <w:anchorlock/>
                                        <center style="color:${l};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${i}</center>
                                    </v:roundrect>
                                    <![endif]-->
                                    <!--[if !mso]><!-->
                                    <a href="${r}" class="${m}" style="background-color: ${n}; border: 1.5px solid ${a}; border-radius: 24px; color: ${l}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${i}</a>
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
    
${$()}`},H=t=>{const o=w(t);return b("div",{dangerouslySetInnerHTML:{__html:o}})};H.__docgenInfo={description:"",methods:[],displayName:"Hero"};export{H,w as g};
