import makeid from '../../others/makeid';

const moment = require('moment');
// const currentDate = moment();
// const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');

const data04_PLIII_03Empty = {
  dairyname: '',
  tbl_xacnhancamket_ls: [
    {
      id: makeid(7),
      sochungnhankhaithac: '',
      tentau: '',
      quocgiatreoco: '',
      motathuysankhaithac: '',
      tongkhoiluongkhaithac: 0,
      khoiluongthuysankhaithacchebien: 0,
      sanphamsaukhichebien: 0,
    },
  ],
  sanphamthuysan: '',
  tenvadiachicosochebien: '',
  tenvadiachinhaxuatkhau: '',
  macosochebien: '',
  giayphiepantoanthucphamvangaycap: '',
  soxacnhan: '',
};

export default data04_PLIII_03Empty;
