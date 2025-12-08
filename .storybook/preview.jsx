import { useEffect, useCallback } from 'react';
import './preview.css';

// Initialize dark mode state
let currentColorScheme = localStorage.getItem('sb-color-scheme') || 'light';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: { source: { language: 'html' } },
  backgrounds: { disable: true },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    viewport: { hidden: false },
    'z-color-scheme-toggle/tool': { hidden: false },
  },
  viewport: {
    viewports: {
      iphone5: {
        name: 'iPhone 5',
        styles: {
          width: '320px',
          height: '568px',
        },
        type: 'mobile',
        icon: 'mobile',
      },
      iphone14pro: {
        name: 'iPhone 14 Pro',
        styles: {
          width: '393px',
          height: '852px',
        },
        type: 'mobile',
        icon: 'mobile',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '600px',
          height: '1280px',
        },
        type: 'desktop',
        icon: 'browser',
      },
    },
  },
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

export const globalTypes = {
  colorScheme: {
    defaultValue: 'light',
  },
};

// Inject styles dynamically for live updates
export const decorators = [
  (Story, context) => {
    const colorScheme = context.globals.colorScheme || 'light';
    
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
    
    useEffect(() => {
      // Apply color scheme by adding/removing dark-mode class to all elements
      const root = document.documentElement;
      const body = document.body;
      const preview = document.getElementById('storybook-root');
      
      if (colorScheme === 'dark') {
        root.classList.add('dark-mode');
        body.classList.add('dark-mode');
        if (preview) preview.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        if (preview) preview.classList.remove('dark-mode');
      }
    }, [colorScheme]);
    
    return <Story />;
  }
];
