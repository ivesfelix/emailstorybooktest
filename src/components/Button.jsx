import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

export const generateButtonHTML = ({
  buttonText = 'Click here',
  buttonHref = '#',
  buttonType = 'secondary', // 'primary' or 'secondary'
  alignment = 'left', // 'left' or 'center'
}) => {
  const isPrimary = buttonType === 'primary';
  const buttonClass = isPrimary ? 'primary-button' : 'secondary-button';
  const bgColor = isPrimary ? '#312b36' : 'transparent';
  const textColor = isPrimary ? '#faf8f5' : '#312b36';
  const borderStyle = isPrimary ? '#312b36' : '#312b36';
  const msoFillColor = isPrimary ? '#312b36' : 'transparent';
  const msoStroke = isPrimary ? 'f' : 't';
  
  return `${getEmailStyles()}
            
            <!-- ${isPrimary ? 'Primary' : 'Secondary'} Button -->
            <tr>
                <td style="padding: 0 32px 40px 32px; text-align: ${alignment};" class="mobile-padding-button">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="${alignment}">
                        <tr>
                            <td align="${alignment}" style="padding: 0;">
                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${buttonHref}" style="height:48px;v-text-anchor:middle;width:150px;" arcsize="56%" stroke="${msoStroke}" strokecolor="${borderStyle}" strokeweight="1.5px" fillcolor="${msoFillColor}">
                                    <w:anchorlock/>
                                    <center style="color:${textColor};font-family:'ABC Diatype', sans-serif;font-size:18px;font-weight:700;line-height:130%;">${buttonText}</center>
                                </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-->
                                <a href="${buttonHref}" class="${buttonClass}" style="background-color: ${bgColor}; border: 1.5px solid ${borderStyle}; border-radius: 24px; color: ${textColor}; display: inline-block; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; line-height: 130%; text-align: center; text-decoration: none; padding: 10.5px 32px; -webkit-text-size-adjust: none; mso-hide: all;">${buttonText}</a>
                                <!--<![endif]-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    
${getEmailClosingTags()}`;
};

export const Button = (props) => {
  const html = generateButtonHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Button;
