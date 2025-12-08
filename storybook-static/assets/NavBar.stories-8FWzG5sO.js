import"./index-uubelm5h.js";import{j as S}from"./jsx-runtime-Dob27XW0.js";import{g as A,a as D}from"./emailStyles-BN5YROtR.js";const v=({logoSrc:a="https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png",logoAlt:t="Logo",logoWidth:i=50,logoHeight:l=50,showNavLink1:r=!0,navLink1Text:y="Trends",navLink1Href:b="#",showNavLink2:s=!0,navLink2Text:x="Gifts",navLink2Href:N="#",showNavLink3:$=!0,navLink3Text:H="Deals",navLink3Href:w="#",leftPadding:T="32px"})=>`${A()}
            
            <!-- Nav Bar -->
    <tr>
        <td style="padding: 0 32px 0 ${T};" class="mobile-padding-nav">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td width="${i}" style="padding: 0; vertical-align: middle;">
                        <!-- Logo -->
                        <img src="${a}" alt="${t}" width="${i}" height="${l}" style="display: block; width: ${i}px; height: ${l}px; border: 0;">
                    </td>
                    <td style="padding: 0 0 0 16px; text-align: right; vertical-align: middle;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                            <tr>
                                ${r?`
                                <td style="padding: 0 12px;">
                                    <a href="${b}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${y}</a>
                                </td>
                                `:""}
                                ${s?`
                                <td style="padding: 0 12px;">
                                    <a href="${N}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${x}</a>
                                </td>
                                `:""}
                                ${$?`
                                <td style="padding: 0 0 0 ${s||r?"12px":"0"};">
                                    <a href="${w}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${H}</a>
                                </td>
                                `:""}
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
${D()}`,u=a=>{const t=v(a);return S("div",{dangerouslySetInnerHTML:{__html:t}})};u.__docgenInfo={description:"",methods:[],displayName:"NavBar"};const C={title:"Email Components/NavBar",component:u,parameters:{layout:"fullscreen",html:{transform:(a,t)=>v(t.args)}},argTypes:{logoSrc:{control:"text",description:"URL for the logo image",table:{category:"Logo"}},logoAlt:{control:"text",description:"Alt text for the logo",table:{category:"Logo"}},logoWidth:{control:"number",description:"Width of the logo in pixels",table:{category:"Logo"}},logoHeight:{control:"number",description:"Height of the logo in pixels",table:{category:"Logo"}},showNavLink1:{control:"boolean",description:"Show/hide nav link 1",table:{category:"Links",subcategory:"Link 1"}},navLink1Text:{control:"text",description:"Nav link 1 text",table:{category:"Links",subcategory:"Link 1"}},navLink1Href:{control:"text",description:"Nav link 1 URL",table:{category:"Links",subcategory:"Link 1"}},showNavLink2:{control:"boolean",description:"Show/hide nav link 2",table:{category:"Links",subcategory:"Link 2"}},navLink2Text:{control:"text",description:"Nav link 2 text",table:{category:"Links",subcategory:"Link 2"}},navLink2Href:{control:"text",description:"Nav link 2 URL",table:{category:"Links",subcategory:"Link 2"}},showNavLink3:{control:"boolean",description:"Show/hide nav link 3",table:{category:"Links",subcategory:"Link 3"}},navLink3Text:{control:"text",description:"Nav link 3 text",table:{category:"Links",subcategory:"Link 3"}},navLink3Href:{control:"text",description:"Nav link 3 URL",table:{category:"Links",subcategory:"Link 3"}},leftPadding:{control:"text",description:"Left padding (e.g., 32px, 0)",table:{category:"Layout"}}}},e={args:{logoSrc:"https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png",logoAlt:"Logo",logoWidth:50,logoHeight:50,showNavLink1:!0,navLink1Text:"Trends",navLink1Href:"#",showNavLink2:!0,navLink2Text:"Gifts",navLink2Href:"#",showNavLink3:!0,navLink3Text:"Deals",navLink3Href:"#",leftPadding:"32px"}},n={args:{...e.args,showNavLink1:!1,showNavLink2:!1,showNavLink3:!1}},o={args:{...e.args,leftPadding:"0"}};var c,g,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    logoSrc: 'https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png',
    logoAlt: 'Logo',
    logoWidth: 50,
    logoHeight: 50,
    showNavLink1: true,
    navLink1Text: 'Trends',
    navLink1Href: '#',
    showNavLink2: true,
    navLink2Text: 'Gifts',
    navLink2Href: '#',
    showNavLink3: true,
    navLink3Text: 'Deals',
    navLink3Href: '#',
    leftPadding: '32px'
  }
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,L,k;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showNavLink1: false,
    showNavLink2: false,
    showNavLink3: false
  }
}`,...(k=(L=n.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var m,f,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftPadding: '0'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const E=["Default","NoLinks","NoLeftPadding"];export{e as Default,o as NoLeftPadding,n as NoLinks,E as __namedExportsOrder,C as default};
