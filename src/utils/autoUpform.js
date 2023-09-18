// useFocusEffect(
//     React.useCallback(() => {
//       if (netInfo.isConnected) {
//         autoPostForm('form01adx01', postForm0101);
//       }
//     }, [netInfo.isConnected]),
//   );


  export const autoUpForm = async (nameLocal, funtionUpload) => {
    const form = await Storage.getItem(nameLocal);
  
    if (form !== null) {
      let data = JSON.parse(form);
      const newData = [];
  
      for (const item of data) {
        let retryCount = 0;
        let success = false;
  
        while (retryCount < 3 && !success) {
          const result = await funtionUpload(item);
          console.log('result ...', result);
  
          if (result) {
            success = true; // Tải lên thành công, thoát khỏi vòng lặp
          } else {
            retryCount++; // Tăng số lần thử lại nếu tải lên thất bại
          }
        }
  
        if (!success) {
          newData.push(item); // Nếu tải lên không thành công sau 3 lần thử, lưu lại dữ liệu
        }
      }
  
      await Storage.setItem(nameLocal, JSON.stringify(newData));
  
      if (newData.length < data.length) {
        Alert.alert('Thông báo', `Đã gửi ${data.length - newData.length} bản ghi lên server`);
      }
    }
  }