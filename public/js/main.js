const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
let city_name = document.getElementById("city_name");
let temp = document.getElementById("temp");

let curDay = document.getElementById("date");
let curTime = new Date();
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let myDay = weekDays[curTime.getDay()];
let myDate = curTime.getDate();
let myMonth = months[curTime.getMonth() + 1];
let myHours = curTime.getHours();
let myMins = curTime.getMinutes();
let ampm = "AM";
if (myHours > 11) {
  ampm = "PM";
  if (myHours > 12) {
    myHours -= 12;
  }
}
if (myMins < 10) {
  myMins = "0" + myMins;
}
curDay.innerHTML = `${myDay} | ${myMonth}  ${myDate} | ${myHours}:${myMins}  ${ampm}`;

const getInfo = async (e) => {
  e.preventDefault();
  // console.log("You clicked me");
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = "Please write city name in search input.";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9e209457e4dedb2dba236c57f534a275`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = cityVal;
      temp.innerHTML = arrData[0].main.temp + `<sup>o</sup>C`;
      console.log(arrData);
    } catch {
      city_name.innerHTML = "Please write city name properly.";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
