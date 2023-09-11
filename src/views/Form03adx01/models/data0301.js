const moment = require('moment');
const currentDate = moment();
const formattedDate = currentDate.format('YYYY-MM-DD');

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

const data0301Empty = {
  tau_tongcongsuatmaychinh: '',
  tau_chieudailonnhat: '',
  dairyname: '',
  denngay: formattedDate,
  tblreport_0301_ls: [
    {
      id: makeid(7),
      tenloai: '',
      sanluong: 0,
    },
    {
      id: makeid(7),
      tenloai: '',
      sanluong: 0,
    },
    {
      id: makeid(7),
      tenloai: '',
      sanluong: 0,
    },
    {
      id: makeid(7),
      tenloai: '',
      sanluong: 0,
    },
    {
      id: makeid(7),
      tenloai: '',
      sanluong: 0,
    },
  ],
  chuyenbien_so: '',
  nam: '',
  tungay: formattedDate,
  ten_chutau_thuyentruong: '',
  diachi: '',
  tau_bs: '',
  nghekhaithac: '',
  tongsolaodong: '',
  songaykhaithac: '',
  so_meluoi: '',
  ngutruong_vinhbacbo: false,
  ngutruong_trungbo: false,
  ngutruong_dongnambo: false,
  ngutruong_taynambo: false,
  ngutruong_giuabiendong: false,
  tongsanluong: '',
};

export default data0301Empty;
