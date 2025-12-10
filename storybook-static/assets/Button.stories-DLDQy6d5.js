import"./index-uubelm5h.js";import{j as _}from"./jsx-runtime-Dob27XW0.js";import{g as L,a as P}from"./emailStyles-518zK1lX.js";const $=({styleType:r="secondary",alignment:t="left",buttonText:i="Click here",buttonHref:l="#"})=>{const e=r==="primary",C=e?"primary-button":"secondary-button",H=e?"#312b36":"transparent",c=e?"#faf8f5":"#312b36",m="#312b36",k=e?"#312b36":"transparent",v=e?"f":"t";return`${L()}
            
            <!-- ${e?"Primary":"Secondary"} Button -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${t}">
                <tr>
                    <td align="${t}" style="padding: 0;">
                        <!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${l}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${v}" strokecolor="${m}" strokeweight="1.5px" fillcolor="${k}">
                            <w:anchorlock/>
                            <center style="color:${c};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${i}</center>
                        </v:roundrect>
                        <![endif]-->
                        <!--[if !mso]><!-->
                        <a href="${l}" class="${C}" style="background-color: ${H}; border: 1.5px solid ${m}; border-radius: 24px; color: ${c}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${i}</a>
                        <!--<![endif]-->
                    </td>
                </tr>
            </table>
    
${P()}`},w=r=>{const t=$(r);return _("div",{dangerouslySetInnerHTML:{__html:t}})};w.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Email Components/Button",component:w,parameters:{layout:"centered",html:{transform:(r,t)=>$(t.args)}},argTypes:{styleType:{table:{disable:!0}},alignment:{table:{disable:!0}},buttonText:{control:"text",description:"Button text"},buttonHref:{table:{disable:!0}}}},n={args:{styleType:"primary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},o={args:{styleType:"secondary",alignment:"left",buttonText:"Shop now",buttonHref:"#"}},s={args:{styleType:"primary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}},a={args:{styleType:"secondary",alignment:"center",buttonText:"Shop now",buttonHref:"#"}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    styleType: 'primary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    styleType: 'secondary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(T=a.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const D=["PrimaryButtonLeft","SecondaryButtonLeft","PrimaryButtonCentered","SecondaryButtonCentered"];export{s as PrimaryButtonCentered,n as PrimaryButtonLeft,a as SecondaryButtonCentered,o as SecondaryButtonLeft,D as __namedExportsOrder,A as default};
