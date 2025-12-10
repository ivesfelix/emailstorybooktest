import{j as u}from"./jsx-runtime-Dob27XW0.js";import"./index-uubelm5h.js";import{g as w,a as N}from"./emailStyles-CNiWnjAW.js";const k=({navBarVariant:e="Default",logoImage:i="https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png",logoAlt:s="Logo",logoWidth:l=50,logoHeight:r=50,showNavLink1:o=!0,navLink1Text:g="Trends",navLink1Href:p="#",showNavLink2:c=!0,navLink2Text:f="Gifts",navLink2Href:m="#",showNavLink3:h=!0,navLink3Text:$="Deals",navLink3Href:b="#",leftPadding:y="32px"})=>{let t=o,a=c,n=h,d=y;e==="NoLinks"?(t=!1,a=!1,n=!1):e==="NoLeftPadding"&&(d="0px");const x="32px",v=e==="NoLeftPadding"?"mobile-padding-nav-no-left":"mobile-padding-nav";return`${w()}
            
            <!-- Nav Bar -->
    <tr>
        <td style="padding: 0 ${x} 0 ${d};" class="${v}">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td width="${l}" style="padding: 0; vertical-align: middle;">
                        <!-- Logo -->
                        <img src="${i}" alt="${s}" width="${l}" height="${r}" style="display: block; width: ${l}px; height: ${r}px; border: 0;">
                    </td>
                    <td style="padding: 0 0 0 16px; text-align: right; vertical-align: middle;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                            <tr>
                                ${t?`
                                <td style="padding: 0 12px;">
                                    <a href="${p}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline; word-break: break-word;">${g}</a>
                                </td>
                                `:""}
                                ${a?`
                                <td style="padding: 0 12px;">
                                    <a href="${m}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline; word-break: break-word;">${f}</a>
                                </td>
                                `:""}
                                ${n?`
                                <td style="padding: 0 0 0 ${a||t?"12px":"0"};">
                                    <a href="${b}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline; word-break: break-word;">${$}</a>
                                </td>
                                `:""}
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
${N()}`},L=e=>{const i=k(e);return u("div",{dangerouslySetInnerHTML:{__html:i}})};L.__docgenInfo={description:"",methods:[],displayName:"NavBar"};export{L as N,k as g};
