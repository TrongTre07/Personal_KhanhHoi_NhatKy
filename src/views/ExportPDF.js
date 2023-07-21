import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


function GenaratePDF() {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1);
    const data =
    {
        id: 1,
        ngheChinh: "Câu cá",
        hoTenChuTau: "Nguyễn Văn A",
        hoTenThuyenTruong: "Nguyễn Văn B",
        soDKtau: "123456789",
        chieuDaiLonNhat: 10,
        congSuatMayChinh: 200,
        soGiayPhep: "ABC221",
        thoiHan: "20/12/2022",
        nghePhu1: "",
        nghePhu2: "",
        ngheCau: 5,
        soLuoiCau: 4,
        ngheLuoi: 20,
        chieuCaoLuoi: 30,
        ngheLuoiChup: 40,
        chieuCaoLuoiChup: 60,
        ngheLuoiKeo: 14,
        chieuCaoLuoiKeo: 22,
        ngheKhac: "",
        bienSo: "EDF2131",
        cangDi: "Cảng Trọng Trề",
        cangVe: "Cảng TrongLV",
        thoiGianDi: Date.now(),
        thoiGianVe: Date.now(),
        nhatKy: Date.now(),
        vaoSo: "123456789",
    };

    const generatePDF = async () => {
        setIsLoading(true);
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
            font-size: 13pt;
            vertical-align: 11pt;
        }

        .p,
        p {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 13pt;
            margin: 0pt;
        }

        .s1 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 13pt;
        }

        .s2 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 13pt;
        }

        .s3 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 13pt;
        }

        .s4 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 12pt;
        }

        .s5 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 13pt;
        }

        .s6 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 13pt;
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
            font-size: 13pt;
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
            font-size: 13pt;
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
            font-size: 13pt;
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
        
    </style>
