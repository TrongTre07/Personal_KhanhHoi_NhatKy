export const dateNowFormat = (newDate, txtCategory) => {
  if(newDate===undefined){
    return '';
  }
  const dateNow = new Date();

  if (newDate === null) {
    const day = dateNow.getDate().toString().padStart(2, '0');
    const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
    const year = dateNow.getFullYear();
    return `${year}-${month}-${day}`;
  }
  if (newDate === 'nullHour') {
    const day = dateNow.getDate().toString().padStart(2, '0');
    const month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
    const year = dateNow.getFullYear();
    const hours = dateNow.getHours().toString().padStart(2, '0');
    const minutes = dateNow.getMinutes().toString().padStart(2, '0');
    const milliseconds = dateNow.getMilliseconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${milliseconds}`;
  }

  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();

  if (txtCategory === 'string') {
    return `${day}/${month}/${year}`;
  }
  if (txtCategory === 'date') {
    return `${year}-${month}-${day}`;
  }
  if (txtCategory === 'dateHour') {
    const hours = newDate.getHours().toString().padStart(2, '0');
    const minutes = newDate.getMinutes().toString().padStart(2, '0');
    const milliseconds = newDate.getMilliseconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${milliseconds}`;
  }

  // }

  // }
};

export const convertStringToDate = inputString => {
  try {
    if (inputString?.includes('-')) {
      const [year, month, day] = inputString.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    } else {
      return inputString;
    }
  } catch (error) {
    
  }

};

export const convertStringToDateHour = inputString => {
  try {
    if (inputString.includes('T')) {
      const [datePart, timePart] = inputString.split('T');
      const [year, month, day] = datePart.split('-');
      const [hours, minutes, seconds] = timePart.split(':');
  
      const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}`;
      return formattedDate;
    }
  } catch (error) {
    
  }

};
