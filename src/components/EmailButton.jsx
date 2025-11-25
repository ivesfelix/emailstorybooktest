import React from 'react';

const sizeStyles = {
  small: { padding: '8px 16px', fontSize: '14px' },
  medium: { padding: '12px 20px', fontSize: '16px' },
  large: { padding: '16px 32px', fontSize: '18px' }
};

const variantStyles = {
  primary: { 
    bgColor: '#1b82e2', 
    color: '#ffffff', 
    border: 'none' 
  },
  secondary: { 
    bgColor: '#6c757d', 
    color: '#ffffff', 
    border: 'none' 
  },
  text: { 
    bgColor: 'transparent', 
    color: '#1b82e2', 
    border: '1px solid #1b82e2' 
  }
};

export const EmailButton = ({ 
  href = '#', 
  children = 'Button', 
  size = 'medium',
  variant = 'primary'
}) => {
  const sizeStyle = sizeStyles[size] || sizeStyles.medium;
  const variantStyle = variantStyles[variant] || variantStyles.primary;
  
  const tdStyle = {
    borderRadius: '4px',
    backgroundColor: variantStyle.bgColor,
    ...(variantStyle.border !== 'none' ? { border: variantStyle.border } : {})
  };

  const aStyle = {
    display: 'inline-block',
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    color: variantStyle.color,
    textDecoration: 'none',
    fontWeight: 600
  };

  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td align="center" style={tdStyle}>
            <a href={href} style={aStyle}>
              {children}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailButtonHTML = (text = 'Button', href = '#', size = 'medium', variant = 'primary') => {
  const sizeStyle = sizeStyles[size] || sizeStyles.medium;
  const variantStyle = variantStyles[variant] || variantStyles.primary;
  
  const tdStyleStr = `border-radius:4px;background-color:${variantStyle.bgColor};${variantStyle.border !== 'none' ? `border:${variantStyle.border};` : ''}`;
  const aStyleStr = `display:inline-block;padding:${sizeStyle.padding};font-size:${sizeStyle.fontSize};color:${variantStyle.color};text-decoration:none;font-weight:600;`;
  
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td align="center" style="${tdStyleStr}"><a href="${href}" style="${aStyleStr}">${text}</a></td></tr></tbody></table>`;
};

export default EmailButton;
