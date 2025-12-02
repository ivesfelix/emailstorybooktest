import React from 'react';

const variantStyles = {
  primary: {
    background: '#312B36',
    border: '1.5px solid #312B36',
    color: '#FAF8F5'
  },
  secondary: {
    background: '#FAF8F5',
    border: '1.5px solid #312B36',
    color: '#312B36'
  }
};

export const CTA = ({ 
  href = '#', 
  children = 'Button', 
  variant = 'primary'
}) => {
  const styles = variantStyles[variant] || variantStyles.primary;
  
  return (
    <a 
      href={href}
      style={{
        display: 'inline-block',
        padding: '10.5px 32px',
        borderRadius: '24px',
        background: styles.background,
        border: styles.border,
        color: styles.color,
        font: '700 18px "ABC Diatype"',
        lineHeight: '130%',
        textDecoration: 'none'
      }}
    >
      {children}
    </a>
  );
};

export const CTAHTML = (label = 'Button', href = '#', variant = 'primary') => {
  const styles = variantStyles[variant] || variantStyles.primary;
  
  return `<a href="${href}" style="display:inline-block;padding:10.5px 32px;border-radius:24px;background:${styles.background};border:${styles.border};color:${styles.color};font:700 18px \"ABC Diatype\";line-height:130%;text-decoration:none;">${label}</a>`;
};

export default CTA;
