

export const dateNowFormat = (newDate,txtCategory) => {
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear();

    if(txtCategory==="string"){
      return `${day}/${month}/${year}`;
    }
    if(txtCategory==="date"){
      return `${year}-${month}-${day}`;

    }

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