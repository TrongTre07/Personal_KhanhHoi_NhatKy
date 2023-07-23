import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


function GenaratePDF() {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1);
    const array = [
        {
            id: 1,
            meThu: 1,
            thoiGianTha: "20/12/2022",
            kinhDoTha: 100000000,
            viDoTha: 20000000000,
            thoigianThu: "20/12/2022",
            kinhDoThu: 10,
            viDoThu: 20,
            Loai: [
                {
                    id: 1,
                    name: "Cá",
                    soLuong: 190,
                },
                {
                    id: 2,
                    name: "Mực",
                    soLuong: 130,
                },
                {
                    id: 3,
                    name: "Tôm",
                    soLuong: 220,
                },
                {
                    id: 4,
                    name: "Cám",
                    soLuong: 40,
                },
            ],
            tong: 580,
        },
        {
            id: 2,
            meThu: 2,
            thoiGianTha: "20/12/2022",
            kinhDoTha: 10,
            viDoTha: 20,
            thoigianThu: "20/12/2022",
            kinhDoThu: 10,
            viDoThu: 20,
            Loai: [
                {
                    id: 1,
                    name: "Cá",
                    soLuong: 190,
                },
                {
                    id: 2,
                    name: "Mực",
                    soLuong: 130,
                },
                {
                    id: 3,
                    name: "Tôm",
                    soLuong: 220,
                },
                {
                    id: 4,
                    name: "Cám",
                    soLuong: 40,
                },
            ],
            tong: 580,
        },
        {
            id: 3,
            meThu: 3,
            thoiGianTha: "20/12/2022",
            kinhDoTha: 10,
            viDoTha: 20,
            thoigianThu: "20/12/2022",
            kinhDoThu: 10,
            viDoThu: 20,
            Loai: [
                {
                    id: 1,
                    name: "Cá",
                    soLuong: 190,
                },
                {
                    id: 2,
                    name: "Mực",
                    soLuong: 130,
                },
                {
                    id: 3,
                    name: "Tôm",
                    soLuong: 220,
                },
                {
                    id: 4,
                    name: "Cám",
                    soLuong: 40,
                },
            ],
            tong: 580,
        },
    ]
    const nameLoai = array.map(item => item.Loai.map(name => name.name))
    const name = nameLoai[0];
    console.log("name", name)
    const tongsanluong = array.map(item => item.tong);
    console.log("tongsanluong", tongsanluong)
    const totalsanluong= tongsanluong.reduce((a, b) => a + b, 0);
    console.log("totalsanluong", totalsanluong)
    const tongLoai = array.map(item => item.Loai.map(name => name.soLuong))
    console.log("tongLoai", tongLoai)

    // Initialize an empty object to store the total quantity for each Loai
    const totalQuantityByLoai = [];

    // Calculate the total quantity for each Loai
    for (let i = 0; i < name.length; i++) {
        const loaiName = name[i];
        const totalQuantity = tongLoai.reduce((sum, quantities) => sum + quantities[i], 0);
        totalQuantityByLoai.push({ name: loaiName, tongLoai: totalQuantity });
    }

    console.log("Total Quantity by Loai:", totalQuantityByLoai);

    const tongKhoiLuong = array.map(item => item.tong)
    console.log("tongKhoiLuong", tongKhoiLuong)
    const nhatKy =
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
        nghePhu1: "Dò lưới",
        nghePhu2: "Không có",
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
    const thongTinChuyenTai = [
        {
            TT: 1,
            ngayThang: "20/12/2022",
            soDKtau: "123456789",
            soGiayPhep: "ABC221",
            viDo: 10,
            kinhDo: 20,
            tenLoaiThuySan: "Cá",
            khoiLuong: 100,
            thuyenTruong: "Nguyễn Văn B",
        },
        {
            TT: 1,
            ngayThang: "20/12/2022",
            soDKtau: "123456789",
            soGiayPhep: "ABC221",
            viDo: 10,
            kinhDo: 20,
            tenLoaiThuySan: "Cá",
            khoiLuong: 100,
            thuyenTruong: "Nguyễn Văn B",
        },
        {
            TT: 1,
            ngayThang: "20/12/2022",
            soDKtau: "123456789",
            soGiayPhep: "ABC221",
            viDo: 10,
            kinhDo: 20,
            tenLoaiThuySan: "Cá",
            khoiLuong: 100,
            thuyenTruong: "Nguyễn Văn B",
        },

    ]


    console.log("thongTinChuyenTai", thongTinChuyenTai)
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
            margin-left: 6.09154pt;
        }
    
        table td {
            border: 1pt solid #2B3D4F;
            padding: 6pt;
            text-align: center;
        }
    
        .table-header {
            width: 383pt;
            border: 1pt solid #2B3D4F;
            background-color: #D1D6DB;
            text-align: center;
        }
        border-table {
            border-top-style:solid;border-top-width:1pt;border-top-color:#2B3D4F;border-left-style:solid;border-left-width:1pt;border-left-color:#2B3D4F;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#2B3D4F;border-right-style:solid;border-right-width:1pt;border-right-color:#2B3D4F
        }
        
    </style>
