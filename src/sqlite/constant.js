//query table Tong Cuc Thuy San
export const createTableTongCucThuySanQuery =
  'CREATE TABLE IF NOT EXISTS TongCucThuySan ' + 
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, nameOwner VARCHAR(50), ' +
    'namePilot VARCHAR(50), arrNumberShip VARCHAR(50), ' +
    'numberShip VARCHAR(50), longMaxShip VARCHAR(50), sumEngine VARCHAR(50), ' + 
    'numberSeafood VARCHAR(50), dateSeafood VARCHAR(50),sideJob1 VARCHAR(50), sideJob2 VARCHAR(50), ' +
    'jobCauSize VARCHAR(50), jobCauNumber VARCHAR(50), jobVayReSize VARCHAR(50), jobVayReNumber VARCHAR(50), ' +
    'jobChupSize VARCHAR(50), jobChupNumber VARCHAR(50), jobKeoSize VARCHAR(50), jobKeoNumber VARCHAR(50), ' +
    'jobOther VARCHAR(50), changeNumber VARCHAR(50), ';
    'departurePortText VARCHAR(50), departurePortDate VARCHAR(50), ' +
    'arrivalPortText VARCHAR(50), arrivalPortDate VARCHAR(50), ' +
    'diaryDate VARCHAR(50), diaryText VARCHAR(50), ' +
  ')';

// query table Hoat Dong Chuyen Tai
export const createTableHoatDongChuyenTaiQuery =
    'CREATE TABLE IF NOT EXISTS HoatDongChuyenTai ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'latitude VARCHAR(50), longitude VARCHAR(50), speciesName VARCHAR(50), ' +
    'weight VARCHAR(50), date VARCHAR(50), ' +
    'shipRegisterNumber VARCHAR(50), miningLicenseNumbewr VARCHAR(50), ' +
    'idTongCucThuySan INTEGER, ' +
    'FOREIGN KEY(idTongCucThuySan) REFERENCES TongCucThuySan(id))';

// query table Hoat Dong Khai Thac Thuy San
export const createTableHoatDongKhaiThacThuySanQuery =
    'CREATE TABLE IF NOT EXISTS HoatDongKhaiThacThuySan ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'timeTha VARCHAR(50) latitudeTha VARCHAR(50), longitudeTha VARCHAR(50), ' +
    'timeThu VARCHAR(50), latitudeThu VARCHAR(50), longitudeThu VARCHAR(50), ' +
    'speciesName1 VARCHAR(50), weight1 VARCHAR(50), ' +
    'speciesName2 VARCHAR(50), weight2 VARCHAR(50), ' +
    'speciesName3 VARCHAR(50), weight3 VARCHAR(50), ' +
    'speciesName4 VARCHAR(50), weight4 VARCHAR(50), ' +
    'speciesName5 VARCHAR(50), weight5 VARCHAR(50), ' +
    'speciesName6 VARCHAR(50), weight6 VARCHAR(50), ' +
    'speciesName7 VARCHAR(50), weight7 VARCHAR(50), ' +
    'speciesName8 VARCHAR(50), weight8 VARCHAR(50), ' +
    'speciesName9 VARCHAR(50), weight9 VARCHAR(50), ' +
    'idTongCucThuySan INTEGER, ' +
    'FOREIGN KEY(idTongCucThuySan) REFERENCES TongCucThuySan(id))';

// query table User
export const createTableUserQuery =
    'CREATE TABLE IF NOT EXISTS User ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'username VARCHAR(50), password VARCHAR(50), ' +
    'token VARCHAR(50), ';



