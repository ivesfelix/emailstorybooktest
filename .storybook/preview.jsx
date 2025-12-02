import { useEffect } from 'react';
import './preview.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: { source: { language: 'html' } },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
      printWidth: 80,
      proseWrap: 'always'
    },
    highlighter: {
      wrapLines: true,
      showLineNumbers: false
    },
    removeComments: false,
    removeEmptyComments: false
  }
};

// Inject styles dynamically for live updates
export const decorators = [
  (Story) => {
    useEffect(() => {
      const styleId = 'custom-html-addon-styles';
      let style = document.getElementById(styleId);
      
      if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
      }
      
      style.textContent = `
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
      `;
    }, []);
    
    return <Story />;
  }
];