</head>
<body>
    <h1 style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Số 21 /2018/TT-BNNPTNT<br>
    <span
            class="p" style = "padding-left:152pt;">
            MẪU NHẬT KÝ KHAI THÁC THỦY SẢN</span>
    </h1>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table class="new-page" style="border-collapse:collapse;margin-left:17.1151pt;height:100%; witdh:100%;" cellspacing="0">
        <tr style="height:100%; witdh:100%;">
            <td style="width:100%;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                colspan="2">
                <p class="s1"
                    style="padding-top: 4pt;width: 100%;text-align: center;text-indent: 0pt;line-height: 15pt;">
                    TỔNG CỤC THỦY SẢN
                </p>
                <p class="s1"
                    style="width: 100%;text-align: center;text-indent: 0pt;line-height: 15pt;">
                    --------------------</p>
                <p class="s1"
                    style="padding-top: 10pt; width: 100%;text-align: center;text-indent: -6pt;line-height: 152%;">
                    NHẬT KÝ KHAI THÁC THỦY SẢN <br><span class="s2">(NGHỀ CHÍNH:${nhatKy.ngheChinh})</span></p>
                <p class="s2" style="padding-top: 11pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    1. Họ và tên chủ tàu: ${nhatKy.hoTenChuTau};
                    2. Họ và tên thuyền trưởng: ${nhatKy.hoTenThuyenTruong} </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    3. Số đăng ký tàu: ${nhatKy.soDKtau} ;
                    4. Chiều dài lớn nhất của tàu: ${nhatKy.chieuDaiLonNhat} m;
                    5. Tổng công suất máy chính; ${nhatKy.congSuatMayChinh} CV </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    6. Số giấy phép khai thác thủy sản: ${nhatKy.soGiayPhep} ; Thời hạn đến:
                    ${nhatKy.thoiHan} </p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    7. Nghề phụ 1: ${nhatKy.nghePhu1} ; 8. Nghề phụ 2: ${nhatKy.nghePhu1} </p>
                <ol id="l1">
                    <li nhatKy-list-text="9.">
                        <p class="s2" style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                            Kích thước chủ yếu của ngư cụ <i>(ghi cụ thể theo nghề chính):</i></p>
                        <ol id="l2">
                            <li nhatKy-list-text="a.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề câu: Chiều dài toàn bộ vàng câu:
                                    ${nhatKy.ngheCau} m; Số lưỡi câu lưỡi: ${nhatKy.soLuoiCau} lưỡi
                                </p>
                            </li>
                            <li nhatKy-list-text="b.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                    Nghề lưới vây, rê: Chiều dài toàn bộ lưới:
                                    ${nhatKy.ngheLuoi} m; Chiều cao lưới: ${nhatKy.chieuCaoLuoi} m</p>
                            </li>
                            <li nhatKy-list-text="c.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề lưới chụp: Chu vi miệng lưới
                                    ${nhatKy.ngheLuoiChup} m; Chiều cao lưới: ${nhatKy.chieuCaoLuoiChup} m
                                </p>
                            </li>
                            <li nhatKy-list-text="d.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                    Nghề lưới kéo: Chiều dài giềng phao
                                    ${nhatKy.ngheLuoiKeo} m; Chiều cao lưới: ${nhatKy.chieuCaoLuoiKeo} m</p>
                            </li>
                            <li nhatKy-list-text="e.">
                                <p class="s2"
                                    style="padding-top: 7pt;padding-left: 17pt;text-indent: -12pt;text-align: left;">
                                    Nghề khác:
                                    ${nhatKy.ngheKhac}
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
                    Chuyến biển số: ${nhatKy.bienSo} </p>
                <p class="s3" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    (Ghi chuyến biển số mấy trong năm)</p>
            </td>
            <td
                style="width:536pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s2" style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    10: Cảng đi: ${nhatKy.cangDi} ; Thời gian đi: Ngày ....... tháng ....... năm ............</p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                11: Cảng về: ${nhatKy.cangVe} ; Thời gian cập: Ngày ....... tháng ....... năm ............</p>
                <p class="s2" style="padding-top: 7pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                12: Nộp Nhật ký: Ngày ....... tháng ....... năm ............;Vào Sổ số:...........................</p>
            </td>
        </tr>
    </table>
    <ol id="l3">
        <li nhatKy-list-text="I.">
            <p style="padding-top: 7pt;padding-left: 34pt;text-indent: -11pt;text-align: left;">
                THÔNG TIN VỀ HOẠT ĐỘNG KHAI THÁC THỦY SẢN</p>
            <p style="text-indent: 0pt;text-align: center;"></p>
            <div style="overflow-x:auto;"> 
            <table  cellspacing="0">
                <tr style="height:100%; align-items: center;">
                    <td style="width: 100%;height:100%; align-items: center;justify-content: center;"class="border-table"
                        rowspan="2" bgcolor="#D1D6DB">
                        <div class="s4"
                            style="width: 100%; text-indent: 0pt;text-align: center;">
                            Mẻ thứ
                        </div>
                    </td>
                    <td style="width: 100%;align-items: center;"class="border-table"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p class="s4"
                            style="width: 100%;text-align: center;text-indent: 0pt">
                            Thời điểm thả (giờ, phút, ngày, tháng)</p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        colspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-align: center;text-indent: 0pt;">
                            Vị trí thả
                        </p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p class="s4"
                            style="width: 100%;text-indent: 0pt;text-align: center;">
                            Thời điểm thu (giờ, phút, ngày, tháng)</p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        colspan="2" bgcolor="#D1D6DB">
                        <p style="text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Vị trí thu
                        </p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        colspan="${nameLoai.length + 1}" bgcolor="#D1D6DB">
                        <p style="width: 100%;text-indent: 0pt;text-align: cenet;"></p>
                        <p class="s4"
                            style="width: 100%;text-indent: 0pt;text-align: center;">
                                Sản lượng các loài thủy sản chủ yếu (kg)</p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        rowspan="2" bgcolor="#D1D6DB">
                        <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Tổng sản lượng (kg)</p>
                    </td>
                </tr>
                <tr style="height:100%">
                    <td style="width: 100%;"class="border-table"
                        bgcolor="#D1D6DB">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Vĩ độ
                        </p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        bgcolor="#D1D6DB">
                        <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Kinh độ
                        </p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        bgcolor="#D1D6DB">
                        <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Vĩ độ
                        </p>
                    </td>
                    <td style="width: 100%;"class="border-table"
                        bgcolor="#D1D6DB">
                        <p style="width: 100%;text-indent: 0pt;text-align: center;"></p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Kinh độ
                        </p>
                    </td>
                    ${totalQuantityByLoai.map(item => `
                    <td style="width: 100%;"class="border-table"
                        bgcolor="#D1D6DB">
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;">
                            Loài
                        </p>
                        <p class="s4" style="width: 100%;text-indent: 0pt;text-align: center;"> ${item.name} </p>
                        
                    </td>
                    `).join('')}
                   
                </tr>
                ${array.map(line => `
                <tr style="height:100%">
                    
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.meThu}</p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.thoiGianTha} </p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.viDoTha}</p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.kinhDoTha}</p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.thoigianThu}</p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.viDoThu}</p>
                    </td>
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.kinhDoThu}</p>
                    </td>                
                    ${line.Loai.map(loai => `
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${loai.soLuong}</p>
                    </td>
                    `).join('')}

                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.tong}</p>
                    </td>
                    
                </tr>
                `).join('')}
                <tr style=" "class="border-table"
                    bgcolor="#D1D6DB">
                    <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                        <p class="s4" style="width: 100%;text-align: center; center-indent: 0pt;">
                            Tổng khối lượng
                        </p>
                    </td>
                    ${totalQuantityByLoai.map(line => `
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${line.tongLoai}</p>
                    </td>
                    `).join('')}
                    <td
                        style="width: 100%;"class="border-table">
                        <p style="width: 100%; text-indent: 0pt;text-align: center;">${totalsanluong}</p>
                    </td>
                </tr>
            </table>

            <p style="text-indent: 0pt;text-align: left;"></p>
            <p style="padding-top: 6pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">Ghi chú:</p>
            <p class="s5" style="padding-top: 7pt;padding-left: 22pt;text-indent: 0pt;text-align: left;">
                * Đối với nghề lưới kéo, ghi cụ thể tên loài thủy sản có thể xuất khẩu và các loài khác:
            </p>
            <p class="s6" style="padding-top: 6pt;padding-left: 65%;text-indent: 0pt;text-align: center;font-size: 10pt;">
                Ngày ...... tháng ....... năm .......
            </p>
            <p class="new-page" style="padding-top: 7pt;padding-left: 60%;text-indent: 0pt;line-height: 113%;text-align: center;font-size: 10pt;">
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
            <td style="width:28pt;"class="border-table"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    TT
                </p>
            </td>
            <td style="width:85pt;"class="border-table"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    Ngày, tháng
                </p>
            </td>
            <td style="width:142pt;"class="border-table"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="width: 100%;text-align: center; text-indent: -5pt;">
                    Thông tin tàu thu mua/chuyển tải
                </p>
            </td>
            <td style="width:170pt;"class="border-table"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                Vị trí thu mua/chuyển tải</p>
            </td>
            <td style="width:224pt;"class="border-table"
                colspan="2" bgcolor="#D1D6DB">
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    Đã bán/chuyển tải</p>
            </td>
            <td style="width:113pt;"class="border-table"
                rowspan="2" bgcolor="#D1D6DB">
                <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    Thuyền trưởng tàu thu mua/chuyển tải (ký, ghi gõ họ tên)</p>
            </td>
        </tr>
        <tr >
            <td style="width:85pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="width: 100%;text-align: center; text-indent: 0pt;">
                    Số đăng ký tàu</p>
            </td>
            <td style="width:57pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="width: 100%;text-align: center; text-indent: 0pt;text-align: center;">
                    Số giấy phép khai thác</p>
            </td>
            <td style="width:85pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    Vĩ độ
                </p>
            </td>
            <td style="width:85pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                    Kinh độ
                </p>
            </td>
            <td style="width:139pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p style="text-indent: 0pt;text-align: left;"></p>
                <p class="s4" style="width: 100%;text-align: center; text-indent: 0pt;">
                Tên loài thủy sản
                </p>
            </td>
            <td style="width:85pt;"class="border-table"
                bgcolor="#D1D6DB">
                <p class="s4"
                    style="width: 100%;text-align: center; text-indent: 0pt;">
                    Khối lượng (kg)</p>
            </td>
        </tr>
        ${thongTinChuyenTai.map(line => `
        <tr style="height:24pt">
            <td
                style="width:28pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.TT}</p>
            </td>
            <td
                style="width:85pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.ngayThang}</p>
            </td>
            <td
                style="width:85pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.soDKtau}</p>
            </td>
            <td
                style="width:57pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.soGiayPhep}</p>
            </td>
            <td
                style="width:85pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.viDo}</p>
            </td>
            <td
                style="width:85pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.kinhDo}</p>
            </td>
            <td
                style="width:139pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.tenLoaiThuySan}</p>
            </td>
            <td
                style="width:85pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.khoiLuong}</p>
            </td>
            <td
                style="width:113pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;">${line.thuyenTruong}</p>
            </td>
            
        </tr>
        `).join('')}
        <tr style="height: 25pt; "class="border-table"
                    bgcolor="#D1D6DB">
            <td colspan="7" bgcolor="#D1D6DB" style="text-align: center;">
                <p class="s4" style="text-indent: 0pt;">
                Tổng sản lượng các loài thủy sản chủ yếu (kg)</p>
            </td>
            <td
                style="width:139pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
            </td>
            <td
                style="width:139pt;"class="border-table">
                <p style="width: 100%;text-align: center; text-indent: 0pt;"></p>
            </td>   
        </tr>
    </table>
    </div>
    <p class="s6" style="padding-top: 6pt;padding-left: 65%;text-indent: 0pt;text-align: center;font-size: 10pt;">
        Ngày ...... tháng ....... năm .......</p>
    <p style="padding-top: 7pt;padding-left: 60%;text-indent: 0pt;line-height: 113%;text-align: center;font-size: 10pt;">
        Thuyền trưởng <i>(ký, ghi rõ họ và tên)</i></p>
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