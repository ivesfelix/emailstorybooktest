import"./index-uubelm5h.js";import{j as L}from"./jsx-runtime-Dob27XW0.js";import{g as _,a as P}from"./emailStyles-CNiWnjAW.js";const $=({styleType:n="secondary",alignment:e="left",buttonText:i="Click here",buttonHref:c="#"})=>{const t=n==="primary",C=t?"primary-button":"secondary-button",H=t?"#312b36":"transparent",l=t?"#faf8f5":"#312b36",m="#312b36",k=t?"#312b36":"transparent",v=t?"f":"t";return`${_()}
            
            <!-- ${t?"Primary":"Secondary"} Button -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${e}">
                <tr>
                    <td align="${e}" style="padding: 0;">
                        <!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${c}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${v}" strokecolor="${m}" strokeweight="1.5px" fillcolor="${k}">
                            <w:anchorlock/>
                            <center style="color:${l};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${i}</center>
                        </v:roundrect>
                        <![endif]-->
                        <!--[if !mso]><!-->
                        <a href="${c}" class="${C}" style="background-color: ${H}; border: 1.5px solid ${m}; border-radius: 24px; color: ${l}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${i}</a>
                        <!--<![endif]-->
                    </td>
                </tr>
            </table>
    
${P()}`},w=n=>{const e=$(n);return L("div",{dangerouslySetInnerHTML:{__html:e}})};w.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Email Components/Button",component:w,parameters:{layout:"centered",html:{transform:(n,e)=>$(e.args)}},argTypes:{styleType:{table:{disable:!0}},alignment:{table:{disable:!0}},buttonText:{control:"text",description:"Button text"},buttonHref:{control:"text",description:"Button URL"}}},o={args:{styleType:"primary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},r={args:{styleType:"secondary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},s={args:{styleType:"primary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}},a={args:{styleType:"secondary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    styleType: 'primary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,f,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    styleType: 'secondary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    styleType: 'primary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,T,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    styleType: 'secondary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(B=(T=a.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const D=["PrimaryButtonLeft","SecondaryButtonLeft","PrimaryButtonCentered","SecondaryButtonCentered"];export{s as PrimaryButtonCentered,o as PrimaryButtonLeft,a as SecondaryButtonCentered,r as SecondaryButtonLeft,D as __namedExportsOrder,A as default};
