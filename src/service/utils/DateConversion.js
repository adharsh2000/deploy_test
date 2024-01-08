export function convertDateFormat(inputDateString) {
    // Parse the input date string
    const inputDate = new Date(inputDateString);
  
    // Define months array
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // Get the day, month, and year
    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
  
    // Get the day of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
  
    // Format the result
    const result = `${dayOfWeek} ${month} ${day}, ${year}`;
  
    return result;
  }