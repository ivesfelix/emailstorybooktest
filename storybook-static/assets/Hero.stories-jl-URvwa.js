import{j as T}from"./jsx-runtime-Dob27XW0.js";import"./index-uubelm5h.js";import{g as _,a as j}from"./emailStyles-518zK1lX.js";import{g as L,H as N}from"./HeroWithImage-BlwzuxiG.js";const $=({headline:t="Curated for you: Dollhouse Miniatures",subtitle:e="Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.",showHeroHeadline:v=!0,showHeroSubtitle:A=!0,showHeroButton:i=!0,heroButtonStyleType:D="primary",primaryButtonText:l="Shop now",primaryButtonHref:c="#"})=>{const r=D==="primary",k=r?"primary-button":"secondary-button",d=r?"#312b36":"transparent",u=r?"#faf8f5":"#312b36",p="#312b36",M=r?"#312b36":"transparent",z=r?"f":"t";return`${_()}
            
            <!-- Hero Content Section -->
    <tr>
        <td style="padding: 24px 32px 40px 32px;" class="mobile-padding-hero">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                ${v?`
                <!-- Hero Headline -->
                <tr>
                    <td style="padding-bottom: 12px; font-family: 'ABC Otto', Georgia, serif; font-weight: 400; font-size: 50px; line-height: 1.05; letter-spacing: -1.5px; color: #312b36;" class="h1-mobile">
                        ${t}
                    </td>
                </tr>
                `:""}
                ${A?`
                <!-- Hero Subtitle -->
                <tr>
                    <td style="padding-bottom: ${i?"24px":"0"}; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.3; color: #312b36;">
                        ${e}
                    </td>
                </tr>
                `:""}
                ${i?`
                <!-- Hero Button -->
                <tr>
                    <td style="padding: 0; text-align: left;">
                        <!-- Bulletproof Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="left">
                            <tr>
                                <td style="border-radius: 24px; background: ${d};">
                                    <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${c}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${z}" strokecolor="${p}" strokeweight="1.5px" fillcolor="${M}">
                                        <w:anchorlock/>
                                        <center style="color:${u};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${l}</center>
                                    </v:roundrect>
                                    <![endif]-->
                                    <!--[if !mso]><!-->
                                    <a href="${c}" class="${k}" style="background-color: ${d}; border: 1.5px solid ${p}; border-radius: 24px; color: ${u}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${l}</a>
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
    
${j()}`},I=t=>{const e=$(t);return T("div",{dangerouslySetInnerHTML:{__html:e}})};I.__docgenInfo={description:"",methods:[],displayName:"Hero"};const O={title:"Email Components/Hero",component:I,parameters:{layout:"padded",html:{transform:(t,e)=>e.title.includes("Default")?L(e.args):$(e.args)}},argTypes:{showHeroHeadline:{control:"boolean",description:"Show/hide headline",table:{category:"Content"}},headline:{control:"text",description:"Hero headline text",table:{category:"Content"}},showHeroSubtitle:{control:"boolean",description:"Show/hide subtitle",table:{category:"Content"}},subtitle:{control:"text",description:"Hero subtitle text",table:{category:"Content"}},showHeroButton:{control:"boolean",description:"Show/hide CTA button",table:{category:"CTA"}},heroButtonStyleType:{control:"select",options:["primary","secondary"],description:"Button style type",table:{category:"CTA"}},primaryButtonText:{control:"text",description:"CTA button text",table:{category:"CTA"}},primaryButtonHref:{control:"text",description:"CTA button URL",table:{category:"CTA"}},heroImage:{control:"text",description:"Hero image URL",table:{category:"Image"}},heroAlt:{control:!1,table:{disable:!0}},heroImageVariant:{control:"select",options:["padded","full-bleed"],description:"Hero image layout variant",table:{category:"Image"}},heroImageRatio:{control:"select",options:["16:9","3:2","5:4"],description:"Hero image aspect ratio",table:{category:"Image"}},imageHref:{control:!1,table:{disable:!0}}}},o={render:t=>T(N,{...t}),args:{heroImage:"https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg",heroAlt:"Dollhouse Miniatures",heroImageVariant:"padded",heroImageRatio:"3:2",imageHref:"#",headline:"Curated for you: Dollhouse Miniatures",subtitle:"Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.",showHeroHeadline:!0,showHeroSubtitle:!0,showHeroButton:!0,heroButtonStyleType:"primary",primaryButtonText:"Shop now",primaryButtonHref:"#"}},a={args:{headline:"Curated for you: Dollhouse Miniatures",subtitle:"Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.",showHeroHeadline:!0,showHeroSubtitle:!0,showHeroButton:!0,heroButtonStyleType:"primary",primaryButtonText:"Shop now",primaryButtonHref:"#"}},n={args:{...o.args,showHeroSubtitle:!1}},s={args:{...o.args,showHeroButton:!1}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <HeroWithImage {...args} />,
  args: {
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures',
    heroImageVariant: 'padded',
    heroImageRatio: '3:2',
    imageHref: '#',
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    heroButtonStyleType: 'primary',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'Curated for you: Dollhouse Miniatures',
    subtitle: 'Your personalized roundup of creative finds, specifically selected to make you smile. Browse and enjoy.',
    showHeroHeadline: true,
    showHeroSubtitle: true,
    showHeroButton: true,
    heroButtonStyleType: 'primary',
    primaryButtonText: 'Shop now',
    primaryButtonHref: '#'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var H,x,w;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showHeroSubtitle: false
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,S,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showHeroButton: false
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const V=["Default","TextWithButton","MinimalHero","TextOnly"];export{o as Default,n as MinimalHero,s as TextOnly,a as TextWithButton,V as __namedExportsOrder,O as default};
