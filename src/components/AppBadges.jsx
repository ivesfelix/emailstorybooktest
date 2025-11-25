import React from 'react';

export const AppBadges = ({ 
  headline = 'Download the Etsy app',
  appStoreHref = '#',
  appStoreSrc = 'https://via.placeholder.com/135x40?text=App+Store',
  googlePlayHref = '#',
  googlePlaySrc = 'https://via.placeholder.com/135x40?text=Google+Play'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '0 16px' }}>
      <tbody>
        <tr>
          <td style={{ direction: 'ltr', textAlign: 'left', fontSize: 0 }}>
            <table border="0" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', display: 'inline-block', maxWidth: '172px', verticalAlign: 'middle', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ direction: 'ltr', textAlign: 'left', paddingBottom: '10px', paddingTop: '4px' }}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%" align="left" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ direction: 'ltr', textAlign: 'left', color: '#332f2e', fontFamily: "'ABC Diatype','Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: '14px', fontWeight: 700, lineHeight: '130%', paddingBottom: '7px', paddingTop: '7px' }}>
                            {headline}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table border="0" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', display: 'inline-block', maxWidth: '308px', verticalAlign: 'middle', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ direction: 'ltr', textAlign: 'left' }}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%" align="left" style={{ borderCollapse: 'collapse', tableLayout: 'auto', width: '100%' }}>
                      <tbody>
                        <tr>
                          <td width="140" align="left" style={{ direction: 'ltr', textAlign: 'left' }}>
                            <a href={appStoreHref} style={{ textDecoration: 'none', border: 0 }}>
                              <img 
                                src={appStoreSrc} 
                                width="120" 
                                alt="Download on the App Store"
                                style={{ 
                                  border: 'none',
                                  clear: 'both',
                                  display: 'block',
                                  height: 'auto',
                                  maxWidth: '120px',
                                  outline: 'none',
                                  textDecoration: 'none',
                                  width: '100%'
                                }}
                              />
                            </a>
                          </td>
                          <td width="155" align="left" style={{ direction: 'ltr', textAlign: 'left' }}>
                            <a href={googlePlayHref} style={{ textDecoration: 'none', border: 0 }}>
                              <img 
                                src={googlePlaySrc} 
                                width="135" 
                                alt="Get it on Google Play"
                                style={{ 
                                  border: 'none',
                                  clear: 'both',
                                  display: 'block',
                                  height: 'auto',
                                  maxWidth: '135px',
                                  outline: 'none',
                                  textDecoration: 'none',
                                  width: '100%'
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const AppBadgesHTML = (headline = 'Download the Etsy app', appStoreHref = '#', appStoreSrc = '', googlePlayHref = '#', googlePlaySrc = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:0 16px;"><tr><td style="direction:ltr;text-align:left;font-size:0;"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;display:inline-block;max-width:172px;vertical-align:middle;width:100%;"><tr><td style="direction:ltr;text-align:left;padding-bottom:10px;padding-top:4px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border-collapse:collapse;table-layout:fixed;width:100%;"><tr><td style="direction:ltr;text-align:left;color:#332f2e;font-family:'ABC Diatype','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:130%;padding-bottom:7px;padding-top:7px;">${headline}</td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;display:inline-block;max-width:308px;vertical-align:middle;width:100%;"><tr><td style="direction:ltr;text-align:left;"><table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border-collapse:collapse;table-layout:auto;width:100%;"><tr><td width="140" align="left" style="direction:ltr;text-align:left;"><a href="${appStoreHref}" style="text-decoration:none;border:0;"><img src="${appStoreSrc}" width="120" alt="Download on the App Store" style="border:none;clear:both;display:block;height:auto;max-width:120px;outline:none;text-decoration:none;width:100%;"/></a></td><td width="155" align="left" style="direction:ltr;text-align:left;"><a href="${googlePlayHref}" style="text-decoration:none;border:0;"><img src="${googlePlaySrc}" width="135" alt="Get it on Google Play" style="border:none;clear:both;display:block;height:auto;max-width:135px;outline:none;text-decoration:none;width:100%;"/></a></td></tr></table></td></tr></table></td></tr></table>`;
};

export default AppBadges;
