import{j as n}from"./jsx-runtime-Dob27XW0.js";import{r as a}from"./index-uubelm5h.js";localStorage.getItem("sb-color-scheme");const p={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0},docs:{source:{language:"html"}},backgrounds:{disable:!0},toolbar:{title:{hidden:!1},zoom:{hidden:!1},eject:{hidden:!1},copy:{hidden:!1},fullscreen:{hidden:!1},viewport:{hidden:!1},"z-color-scheme-toggle/tool":{hidden:!1}},viewport:{viewports:{iphone5:{name:"iPhone 5",styles:{width:"320px",height:"568px"},type:"mobile",icon:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{width:"393px",height:"852px"},type:"mobile",icon:"mobile"},desktop:{name:"Desktop",styles:{width:"600px",height:"1280px"},type:"desktop",icon:"browser"}}},html:{prettier:{tabWidth:2,useTabs:!1,htmlWhitespaceSensitivity:"ignore",printWidth:80,proseWrap:"always"},highlighter:{wrapLines:!0,showLineNumbers:!1},removeComments:!1,removeEmptyComments:!1}},m={colorScheme:{defaultValue:"light"}},c=[(s,i)=>{const r=i.globals.colorScheme||"light";return a.useEffect(()=>{const t="custom-html-addon-styles";let o=document.getElementById(t);o||(o=document.createElement("style"),o.id=t,document.head.appendChild(o)),o.textContent=`
        /* HTML addon styling - override emotion styles */
        #storybook-panel-root [data-lang],
        #storybook-panel-root .css-rz1y00 {
          margin: 8px !important;
          position: relative !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          display: block !important;
        }
        #storybook-panel-root [data-lang] pre,
        #storybook-panel-root .css-rz1y00 pre {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          overflow-x: auto !important;
        }
        #storybook-panel-root [data-lang] button,
        #storybook-panel-root .css-rz1y00 button,
        #storybook-panel-root button[title="Copy to clipboard"] {
          position: absolute !important;
          top: 8px !important;
          right: 8px !important;
          z-index: 10 !important;
          margin: 0 !important;
        }
      `},[]),a.useEffect(()=>{const t=document.documentElement,o=document.body,e=document.getElementById("storybook-root");r==="dark"?(t.classList.add("dark-mode"),o.classList.add("dark-mode"),e&&e.classList.add("dark-mode")):(t.classList.remove("dark-mode"),o.classList.remove("dark-mode"),e&&e.classList.remove("dark-mode"))},[r]),n(s,{})}];export{c as decorators,m as globalTypes,p as parameters};
