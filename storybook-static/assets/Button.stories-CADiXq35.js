import"./index-uubelm5h.js";import{j as L}from"./jsx-runtime-Dob27XW0.js";import{g as _,a as P}from"./emailStyles-BN5YROtR.js";const B=({buttonText:n="Click here",buttonHref:e="#",buttonType:w="secondary",alignment:i="left"})=>{const t=w==="primary",C=t?"primary-button":"secondary-button",H=t?"#312b36":"transparent",c=t?"#faf8f5":"#312b36",l="#312b36",k=t?"#312b36":"transparent",v=t?"f":"t";return`${_()}
            
            <!-- ${t?"Primary":"Secondary"} Button -->
            <tr>
                <td style="padding: 0 32px 40px 32px; text-align: ${i};" class="mobile-padding-button">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${i}">
                        <tr>
                            <td align="${i}" style="padding: 0;">
                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${e}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${v}" strokecolor="${l}" strokeweight="1.5px" fillcolor="${k}">
                                    <w:anchorlock/>
                                    <center style="color:${c};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${n}</center>
                                </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-->
                                <a href="${e}" class="${C}" style="background-color: ${H}; border: 1.5px solid ${l}; border-radius: 24px; color: ${c}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${n}</a>
                                <!--<![endif]-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    
${P()}`},$=n=>{const e=B(n);return L("div",{dangerouslySetInnerHTML:{__html:e}})};$.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Email Components/Button",component:$,parameters:{layout:"centered",html:{transform:(n,e)=>B(e.args)}},argTypes:{buttonText:{control:"text",description:"Button text"},buttonHref:{control:"text",description:"Button URL"},buttonType:{control:{type:"select"},options:["primary","secondary"],description:"Button style type"},alignment:{control:{type:"select"},options:["left","center"],description:"Button alignment"}}},o={args:{buttonText:"Shop now",buttonHref:"#",buttonType:"primary",alignment:"left"}},r={args:{buttonText:"Shop now",buttonHref:"#",buttonType:"secondary",alignment:"left"}},s={args:{buttonText:"Shop now",buttonHref:"#",buttonType:"primary",alignment:"center"}},a={args:{buttonText:"Shop now",buttonHref:"#",buttonType:"secondary",alignment:"center"}};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'primary',
    alignment: 'left'
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,y,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'secondary',
    alignment: 'left'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,b,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'primary',
    alignment: 'center'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,S,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'secondary',
    alignment: 'center'
  }
}`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const D=["PrimaryButtonLeft","SecondaryButtonLeft","PrimaryButtonCentered","SecondaryButtonCentered"];export{s as PrimaryButtonCentered,o as PrimaryButtonLeft,a as SecondaryButtonCentered,r as SecondaryButtonLeft,D as __namedExportsOrder,A as default};
