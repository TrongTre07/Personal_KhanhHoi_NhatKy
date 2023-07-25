import React, {createContext, useState} from 'react';

export const FormContext = createContext();

export const FormProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [thongTinTau, setThongTinTau] = useState({
    isdraft: false,
    dairy_name: 'abc-25-07',
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
        thoidiem_tha: '2023-07-22T14:44',
        vido_tha: '10.5',
        kinhdo_tha: '105.35',
        thoidiem_thu: '2023-07-22T14:44',
        vido_thu: '10.3',
        kinhdo_thu: '105.6',
        loai_1: 'cá',
        loai_2: 'mực',
        loai_3: '',
        loai_4: '',
        loai_5: '',
        loai_6: '',
        loai_7: '',
        loai_8: '',
        loai_9: '',
        loai_1_kl: '200',
        loai_2_kl: '200',
        loai_3_kl: '',
        loai_4_kl: '',
        loai_5_kl: '',
        loai_6_kl: '',
        loai_7_kl: '',
        loai_8_kl: '',
        loai_9_kl: '',
        tongsanluong: '400',
      },
    ],
  });

  const [thuMua, setThuMua] = useState({
    thumua: [
      {
        ngaythang: '2023-07-22',
        tm_ct_bstau: 'bs-tau',
        tm_ct_gpkt: '123456',
        tm_ct_vt_vido: '10.2',
        tm_ct_vt_kinhdo: '103.8',
        daban_ct_loai: 'Mực',
        daban_ct_khoiluong: '100',
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

