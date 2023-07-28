import React, { useState, useContext } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { FormContext } from '../contexts/FormContext';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


export const GeneratePDF = async (data,name) => {
    const fillData = data;
    try {
        const html = `
        <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>NHẬT KÝ KHAI THÁC THỦY SẢN</title>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                text-indent: 0;
            }
    
            h1 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 10pt;
                vertical-align: 11pt;
            }
    
            .p,
            p {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s1 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s2 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s3 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: italic;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s4 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 9pt;
            }
    
            .s5 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s6 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: italic;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            li {
                display: block;
            }
    
            #l1 {
                padding-left: 0pt;
                counter-reset: c1 9;
            }
    
            #l1>li>*:first-child:before {
                counter-increment: c1;
                content: counter(c1, decimal)". ";
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            #l1>li:first-child>*:first-child:before {
                counter-increment: c1 0;
            }
    
            #l2 {
                padding-left: 0pt;
                counter-reset: c2 1;
            }
    
            #l2>li>*:first-child:before {
                counter-increment: c2;
                content: counter(c2, lower-latin)". ";
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 10pt;
            }
    
            #l2>li:first-child>*:first-child:before {
                counter-increment: c2 0;
            }
    
            li {
                display: block;
            }
    
            #l3 {
                padding-left: 0pt;
                counter-reset: d1 1;
            }
    
            #l3>li>*:first-child:before {
                counter-increment: d1;
                content: counter(d1, upper-roman)". ";
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 10pt;
            }
    
            #l3>li:first-child>*:first-child:before {
                counter-increment: d1 0;
            }
    
            table,
            tbody {
                vertical-align: top;
                overflow: visible;
            }
    
            /* Ngắt trang sau phần tử có class="new-page" */
            .new-page {
                page-break-after: always;
            }
    
            .s4 {
                text-align: center;
            }
    
            table {
                border-collapse: collapse;
                margin-left: 0;
            }
    
            table td {
                border: 1pt solid #2B3D4F;

                text-align: center;
            }
    
            .table-header {
                border: 1pt solid #2B3D4F;
                background-color: #D1D6DB;
                text-align: center;
                padding-top: 5pt;
                padding-bottom: 5pt;
                
            }
    
            border-table {
                border-top-style: solid;
                border-top-width: 1pt;
                border-top-color: #2B3D4F;
                border-left-style: solid;
                border-left-width: 1pt;
                border-left-color: #2B3D4F;
                border-bottom-style: solid;
                border-bottom-width: 1pt;
                border-bottom-color: #2B3D4F;
                border-right-style: solid;
                border-right-width: 1pt;
                border-right-color: #2B3D4F
            }
        </style>
    </head>
    
    <body>
        <h1 style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Số 21 /2018/TT-BNNPTNT<br>
            <span class="p" style="padding-left:30%; width: 100%;">
                MẪU NHẬT KÝ KHAI THÁC THỦY SẢN</span>
        </h1>
        <br/>
        <table class="new-page" style="border-collapse:collapse;height:100%; witdh:100%;"
            cellspacing="0">
            <tr style="height:100%; witdh:100%;">
                <td style="width:100%;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2">
                    <p class="s1"
                        style="padding-top: 4pt;width: 100%;text-indent: 0pt;line-height: 15pt;">
                        TỔNG CỤC THỦY SẢN
                    </p>
                    <p class="s1" style="width: 100%;text-indent: 0pt;line-height: 15pt;">
                        --------------------</p>
                    <p class="s1"
                        style="padding-top: 10pt; width: 100%;text-indent: -6pt;line-height: 152%;">
                        NHẬT KÝ KHAI THÁC THỦY SẢN <br><span class="s2">(NGHỀ CHÍNH:${data})</span></p>
                        <div class="s2" style="padding-top: 5pt;   flex-direction: column; text-align: start;">
                            <div style=" display: inline-block; width: 40%;">
                                1. Họ và tên chủ tàu: ${fillData.thongTinTau.ten_chutau};
                            </div>
                            <div style=" display: inline-block;width: 40%;">
                                2. Họ và tên thuyền trưởng: ${fillData.thongTinTau.ten_thuyentruong}
                            </div>
                        </div>
                        <div class="s2" style="padding-top: 5pt; flex-direction: column; text-align: start; text-indent: 0pt;">
                            <div style="display: inline-block;width: auto;">3. Số đăng ký tàu: ${fillData.thongTinTau.tau_bs};</div>
                            <div style="display: inline-block;width: auto;">4. Chiều dài lớn nhất của tàu: ${fillData.thongTinTau.tau_chieudailonnhat} m;</div>
                            <div style="display: inline-block;width: auto;">5. Tổng công suất máy chính: ${fillData.thongTinTau.tau_tongcongsuatmaychinh} CV</div>
                        </div>
                        <div class="s2" style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                            <div style=" display: inline-block; width: 40%;">
                                6. Số giấy phép khai thác thủy sản: ${fillData.thongTinTau.gpkt_so} ;
                            </div>
                            <div style=" display: inline-block;width: 40%;">
                                Thời hạn đến: ${fillData.thongTinTau.gpkt_thoihan}
                            </div>
                        </div>
                    
                        <div class="s2" style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                            <div style="display: inline-block;width: 40%;">7. Nghề phụ 1: ${fillData.thongTinTau.nghephu1};</div>
                            <div style="display: inline-block;width: 40%;">8. Nghề phụ 2: ${fillData.thongTinTau.nghephu2}</div>
                        </div>
                    <ol id="l1">
                        <li nhatKy-list-text="9.">
                            <p class="s2" style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                Kích thước chủ yếu của ngư cụ <i>(ghi cụ thể theo nghề chính):</i></p>
                            <ol id="l2">
                                <li nhatKy-list-text="a.">
                                    <div class="s2"
                                        style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                        <div style="display: inline-block;width: 45%;">Nghề câu: Chiều dài toàn bộ vàng câu: ${fillData.thongTinTau.ncau_chieudaivangcau} m;</div>
                                        <div style="display: inline-block;width: 45%;">Số lưỡi câu lưỡi: ${fillData.thongTinTau.ncau_soluoicau} lưỡi</div>
                                        
                                        
                                    </div>
                                </li>
                                <li nhatKy-list-text="b.">
                                    <div class="s2"
                                        style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                        <div style="display: inline-block;width: 45%;">Nghề lưới vây, rê: Chiều dài toàn bộ lưới: ${fillData.thongTinTau.nluoivay_chieudailuoi} m;</div>
                                        <div style="display: inline-block;width: 45%;">Chiều cao lưới: ${fillData.thongTinTau.nluoivay_chieucaoluoi} m</div>
                                         
                                        
                                    </div>
                                </li>
                                <li nhatKy-list-text="c.">
                                    <div class="s2"
                                        style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                        <div style="display: inline-block;width: 45%;">Nghề lưới chụp: Chu vi miệng lưới ${fillData.thongTinTau.nluoichup_chuvimiengluoi} m;</div>
                                        <div style="display: inline-block;width: 45%;">Chiều cao lưới: ${fillData.thongTinTau.nluoichup_chieucaoluoi} m</div>
                                         
                                        
                                    </div>
                                </li>
                                <li nhatKy-list-text="d.">
                                    <div class="s2"
                                        style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                        <div style="display: inline-block;width: 45%;">Nghề lưới kéo: Chiều dài giềng phao ${fillData.thongTinTau.nluoikeo_chieudaigiengphao} m;</div>
                                        <div style="display: inline-block;width: 45%;">Chiều cao lưới: ${fillData.thongTinTau.nluoikeo_chieudaitoanboluoi} m</div>
                                         
                                        
                                    </div>
                                </li>
                                <li nhatKy-list-text="e.">
                                    <p class="s2"
                                        style="padding-top: 5pt;text-indent: 0pt;   flex-direction: column; text-align: start;">
                                        Nghề khác: ${fillData.thongTinTau.nkhac}
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </td>
            </tr>
            <tr style="height:100%">
                <td
                    style="width:204pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                        Chuyến biển số: ${fillData.thongTinTau.chuyenbien_so} </p>
                    <p class="s3" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                        (Ghi chuyến biển số mấy trong năm)</p>
                </td>
                <td
                    style="width:536pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                        10: Cảng đi: ${fillData.thongTinTau.cang_di} ; Thời gian đi: Ngày ${ngayDi} tháng ${thangDi} năm ${namDi} </p>
                    <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                        11: Cảng về: ${fillData.thongTinTau.cang_ve} ; Thời gian cập: Ngày ${ngayVe} tháng ${thangVe} năm ${namVe} </p>
                    <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                        12: Nộp Nhật ký: Ngày ${ngayNop} tháng ${thangNop} năm ${namNop} Vào Sổ số: ${fillData.thongTinTau.vaoso_so}
                    </p>
                </td>
            </tr>
        </table>
        <ol id="l3">
            <li nhatKy-list-text="I.">
                <p style="padding-top: 7pt;padding-left: 34pt;text-indent: -11pt;text-align: left;">
                    THÔNG TIN VỀ HOẠT ĐỘNG KHAI THÁC THỦY SẢN</p>
                <p style="text-indent: 0pt;text-align: center;"></p>
                <div style="overflow-x:auto;">
                    <table cellspacing="0" >
                        <tr >
                            <td style="height:100%;"
                                class="border-table" rowspan="2" bgcolor="#D1D6DB">
                                <div class="s4" style="width: 100%;text-align: center;">
                                    Mẻ thứ
                                </div>
                            </td>
                            <td style="width: 30pt;align-items: center;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-align: center;text-indent: 0pt; padding:">
                                    Thời điểm thả (giờ, phút, ngày, tháng)</p>
                            </td>
                            <td style="width: 30pt;" class="border-table" colspan="2" bgcolor="#D1D6DB">
                                <p style="text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-align: center;text-indent: 0pt;">
                                    Vị trí thả
                                </p>
                            </td>
                            <td style="width: 30pt;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Thời điểm thu (giờ, phút, ngày, tháng)</p>
                            </td>
                            <td style="width: 30pt;" class="border-table" colspan="2" bgcolor="#D1D6DB">
                                <p style="text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Vị trí thu
                                </p>
                            </td>
                            <td style="width: 100%" class="border-table" colspan="9"
                                bgcolor="#D1D6DB">
                                <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Sản lượng các loài thủy sản chủ yếu (kg)</p>
                            </td>
                            <td style="width: 30pt;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                                <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Tổng sản lượng (kg)</p>
                            </td>
                        </tr>
                        <tr style="height:100%">
                            <td style="width: 30pt; align-item= center;" class="border-table" bgcolor="#D1D6DB">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100;text-indent: 0pt;text-align: center;">
                                    Vĩ độ
                                </p>
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Kinh độ
                                </p>
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Vĩ độ
                                </p>
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Kinh độ
                                </p>
                            </td>
                            
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_1} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_2} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_3} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_4} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_5} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_6} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_7} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_8} </p>
    
                            </td>
                            <td style="width: 30pt;" class="border-table" bgcolor="#D1D6DB">
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                                    Loài
                                </p>
                                <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${fillData.khaiThac.khaithac[0].loai_9} </p>
    
                            </td>
                            
    
                        </tr>
                        ${khaiThac.khaithac.map(line => `
                        <tr>
    
                            <td  class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center; padding: 2pt;">${line.methu}</p>
                            </td>
                            <td  class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.thoidiem_tha}</p>
                            </td>
                            <td  class="border-table" style="width: 25pt;">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.vido_tha}</p>
                            </td>
                            <td  class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.kinhdo_tha}</p>
                            </td>
                            <td  class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.thoidiem_thu}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.vido_thu}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.kinhdo_thu}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_1_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_2_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_3_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_4_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_5_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_6_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_7_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_8_kl}</p>
                            </td>
                            <td class="border-table">
                                <p style="width: 100%; text-indent: 0pt;text-align: center;padding: 2pt;">${line.loai_9_kl}</p>
                            </td>
    
                            <td class="border-table">
                                <p style="width: 30pt;text-align: center; text-indent: 0pt;">${line.tongsanluong}</p>
                            </td>
    
                        </tr>
                        `).join('')}
                        <tr style=" " class="border-table" bgcolor="#D1D6DB">
                            <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                                <p class="s4" style="width: 100%;text-align: center; center-indent: 0pt;">
                                    Tổng khối lượng
                                </p>
                            </td>
                            
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_1_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_2_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_3_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_4_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_5_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_6_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_7_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_8_kl}</p>
                            </td>
                            <td style="width: 25pt;" class="border-table">
                                <p style="width: 25pt; text-indent: 0pt;text-align: center;">${khaiThac.khaithac[0].loai_9_kl}</p>
                            </td>
                            <td style="width: 100%;" class="border-table">
                                <p style="width: 40pt; text-indent: 0pt;text-align: center;">${totalsanluong}</p>
                            </td>
                        </tr>
                    </table>
    
                    <p style="text-indent: 0pt;text-align: left;"></p>
                    <p style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Ghi chú:</p>
                    <p class="s5" style="padding-top: 7pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">
                        * Đối với nghề lưới kéo, ghi cụ thể tên loài thủy sản có thể xuất khẩu và các loài khác:
                    </p>
                    <p class="s6"
                        style="padding-top: 6pt;padding-left: 65%;text-indent: 0pt;text-align: center;font-size: 10pt;">
                        Ngày ...... tháng ....... năm .......
                    </p>
                    <p class="new-page"
                        style="padding-top: 7pt;padding-left: 60%;text-indent: 0pt;line-height: 113%;text-align: center;font-size: 10pt;">
                        Thuyền trưởng
                        <i>(ký, ghi rõ họ và tên)</i>
                    </p>
            </li>
            <li nhatKy-list-text="II.">
                <p style="padding-top: 7pt;padding-left: 39pt;text-indent: -16pt;text-align: left;">
                    THÔNG TIN VỀ HOẠT ĐỘNG CHUYỂN TẢI (nếu có)
                </p>
            </li>
        </ol>
        <p style="text-indent: 0pt;text-align: left;"></p>
        <table style="border-collapse:collapse;margin-left:6.09154pt;align-items: center;" cellspacing="0">
            <tr style="height:37pt">
                <td style="width:28pt;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                    <p style="text-indent: 0pt;text-align: left;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        TT
                    </p>
                </td>
                <td style="width:85pt;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                    <p style="text-indent: 0pt;text-align: left;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Ngày, tháng
                    </p>
                </td>
                <td style="width:142pt;" class="border-table" colspan="2" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: -5pt;">
                        Thông tin tàu thu mua/chuyển tải
                    </p>
                </td>
                <td style="width:170pt;" class="border-table" colspan="2" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Vị trí thu mua/chuyển tải</p>
                </td>
                <td style="width:224pt;" class="border-table" colspan="2" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Đã bán/chuyển tải</p>
                </td>
                <td style="width:113pt;" class="border-table" rowspan="2" bgcolor="#D1D6DB">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Thuyền trưởng tàu thu mua/chuyển tải (ký, ghi gõ họ tên)</p>
                </td>
            </tr>
            <tr>
                <td style="width:85pt;" class="border-table" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Số đăng ký tàu</p>
                </td>
                <td style="width:57pt;" class="border-table" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;text-align: center;">
                        Số giấy phép khai thác</p>
                </td>
                <td style="width:85pt;" class="border-table" bgcolor="#D1D6DB">
                    <p style="text-indent: 0pt;text-align: left;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Vĩ độ
                    </p>
                </td>
                <td style="width:85pt;" class="border-table" bgcolor="#D1D6DB">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Kinh độ
                    </p>
                </td>
                <td style="width:139pt;" class="border-table" bgcolor="#D1D6DB">
                    <p style="text-indent: 0pt;text-align: left;"></p>
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Tên loài thủy sản
                    </p>
                </td>
                <td style="width:85pt;" class="border-table" bgcolor="#D1D6DB">
                    <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                        Khối lượng (kg)</p>
                </td>
            </tr>
            ${thongTinChuyenTai.map(line => `
            <tr style="height:24pt">
                <td style="width:28pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.TT}</p>
                </td>
                <td style="width:85pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.ngayThang}</p>
                </td>
                <td style="width:85pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.soDKtau}</p>
                </td>
                <td style="width:57pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.soGiayPhep}</p>
                </td>
                <td style="width:85pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.viDo}</p>
                </td>
                <td style="width:85pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.kinhDo}</p>
                </td>
                <td style="width:139pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.tenLoaiThuySan}</p>
                </td>
                <td style="width:85pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.khoiLuong}</p>
                </td>
                <td style="width:113pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.thuyenTruong}</p>
                </td>
    
            </tr>
            `).join('')}
            <tr style="height: 25pt; " class="border-table" bgcolor="#D1D6DB">
                <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                    <p class="s4" style="text-indent: 0pt;">
                        Tổng sản lượng các loài thủy sản chủ yếu (kg)</p>
                </td>
                <td style="width:139pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                </td>
                <td style="width:139pt;" class="border-table">
                    <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                </td>
            </tr>
        </table>
        </div>
        <p class="s6" style="padding-top: 6pt;padding-left: 65%;text-indent: 0pt;text-align: center;font-size: 10pt;">
            Ngày ...... tháng ....... năm .......</p>
        <p
            style="padding-top: 7pt;padding-left: 60%;text-indent: 0pt;line-height: 113%;text-align: center;font-size: 10pt;">
            Thuyền trưởng <i>(ký, ghi rõ họ và tên)</i></p>
    </body>
    
    </html>

  `;
        const options = {
            html,
            fileName: `${name}`,
            directory: 'pdf',
        };
        const file = await RNHTMLtoPDF.convert(options);
        Alert.alert('Thành công', `PDF lưu tại ${file.filePath}`);
        console.log("231231231231:", file.filePath);
        // setIsLoading(false);
    } catch (error) {
        Alert.alert('Lỗi', error.message);
    }
};
