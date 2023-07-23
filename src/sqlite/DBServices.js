import {openDatabase} from 'react-native-sqlite-storage';
import { createTableTongCucThuySanQuery, createTableHoatDongChuyenTaiQuery, createTableHoatDongKhaiThacThuySanQuery } from './constant';

export const getDBConnection = async () => {
    return openDatabase({ name: 'khanh_hoi' });
}

export const createTableTongCucThuySan = async (db) => {
    const query = createTableTongCucThuySanQuery;
    await db.executeSql(query);
}

export const createTableHoatDongChuyenTai = async (db) => {
    const query = createTableHoatDongChuyenTaiQuery;
    await db.executeSql(query);
}

export const createTableHoatDongKhaiThacThuySan = async (db) => {
    const query = createTableHoatDongKhaiThacThuySanQuery;
    await db.executeSql(query);
}

export const insertTongCucThuySan = async (db, data) => {
    const query = `INSERT INTO TongCucThuySan 
                    (nameOwner, namePilot, arrNumberShip, numberShip, longMaxShip, 
                    sumEngine, numberSeafood, dateSeafood, sideJob1, sideJob2,
                    jobCauSize, jobCauNumber, jobVayReSize, jobVayReNumber, 
                    jobChupSize, jobChupNumber, jobKeoSize, jobKeoNumber, 
                    jobOther, changeNumber, departurePortText, departurePortDate, 
                    arrivalPortText, arrivalPortDate, diaryDate, diaryText) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await db.executeSql(query, [
        data.nameOwner, data.namePilot, data.arrNumberShip, 
        data.numberShip, data.longMaxShip, data.sumEngine, data.numberSeafood, 
        data.dateSeafood, data.sideJob1, data.sideJob2, data.jobCauSize, 
        data.jobCauNumber, data.jobVayReSize, data.jobVayReNumber, 
        data.jobChupSize, data.jobChupNumber, data.jobKeoSize, data.jobKeoNumber, 
        data.jobOther, data.changeNumber, data.departurePortText, 
        data.departurePortDate, data.arrivalPortText, data.arrivalPortDate, 
        data.diaryDate, data.diaryText
    ]);
}