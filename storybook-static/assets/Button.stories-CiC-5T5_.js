import"./index-uubelm5h.js";import{j as L}from"./jsx-runtime-Dob27XW0.js";import{g as _,a as P}from"./emailStyles-BN5YROtR.js";const $=({styleType:n="secondary",alignment:t="left",buttonText:i="Click here",buttonHref:c="#"})=>{const e=n==="primary",C=e?"primary-button":"secondary-button",H=e?"#312b36":"transparent",l=e?"#faf8f5":"#312b36",p="#312b36",k=e?"#312b36":"transparent",v=e?"f":"t";return`${_()}
            
            <!-- ${e?"Primary":"Secondary"} Button -->
            <tr>
                <td style="padding: 0 32px 40px 32px; text-align: ${t};" class="mobile-padding-button">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${t}">
                        <tr>
                            <td align="${t}" style="padding: 0;">
                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${c}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${v}" strokecolor="${p}" strokeweight="1.5px" fillcolor="${k}">
                                    <w:anchorlock/>
                                    <center style="color:${l};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${i}</center>
                                </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-->
                                <a href="${c}" class="${C}" style="background-color: ${H}; border: 1.5px solid ${p}; border-radius: 24px; color: ${l}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${i}</a>
                                <!--<![endif]-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    
${P()}`},w=n=>{const t=$(n);return L("div",{dangerouslySetInnerHTML:{__html:t}})};w.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Email Components/Button",component:w,parameters:{layout:"centered",html:{transform:(n,t)=>$(t.args)}},argTypes:{styleType:{control:{type:"select"},options:["primary","secondary"],description:"Button style type"},alignment:{control:{type:"select"},options:["left","center"],description:"Button alignment"},buttonText:{control:"text",description:"Button text"},buttonHref:{control:"text",description:"Button URL"}}},o={args:{styleType:"primary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},r={args:{styleType:"secondary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},s={args:{styleType:"primary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}},a={args:{styleType:"secondary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    styleType: 'primary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,f,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    styleType: 'secondary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,x,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    styleType: 'primary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,T,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    styleType: 'secondary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(B=(T=a.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const D=["PrimaryButtonLeft","SecondaryButtonLeft","PrimaryButtonCentered","SecondaryButtonCentered"];export{s as PrimaryButtonCentered,o as PrimaryButtonLeft,a as SecondaryButtonCentered,r as SecondaryButtonLeft,D as __namedExportsOrder,A as default};
