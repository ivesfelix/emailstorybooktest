import React from 'react';
import { getEmailStyles, getEmailClosingTags } from './emailStyles';

export const generateProductGridHTML = ({
  gridRows = 2,
  grid1Image = 'https://i.etsystatic.com/41404700/r/il/8973c7/6378159666/il_800x800.6378159666_arlq.jpg',
  grid2Image = 'https://i.etsystatic.com/48233775/r/il/ef5973/5572506107/il_1588xN.5572506107_iso1.jpg',
  grid3Image = 'https://i.etsystatic.com/36006032/r/il/e610b0/4007909708/il_1588xN.4007909708_6iw3.jpg',
  grid4Image = 'https://i.etsystatic.com/11714813/c/1792/1792/1/0/il/c3d85e/5278592463/il_765x1020.5278592463_sajq.jpg',
  grid5Image = 'https://i.etsystatic.com/41584081/r/il/786db7/6231448617/il_765x1020.6231448617_g5yh.jpg',
  grid6Image = 'https://i.etsystatic.com/5305552/r/il/91c562/4297655234/il_1588xN.4297655234_6b82.jpg',
  showGridMetadata = false,
  grid1Title = 'Product Title',
  grid1Price = '$25.00',
  grid2Title = 'Product Title',
  grid2Price = '$25.00',
  grid3Title = 'Product Title',
  grid3Price = '$25.00',
  grid4Title = 'Product Title',
  grid4Price = '$25.00',
  grid5Title = 'Product Title',
  grid5Price = '$25.00',
  grid6Title = 'Product Title',
  grid6Price = '$25.00',
}) => {
  return `${getEmailStyles()}
            
            <!-- Product Grid Section -->
    <tr>
        <td style="padding: 0 32px 24px 32px;" class="mobile-padding-grid">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <!-- Row 1 -->
                <tr>
                    <!-- Product 1 -->
                    <td width="50%" style="padding: 0 12px ${gridRows > 1 ? '24px' : '0'} 0;" class="grid-item-left">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid1Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid1Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid1Price}</p>
                        </div>
                        ` : ''}
                    </td>
                    <!-- Product 2 -->
                    <td width="50%" style="padding: 0 0 ${gridRows > 1 ? '24px' : '0'} 12px;" class="grid-item-right">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid2Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid2Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid2Price}</p>
                        </div>
                        ` : ''}
                    </td>
                </tr>
                ${gridRows >= 2 ? `
                <!-- Row 2 -->
                <tr>
                    <!-- Product 3 -->
                    <td width="50%" style="padding: 0 12px ${gridRows > 2 ? '24px' : '0'} 0;" class="grid-item-bottom-left">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid3Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid3Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid3Price}</p>
                        </div>
                        ` : ''}
                    </td>
                    <!-- Product 4 -->
                    <td width="50%" style="padding: 0 0 ${gridRows > 2 ? '24px' : '0'} 12px;" class="grid-item-bottom-right">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid4Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid4Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid4Price}</p>
                        </div>
                        ` : ''}
                    </td>
                </tr>
                ` : ''}
                ${gridRows >= 3 ? `
                <!-- Row 3 -->
                <tr>
                    <!-- Product 5 -->
                    <td width="50%" style="padding: 0 12px 0 0;" class="grid-item-bottom-left">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid5Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid5Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid5Price}</p>
                        </div>
                        ` : ''}
                    </td>
                    <!-- Product 6 -->
                    <td width="50%" style="padding: 0 0 0 12px;" class="grid-item-bottom-right">
                        <a href="#" style="text-decoration: none; display: block;">
                            <img src="${grid6Image}" alt="Product" style="border-radius: 8px; clear: both; display: block; width: 100%; height: auto; object-fit: cover; object-position: center; outline: none; text-decoration: none; border: 0; aspect-ratio: 1;" />
                        </a>
                        ${showGridMetadata ? `
                        <div style="padding-top: 8px;">
                            <p style="margin: 0 0 4px 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36; font-weight: 500;">${grid6Title}</p>
                            <p style="margin: 0; font-family: 'ABC Diatype', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.3; color: #312b36;">${grid6Price}</p>
                        </div>
                        ` : ''}
                    </td>
                </tr>
                ` : ''}
            </table>
        </td>
    </tr>
    
${getEmailClosingTags()}`;
};

export const ProductGrid = (props) => {
  const html = generateProductGridHTML(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ProductGrid;
