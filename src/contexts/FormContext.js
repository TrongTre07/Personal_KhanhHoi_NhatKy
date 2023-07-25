import React, {createContext, useState} from 'react';

export const FormContext = createContext();
import CustomDatePicker from '../views/Form01adx01/item/itemTongCucThuySan/CustomDatePicker';

export const FormProvider = ({children}) => {
  const dateNowFormat = newDate => {
    if (newDate === null) {
      const day = dateNow.getDate().toString().padStart(2, '0');
      const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
      const year = dateNow.getFullYear();
      const hours = dateNow.getHours().toString().padStart(2, '0');
      const minutes = dateNow.getMinutes().toString().padStart(2, '0');
      return `${day}/${month}/${year}, ${hours}:${minutes}`;
    } else {
      const day = newDate.getDate().toString().padStart(2, '0');
      const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
      const year = newDate.getFullYear();
      const hours = newDate.getHours().toString().padStart(2, '0');
      const minutes = newDate.getMinutes().toString().padStart(2, '0');
      return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }
  };

  const dateNow = new Date();

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [thongTinTau, setThongTinTau] = useState({
    isdraft: false,
    dairy_name: 'abc-test',
    nghechinh: '',
    ten_chutau: 'abc',
    ten_thuyentruong: 'abc',
    id_tau: '1',
    tau_bs: 'HC-1234-TS1',
    tau_chieudailonnhat: '12',
    tau_tongcongsuatmaychinh: '12',
    gpkt_so: 'HAGPKT',
    gpkt_thoihan: '12/2/2022',
    nghephu1: '',
    nghephu2: '',
    ncau_chieudaivangcau: '',
    ncau_soluoicau: '',
    nluoivay_chieudailuoi: '',
    nluoivay_chieucaoluoi: '',
    nluoichup_chuvimiengluoi: '',
    nluoichup_chieucaoluoi: '',
    nluoikeo_chieudaigiengphao: '',
    nluoikeo_chieudaitoanboluoi: '',
    nkhac: '',
    chuyenbien_so: '',
    cang_di: '',
    ngay_di: '2023-07-22',
    cang_ve: '',
    ngay_ve: '2023-07-22',
    ngaynop: '2023-07-22',
    vaoso_so: '',
  });

  const [khaiThac, setKhaiThac] = useState({
    khaithac: [
      {
        methu: '1',
        thoidiem_tha: dateNowFormat(null),
        vido_tha: '',
        kinhdo_tha: '',
        thoidiem_thu: dateNowFormat(null),
        vido_thu: '',
        kinhdo_thu: '',
        loai_1: '',
        loai_2: '',
        loai_3: '',
        loai_4: '',
        loai_5: '',
        loai_6: '',
        loai_7: '',
        loai_8: '',
        loai_9: '',
        loai_1_kl: '',
        loai_2_kl: '',
        loai_3_kl: '',
        loai_4_kl: '',
        loai_5_kl: '',
        loai_6_kl: '',
        loai_7_kl: '',
        loai_8_kl: '',
        loai_9_kl: '',
        tongsanluong: '',
      },
    ],
  });


  const [thuMua, setThuMua] = useState({
    thumua: [
      {
        ngaythang: dateNowFormat(null),
        tm_ct_bstau: '',
        tm_ct_gpkt: '',
        tm_ct_vt_vido: '',
        tm_ct_vt_kinhdo: '',
        daban_ct_loai: '',
        daban_ct_khoiluong: '',
        tm_ct_thuyentruong: '',
      },
      
    ],
  });

  const contextValue = {
    isLoggedIn,
    thuMua,
    setThuMua,
    thongTinTau,
    setThongTinTau,
    khaiThac,
    setKhaiThac,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
