// const moment = require('moment');
// const currentDate = moment();

import moment from 'moment';
const formattedDate = moment().format('YYYY-MM-DD');

const data0401Empty = {
  tau_tongcongsuatmaychinh: '',
  tau_chieudailonnhat: '',
  dairyname: '',
  denngay: formattedDate,
  chuyenbien_so: '',
  nam: '',
  tungay: formattedDate,
  ten_chutau_thuyentruong: '',
  diachi: '',
  tau_bs: '',
  nghe: '',
  tongsolaodong: '',
  songayhoatdong: '',
  so_meluoi: '',
  ngutruong_vinhbacbo: false,
  ngutruong_trungbo: false,
  ngutruong_dongnambo: false,
  ngutruong_taynambo: false,
  ngutruong_giuabiendong: false,
  tongsanluong: '',
  bs_tauhoptackhaithac: '',
  tratientructiep: false,
  anchia: false,

};

export default data0401Empty;

