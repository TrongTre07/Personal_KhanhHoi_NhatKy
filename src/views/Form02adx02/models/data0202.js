import makeid from '../../others/makeid';

const moment = require('moment');
// const currentDate = moment();
// const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');
const data0202Empty = () => {
  return {
    dairy_name: '',
    sobiennhan: '',
    tencangca: '',
    diachi: '',
    tenchutauthuyentruong: '',
    biensotau: '',
    giayphepkhaithac: '',
    thoihan_gpkt: moment().format('YYYY-MM-DD'),
    ngaybochang: moment().format('YYYY-MM-DD'),
    nguoithumua: '',
    hinhthucbansp: '',
    // ngayky: '',
    ls0202ds: [
      {
        id: makeid(7),
        tenloai: '',
        khoiluong: 0,
      },
      {
        id: makeid(7),
        tenloai: '',
        khoiluong: 0,
      },
      {
        id: makeid(7),
        tenloai: '',
        khoiluong: 0,
      },
      {
        id: makeid(7),
        tenloai: '',
        khoiluong: 0,
      },
      {
        id: makeid(7),
        tenloai: '',
        khoiluong: 0,
      },
    ],
    xacnhan: {
      ngaylap: moment().format('YYYY-MM-DD'),
      cangca: '',
      soxacnhannguyenlieukhaithac: '',
      lsxacnhan_: [
        {
          id: makeid(7),
          tenloai: '',
          klbocdoquacang: 0,
          kldaxacnhan: 0,
          klconlai: 0,
        },
        {
          id: makeid(7),
          tenloai: '',
          klbocdoquacang: 0,
          kldaxacnhan: 0,
          klconlai: 0,
        },
        {
          id: makeid(7),
          tenloai: '',
          klbocdoquacang: 0,
          kldaxacnhan: 0,
          klconlai: 0,
        },
        {
          id: makeid(7),
          tenloai: '',
          klbocdoquacang: 0,
          kldaxacnhan: 0,
          klconlai: 0,
        },
        {
          id: makeid(7),
          tenloai: '',
          klbocdoquacang: 0,
          kldaxacnhan: 0,
          klconlai: 0,
        },
      ],
    },
  };
};

export default data0202Empty;
