import"./index-uubelm5h.js";import{j as E}from"./jsx-runtime-Dob27XW0.js";import{g as N,a as T}from"./emailStyles-518zK1lX.js";const v=({heroImage:t="https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg",heroAlt:a="Hero Image",heroImageVariant:L="padded",heroImageRatio:g="3:2",imageHref:c="#"})=>{const m=L==="full-bleed",k=()=>{const r=m?600:536;switch(g){case"16:9":return{width:r,height:Math.round(r*9/16)};case"5:4":return{width:r,height:Math.round(r*4/5)};case"3:2":default:return{width:r,height:Math.round(r*2/3)}}},{width:h,height:o}=k(),p=(()=>{switch(g){case"16:9":return"hero-image-mobile-16-9";case"5:4":return"hero-image-mobile-5-4";case"3:2":default:return"hero-image-mobile-3-2"}})();return`${N()}
            
            <!-- Hero Image Section -->
    ${m?`
    <tr>
        <td style="padding: 0;">
            <!-- Full Bleed Hero Image -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 0;">
                        <a href="${c}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${t}" alt="${a}" width="${h}" height="${o}" style="border: none; clear: both; display: block; height: ${o}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${p}">
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
                        <a href="${c}" style="border: 0; text-decoration: none;" target="_blank">
                            <img src="${t}" alt="${a}" width="${h}" height="${o}" style="border: none; border-radius: 8px; clear: both; display: block; height: ${o}px; max-width: 100%; object-fit: cover; object-position: center; outline: none; overflow: hidden; text-decoration: none; width: 100%;" class="${p}">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    `}
    
${T()}`},C=t=>{const a=v(t);return E("div",{dangerouslySetInnerHTML:{__html:a}})};C.__docgenInfo={description:"",methods:[],displayName:"HeroImage"};const U={title:"Email Components/Hero Image",component:C,parameters:{layout:"padded",html:{transform:(t,a)=>v(a.args)}},argTypes:{heroImage:{control:"text",description:"Hero image URL",table:{category:"Image"}},heroAlt:{control:!1,table:{disable:!0}},heroImageVariant:{control:"select",options:["padded","full-bleed"],description:"Hero image layout variant",table:{category:"Layout"}},heroImageRatio:{control:"select",options:["16:9","3:2","5:4"],description:"Hero image aspect ratio (only applies to padded variant)",table:{category:"Layout"}},imageHref:{control:!1,table:{disable:!0}}}},e={args:{heroImageVariant:"padded",heroImageRatio:"16:9",imageHref:"#",heroImage:"https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg",heroAlt:"Dollhouse Miniatures"}},s={args:{...e.args,heroImageRatio:"3:2"}},d={args:{...e.args,heroImageRatio:"5:4"}},n={args:{...e.args,heroImageVariant:"full-bleed",heroImageRatio:"16:9"}},i={args:{...e.args,heroImageVariant:"full-bleed",heroImageRatio:"3:2"}},l={args:{...e.args,heroImageVariant:"full-bleed",heroImageRatio:"5:4"}};var u,b,x;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    heroImageVariant: 'padded',
    heroImageRatio: '16:9',
    imageHref: '#',
    heroImage: 'https://i.etsystatic.com/7721451/r/il/af962a/7354499205/il_1588xN.7354499205_3uxg.jpg',
    heroAlt: 'Dollhouse Miniatures'
  }
}`,...(x=(b=e.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,f,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Padded16x9.args,
    heroImageRatio: '3:2'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var H,$,w;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Padded16x9.args,
    heroImageRatio: '5:4'
  }
}`,...(w=($=d.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var _,R,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '16:9'
  }
}`,...(P=(R=n.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var j,M,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '3:2'
  }
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var V,B,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Padded16x9.args,
    heroImageVariant: 'full-bleed',
    heroImageRatio: '5:4'
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const q=["Padded16x9","Padded3x2","Padded5x4","FullBleed16x9","FullBleed3x2","FullBleed5x4"];export{n as FullBleed16x9,i as FullBleed3x2,l as FullBleed5x4,e as Padded16x9,s as Padded3x2,d as Padded5x4,q as __namedExportsOrder,U as default};
