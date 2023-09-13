const moment = require('moment');
// const currentDate = moment();
// const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');
const makeid = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
const data0202Empty = {
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

export default data0202Empty;
