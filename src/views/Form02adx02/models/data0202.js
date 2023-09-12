const moment = require('moment');
// const currentDate = moment();
// const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');

const data0202Empty =  {
    dairyid: 2,
    dairy_name: "",
    sobiennhan: "",
    tencangca: "",
    diachi: "",
    tenchutauthuyentruong: "",
    biensotau: "",
    giayphepkhaithac: "",
    thoihan_gpkt: "",
    ngaybochang: moment().format('YYYY-MM-DD'),
    nguoithumua: "",
    hinhthucbansp: "",
    ngayky: "",
    ls0202ds: [
        {
            tenloai: "",
            khoiluong: null,
            isdelete: false
        }
    ],
    xacnhan: {
        ngaylap: moment().format('YYYY-MM-DD'),
        cangca: "",
        soxacnhannguyenlieukhaithac: "",
        lsxacnhan_: [
            {
                tenloai: "",
                klbocdoquacang: null,
                kldaxacnhan: null,
                klconlai: null,
                isdelete: false,
            }
        ],
    },
}


export default data0202Empty;
