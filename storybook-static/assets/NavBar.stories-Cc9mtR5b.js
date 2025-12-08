import"./index-uubelm5h.js";import{j as P}from"./jsx-runtime-Dob27XW0.js";import{g as z,a as C}from"./emailStyles-BN5YROtR.js";const y=({navBarVariant:a="Default",logoSrc:t="https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png",logoAlt:x="Logo",logoWidth:s=50,logoHeight:l=50,showNavLink1:N=!0,navLink1Text:w="Trends",navLink1Href:$="#",showNavLink2:H=!0,navLink2Text:B="Gifts",navLink2Href:T="#",showNavLink3:D=!0,navLink3Text:S="Deals",navLink3Href:A="#",leftPadding:_="32px"})=>{let n=N,o=H,c=D,g=_;return a==="NoLinks"?(n=!1,o=!1,c=!1):a==="NoLeftPadding"&&(g="0"),`${z()}
            
            <!-- Nav Bar -->
    <tr>
        <td style="padding: 0 32px 0 ${g};" class="mobile-padding-nav">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td width="${s}" style="padding: 0; vertical-align: middle;">
                        <!-- Logo -->
                        <img src="${t}" alt="${x}" width="${s}" height="${l}" style="display: block; width: ${s}px; height: ${l}px; border: 0;">
                    </td>
                    <td style="padding: 0 0 0 16px; text-align: right; vertical-align: middle;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="right">
                            <tr>
                                ${n?`
                                <td style="padding: 0 12px;">
                                    <a href="${$}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${w}</a>
                                </td>
                                `:""}
                                ${o?`
                                <td style="padding: 0 12px;">
                                    <a href="${T}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${B}</a>
                                </td>
                                `:""}
                                ${c?`
                                <td style="padding: 0 0 0 ${o||n?"12px":"0"};">
                                    <a href="${A}" style="color: #312b36; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; text-decoration: underline;">${S}</a>
                                </td>
                                `:""}
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
${C()}`},b=a=>{const t=y(a);return P("div",{dangerouslySetInnerHTML:{__html:t}})};b.__docgenInfo={description:"",methods:[],displayName:"NavBar"};const V={title:"Email Components/NavBar",component:b,parameters:{layout:"fullscreen",html:{transform:(a,t)=>y(t.args)}},argTypes:{navBarVariant:{control:{type:"select"},options:["Default","NoLinks","NoLeftPadding"],description:"NavBar variant style",table:{category:"Variant"}},logoSrc:{control:"text",description:"URL for the logo image",table:{category:"Logo"}},logoAlt:{control:"text",description:"Alt text for the logo",table:{category:"Logo"}},logoWidth:{control:"number",description:"Width of the logo in pixels",table:{category:"Logo"}},logoHeight:{control:"number",description:"Height of the logo in pixels",table:{category:"Logo"}},showNavLink1:{control:"boolean",description:"Show/hide nav link 1",table:{category:"Links",subcategory:"Link 1"}},navLink1Text:{control:"text",description:"Nav link 1 text",table:{category:"Links",subcategory:"Link 1"}},navLink1Href:{control:"text",description:"Nav link 1 URL",table:{category:"Links",subcategory:"Link 1"}},showNavLink2:{control:"boolean",description:"Show/hide nav link 2",table:{category:"Links",subcategory:"Link 2"}},navLink2Text:{control:"text",description:"Nav link 2 text",table:{category:"Links",subcategory:"Link 2"}},navLink2Href:{control:"text",description:"Nav link 2 URL",table:{category:"Links",subcategory:"Link 2"}},showNavLink3:{control:"boolean",description:"Show/hide nav link 3",table:{category:"Links",subcategory:"Link 3"}},navLink3Text:{control:"text",description:"Nav link 3 text",table:{category:"Links",subcategory:"Link 3"}},navLink3Href:{control:"text",description:"Nav link 3 URL",table:{category:"Links",subcategory:"Link 3"}}}},e={args:{navBarVariant:"Default",logoSrc:"https://braze-images.com/appboy/communication/assets/image_assets/images/68c190e17c507e0064a9a366/original.png",logoAlt:"Logo",logoWidth:50,logoHeight:50,showNavLink1:!0,navLink1Text:"Trends",navLink1Href:"#",showNavLink2:!0,navLink2Text:"Gifts",navLink2Href:"#",showNavLink3:!0,navLink3Text:"Deals",navLink3Href:"#"}},i={args:{...e.args,showNavLink1:!1,showNavLink2:!1,showNavLink3:!1}},r={args:{...e.args,leftPadding:"0"}};var d,p,L;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    navBarVariant: 'Default',
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
    navLink3Href: '#'
  }
}`,...(L=(p=e.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};var k,v,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showNavLink1: false,
    showNavLink2: false,
    showNavLink3: false
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,m,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftPadding: '0'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Default","NoLinks","NoLeftPadding"];export{e as Default,r as NoLeftPadding,i as NoLinks,j as __namedExportsOrder,V as default};
