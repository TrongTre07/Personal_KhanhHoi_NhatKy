

export const dateNowFormat = (newDate,txtCategory) => {

    // if(newDate==='null'){

      if(newDate===null){
        const dateNow = new Date();

        const day = dateNow.getDate().toString().padStart(2, '0');
        const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
        const year = dateNow.getFullYear();
      return `${year}-${month}-${day}`;
    }
    // }else{
      const day = newDate.getDate().toString().padStart(2, '0');
      const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
      const year = newDate.getFullYear();
  
      if(txtCategory==="string"){
        return `${day}/${month}/${year}`;
      }
      if(txtCategory==="date"){
        return `${year}-${month}-${day}`;
  
      }
  
    // }

  // }

  };

  export const convertStringToDate = (inputString)  => {
  
  if(inputString.includes("-")){
    const [year, month, day] = inputString.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }else{
    return inputString;
  }

  
  }