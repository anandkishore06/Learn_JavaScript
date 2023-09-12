let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(typeof newDate);

let createDate1 = new Date(2023, 0 ,12)
console.log(createDate1);
console.log(createDate1.toDateString());
let createDate2 = new Date(2023, 0 ,13,5,6)
console.log(createDate2.toLocaleString());

let createDate3 = new Date("2023-01-05")
console.log(createDate3.toDateString());
console.log(new Date("01-24-2023"));
console.log(createDate3.getTime()); // get time in ms

let timeStamp = Date.now()
console.log(timeStamp); // time in milisecond
console.log(Math.floor(timeStamp/1000)); // time in second

// Get Month,Year and Date

let newDate1 = new Date()
console.log(newDate1.getMonth()+1);
console.log(newDate1.getDate());
console.log(newDate1.getDay());
console.log(newDate1.getFullYear());