const moment = require('moment');
// const currentDate = moment();
// const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm:ss');

const data0102Empty =  {
        dairyname: '',
        cangca_ds_denghi: [
          {
            // id: 0,
            tencang: "" ,
            loaicangca: "",
            diachi: '',
            dienthoai: '',
            soquyetdinhmocang: '',
            lydokhaitru: '',
            isdelete: false,
            ghichu: ''
          }
        ],
        cangca_ds_khaitru: [
          {
            tencang: "",
            loaicangca: "",
            diachi: '',
            dienthoai: '',
            lydokhaitru: '',
            ghichu: '',
            isdelete: false
          }
        ],
        sobacao: '',
        kinhgui: ''
}


export default data0102Empty;