</head>
<body>
    <h1 style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Số 21 /2018/TT-BNNPTNT<br><span
            class="p">&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;MẪU NHẬT KÝ KHAI
            THÁC THỦY SẢN</span></h1>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table class="new-page" style="border-collapse:collapse;margin-left:17.1151pt" cellspacing="0">
        <tr style="height:334pt">
            <td style="width:740pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                colspan="2">
                <p class="s1"
                    style="padding-top: 4pt;padding-left: 228pt;text-indent: 0pt;line-height: 15pt;">
                    TỔNG CỤC THỦY SẢN</p>
                <p class="s1"
                    style="padding-left: 268pt;text-indent: 0pt;line-height: 15pt;">
                    --------------------</p>
                <p class="s1"
                    style="padding-top: 10pt;padding-left: 208pt;text-indent: -6pt;line-height: 152%;">
                    NHẬT KÝ KHAI THÁC THỦY SẢN <br><span class="s2">&emsp;&emsp;&emsp;(NGHỀ CHÍNH:${data.ngheChinh})</span></p>
                <p class="s2" style="padding-top: 11pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">1. Họ và
                    tên chủ tàu: ${data.hoTenChuTau};
                    2. Họ và tên thuyền trưởng: ${data.hoTenThuyenTruong} </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">3. Số đăng
                    ký tàu: ${data.soDKtau} ;4. Chiều dài lớn nhất của tàu: ${data.chieuDaiLonNhat} m; </p>
                    <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    5. Tổng công suất máy
                    chính; ${data.congSuatMayChinh} CV </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">6. Số giấy
                    phép khai thác thủy sản: ${data.soGiayPhep} ; Thời hạn đến:
                    ${data.thoiHan} </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">7. Nghề phụ
                    1: ${data.nghePhu1} ; 8. Nghề
                    phụ 2: ${data.nghePhu1} </p>
                <ol id="l1">
                    <li data-list-text="9.">
                        <p class="s2" style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                            Kích thước chủ yếu của ngư cụ <i>(ghi cụ thể theo nghề chính):</i></p>
                        <ol id="l2">
                            <li data-list-text="a.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề câu: Chiều dài toàn bộ vàng câu:
                                    ${data.ngheCau} m; Số lưỡi câu lưỡi: ${data.soLuoiCau} lưỡi
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                    Nghề lưới vây, rê: Chiều dài toàn bộ lưới:
                                    ${data.ngheLuoi} m; Chiều cao lưới: ${data.chieuCaoLuoi} m</p>
                            </li>
                            <li data-list-text="c.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề lưới chụp: Chu vi miệng lưới
                                    ${data.ngheLuoiChup} m; Chiều cao lưới: ${data.chieuCaoLuoiChup} m
                                </p>
                            </li>
                            <li data-list-text="d.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                    Nghề lưới kéo: Chiều dài giềng phao
                                    ${data.ngheLuoiKeo} m; Chiều cao lưới: ${data.chieuCaoLuoiKeo} m</p>
                            </li>
                            <li data-list-text="e.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề khác:
                                    ${data.ngheKhac}
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
            </td>
        </tr>
        <tr style="height:73pt">
            <td
                style="width:204pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s1" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Chuyến biển
                    số: ${data.bienSo} </p>
                <p class="s3" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">(Ghi chuyến
                    biển số mấy trong năm)</p>
            </td>
            <td
                style="width:536pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s2" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">10: Cảng đi:
                ${data.cangDi} ; Thời gian đi: Ngày ....... tháng
                    ....... năm ............</p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">11: Cảng về:
                ${data.cangVe} ; Thời gian cập: Ngày ....... tháng
                    ....... năm ............</p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">12: Nộp Nhật
                    ký: Ngày ....... tháng ....... năm ............;Vào Sổ số:...........................</p>
            </td>
        </tr>
    </table>
    <ol id="l3">
        <li data-list-text="I.">
            <p style="padding-top: 7pt;padding-left: 34pt;text-indent: -11pt;text-align: left;">THÔNG TIN VỀ HOẠT ĐỘNG
                KHAI THÁC THỦY SẢN</p>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <table style="border-collapse:collapse;margin-left:6.09154pt" cellspacing="0">
                <tr style="height:46pt">
                    <td style="width:28pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4"
                            style="padding-top: 12pt;padding-left: 5pt;padding-right: 4pt;text-indent: 0pt;text-align: left;">
                            Mẻ thứ</p>
                    </td>
                    <td style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p class="s4"
                            style="padding-top: 3pt;padding-left: 5pt;padding-right: 5pt;text-indent: 0pt;text-align: center;">
                            Thời điểm thả (giờ, phút, ngày, tháng)</p>
                    </td>
                    <td style="width:99pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        colspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 25pt;text-indent: 0pt;text-align: left;">Vị trí thả</p>
                    </td>
                    <td style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p class="s4"
                            style="padding-top: 3pt;padding-left: 5pt;padding-right: 4pt;text-indent: 0pt;text-align: center;">
                            Thời điểm thu (giờ, phút, ngày, tháng)</p>
                    </td>
                    <td style="width:99pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        colspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 25pt;text-indent: 0pt;text-align: left;">Vị trí thu</p>
                    </td>
                    <td style="width:383pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        colspan="9" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4"
                            style="padding-left: 86pt;padding-right: 86pt;text-indent: 0pt;text-align: center;">Sản
                            lượng các loài thủy sản chủ yếu (kg)</p>
                    </td>
                    <td style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 4pt;padding-right: 4pt;text-indent: 0pt;text-align: center;">
                            Tổng sản lượng (kg)</p>
                    </td>
                </tr>
                <tr style="height:46pt">
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Vĩ độ</p>
                    </td>
                    <td style="width:56pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Kinh độ</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Vĩ độ</p>
                    </td>
                    <td style="width:56pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s4" style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Kinh độ</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 9pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 9pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 9pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                    <td style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="padding-top: 8pt;padding-left: 9pt;text-indent: 0pt;text-align: left;">Loài
                        </p>
                        <p class="s4" style="padding-left: 8pt;text-indent: 0pt;text-align: left;">........</p>
                    </td>
                </tr>
                <tr style="height:21pt">
                    <td
                        style="width:28pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:56pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:56pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                </tr>
                <tr style="height: 25pt; border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                    bgcolor="#D1D6DB">
                    <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                        <p class="s4" style="text-indent: 0pt;">Tổng khối lượng</p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:43pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:42pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                    <td
                        style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                </tr>
            </table>

            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <p style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Ghi chú:</p>
            <p class="s5" style="padding-top: 7pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">* Đối với nghề
                lưới kéo, ghi cụ thể tên loài thủy sản có thể xuất khẩu và các loài khác:</p>
            <p class="s6" style="padding-top: 6pt;padding-left: 21pt;text-indent: 0pt;text-align: center;">Ngày ......
                tháng ....... năm .......</p>
            <p class="new-page" style="padding-top: 7pt;padding-left: 50pt;text-indent: 0pt;line-height: 113%;text-align: center;">Thuyền
                trưởng <i>(ký, ghi rõ họ và tên</i></p>
        </li>
        <li data-list-text="II.">
            <p style="padding-top: 7pt;padding-left: 39pt;text-indent: -16pt;text-align: left;">THÔNG TIN VỀ HOẠT ĐỘNG
                CHUYỂN TẢI (nếu có)</p>
        </li>
    </ol>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table style="border-collapse:collapse;margin-left:6.09154pt" cellspacing="0">
        <tr style="height:37pt">
            <td style="width:28pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 6pt;text-indent: 0pt;text-align: left;">TT</p>
            </td>
            <td style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 11pt;text-indent: 0pt;text-align: left;">Ngày, tháng</p>
            </td>
            <td style="width:142pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="padding-top: 3pt;padding-left: 31pt;text-indent: -5pt;text-align: left;">Thông tin
                    tàu thu mua/chuyển tải</p>
            </td>
            <td style="width:170pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="padding-top: 10pt;padding-left: 19pt;text-indent: 0pt;text-align: left;">Vị trí thu
                    mua/chuyển tải</p>
            </td>
            <td style="width:224pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="padding-top: 10pt;padding-left: 64pt;text-indent: 0pt;text-align: left;">Đã
                    bán/chuyển tải</p>
            </td>
            <td style="width:113pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 6pt;padding-right: 6pt;text-indent: 0pt;text-align: justify;">Thuyền
                    trưởng tàu thu mua/chuyển tải (ký, ghi gõ họ tên)</p>
            </td>
        </tr>
        <tr style="height:51pt">
            <td style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="padding-top: 10pt;padding-left: 34pt;padding-right: 12pt;text-indent: -20pt;text-align: left;">
                    Số đăng ký tàu</p>
            </td>
            <td style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="padding-top: 3pt;padding-left: 4pt;padding-right: 4pt;text-indent: 0pt;text-align: center;">
                    Số giấy phép khai thác</p>
            </td>
            <td style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 28pt;text-indent: 0pt;text-align: left;">Vĩ độ</p>
            </td>
            <td style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 21pt;text-indent: 0pt;text-align: left;">Kinh độ</p>
            </td>
            <td style="width:139pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                <p class="s4" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">Tên loài thủy sản</p>
            </td>
            <td style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="padding-top: 10pt;padding-left: 32pt;padding-right: 12pt;text-indent: -18pt;text-align: left;">
                    Khối lượng (kg)</p>
            </td>
        </tr>
        <tr style="height:24pt">
            <td
                style="width:28pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:139pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:85pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:113pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            
        </tr>

        <tr style="height: 25pt; border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F"
                    bgcolor="#D1D6DB">
            <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                <p class="s4" style="text-indent: 0pt;">Tổng sản lượng các loài thủy sản chủ yếu (kg)</p>
            </td>
            <td
                style="width:139pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:139pt;border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>   
        </tr>
    </table>
    <p class="s6" style="padding-top: 6pt;padding-left: 21pt;text-indent: 0pt;text-align: center;">Ngày ......
        tháng ....... năm .......</p>
    <p style="padding-top: 7pt;padding-left: 50pt;text-indent: 0pt;line-height: 113%;text-align: center;">Thuyền
        trưởng <i>(ký, ghi rõ họ và tên</i></p>
</body>

</html>

      `;

            //   RNFetchBlob.fs.mkdir(
            //     RNFetchBlob.fs.dirs.DownloadDir,
            //   )
            //     .then(() => {
            //       console.log('Đã tạo thư mục tải xuống');
            //     })
            //     .catch((error) => {
            //       console.log('Lỗi khi tạo thư mục tải xuống:', error);
            //     });

            //   // Bây giờ, bạn có thể sử dụng DownloadDir để truy cập vào thư mục lưu trữ bên ngoài
            //   const fileName = `${RNFetchBlob.fs.dirs.DownloadDir}/example.pdf`;
            //   console.log('Đường dẫn tệp:', fileName);

            //   console.log(fileName);
            const options = {
                html,
                fileName: `invoice_${count}`,
                directory: 'Downloader',
            };
            const file = await RNHTMLtoPDF.convert(options);
            Alert.alert('Success', `PDF saved to ${file.filePath}`);
            setCount(count + 1);
            setIsLoading(false);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    if (isLoading) {
        return <Text>Generating PDF...</Text>;
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => generatePDF()}>
                <Text style={styles.text}>Generate PDF</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aac',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    button: {
        backgroundColor: '#6c8ee3',
        padding: 15,
        borderRadius: 10,
        margin: 20,
    },
});

export default GenaratePDF;