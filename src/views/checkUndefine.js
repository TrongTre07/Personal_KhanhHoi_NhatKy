export const checkUndefine = (data) => {

    data.cang_di = data.cang_di === undefined ? '' : data.cang_di;
    data.cang_ve = data.cang_ve === undefined ? '' : data.cang_ve;
    data.chuyenbien_so = data.chuyenbien_so === undefined ? '' : data.chuyenbien_so;
    data.dairy_name = data.dairy_name === undefined ? 'filemau' : data.dairy_name;
    data.gpkt_so = data.gpkt_so === undefined ? '' : data.gpkt_so;
    data.gpkt_thoihan = data.gpkt_thoihan === undefined ? '' : data.gpkt_thoihan;
    
  
    if (data.khaithac) {
      data.khaithac.forEach((item) => {
        item.kinhdo_tha = item.kinhdo_tha === undefined ? '' : item.kinhdo_tha;
        item.kinhdo_thu = item.kinhdo_thu === undefined ? '' : item.kinhdo_thu;
        item.loai_1 = item.loai_1 === undefined ? '' : item.loai_1;
        item.loai_2 = item.loai_2 === undefined ? '' : item.loai_2;
        item.loai_3 = item.loai_3 === undefined ? '' : item.loai_3;
        item.loai_4 = item.loai_4 === undefined ? '' : item.loai_4;
        item.loai_5 = item.loai_5 === undefined ? '' : item.loai_5;
        item.loai_6 = item.loai_6 === undefined ? '' : item.loai_6;
        item.loai_7 = item.loai_7 === undefined ? '' : item.loai_7;
        item.loai_8 = item.loai_8 === undefined ? '' : item.loai_8;
        item.loai_9 = item.loai_9 === undefined ? '' : item.loai_9;
        item.loai_1_kl = item.loai_1_kl === undefined ? '' : item.loai_1_kl;
        item.loai_2_kl = item.loai_2_kl === undefined ? '' : item.loai_2_kl;
        item.loai_3_kl = item.loai_3_kl === undefined ? '' : item.loai_3_kl;
        item.loai_4_kl = item.loai_4_kl === undefined ? '' : item.loai_4_kl;
        item.loai_5_kl = item.loai_5_kl === undefined ? '' : item.loai_5_kl;
        item.loai_6_kl = item.loai_6_kl === undefined ? '' : item.loai_6_kl;
        item.loai_7_kl = item.loai_7_kl === undefined ? '' : item.loai_7_kl;
        item.loai_8_kl = item.loai_8_kl === undefined ? '' : item.loai_8_kl;
        item.loai_9_kl = item.loai_9_kl === undefined ? '' : item.loai_9_kl;
        item.thoidiem_tha = item.thoidiem_tha === undefined ? '' : item.thoidiem_tha;
        item.thoidiem_thu = item.thoidiem_thu === undefined ? '' : item.thoidiem_thu;
        item.tongsanluong = item.tongsanluong === undefined ? '' : item.tongsanluong;
        item.vido_tha = item.vido_tha === undefined ? '' : item.vido_tha;
        item.vido_thu = item.vido_thu === undefined ? '' : item.vido_thu;
      });
    }
  
    data.ncau_chieudaivangcau = data.ncau_chieudaivangcau === undefined ? '' : data.ncau_chieudaivangcau;
    data.ncau_soluoicau = data.ncau_soluoicau === undefined ? '' : data.ncau_soluoicau;
    data.ngay_di = data.ngay_di === undefined ? '' : data.ngay_di;
    data.ngay_ve = data.ngay_ve === undefined ? '' : data.ngay_ve;
    data.ngaynop = data.ngaynop === undefined ? '' : data.ngaynop;
    data.nghechinh = data.nghechinh === undefined ? '' : data.nghechinh;
    data.nghephu1 = data.nghephu1 === undefined ? '' : data.nghephu1;
    data.nghephu2 = data.nghephu2 === undefined ? '' : data.nghephu2;
    data.nkhac = data.nkhac === undefined ? '' : data.nkhac;
    data.nluoichup_chieucaoluoi = data.nluoichup_chieucaoluoi === undefined ? '' : data.nluoichup_chieucaoluoi;
    data.nluoichup_chuvimiengluoi = data.nluoichup_chuvimiengluoi === undefined ? '' : data.nluoichup_chuvimiengluoi;
    data.nluoikeo_chieudaigiengphao = data.nluoikeo_chieudaigiengphao === undefined ? '' : data.nluoikeo_chieudaigiengphao;
    data.nluoikeo_chieudaitoanboluoi = data.nluoikeo_chieudaitoanboluoi === undefined ? '' : data.nluoikeo_chieudaitoanboluoi;
    data.nluoivay_chieucaoluoi = data.nluoivay_chieucaoluoi === undefined ? '' : data.nluoivay_chieucaoluoi;
    data.nluoivay_chieudailuoi = data.nluoivay_chieudailuoi === undefined ? '' : data.nluoivay_chieudailuoi;
    data.vaoso_so = data.vaoso_so === undefined ? '' : data.vaoso_so;
  
    if (data.thumua) {
      data.thumua.forEach((item) => {
        item.daban_ct_khoiluong = item.daban_ct_khoiluong === undefined ? '' : item.daban_ct_khoiluong;
        item.daban_ct_loai = item.daban_ct_loai === undefined ? '' : item.daban_ct_loai;
        item.ngaythang = item.ngaythang === undefined ? '' : item.ngaythang;
        item.tm_ct_bstau = item.tm_ct_bstau === undefined ? '' : item.tm_ct_bstau;
        item.tm_ct_gpkt = item.tm_ct_gpkt === undefined ? '' : item.tm_ct_gpkt;
        item.tm_ct_thuyentruong = item.tm_ct_thuyentruong === undefined ? '' : item.tm_ct_thuyentruong;
        item.tm_ct_vt_kinhdo = item.tm_ct_vt_kinhdo === undefined ? '' : item.tm_ct_vt_kinhdo;
        item.tm_ct_vt_vido = item.tm_ct_vt_vido === undefined ? '' : item.tm_ct_vt_vido;
      });
    }
  
    return data;
  };