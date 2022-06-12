export default () => {
  const now = new Date()
  const month = now.getMonth() + 1
  const day = now.getDate()
  var hour = now.getHours()
  const minutes = now.getMinutes() < 10? "0" + now.getMinutes(): now.getMinutes()
  const seconds = now.getSeconds() < 10? "0" + now.getSeconds(): now.getSeconds()
  const weekList = new Array(
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일"
    );
  const ampm = hour >= 12 ? "PM" : "AM"
  const week = weekList[now.getDay()]
  const time = now.getTime()
  let daytime = ""
  hour = hour % 12
  hour = hour ? hour : 12
  

  if (hour < 12) {
    daytime = '좋은 아침이에요 :)'
  } else if (hour < 18) {
    daytime = '나른한 오후에요 :)'
  } else {
    daytime = '고요한 밤이에요 :)'
  }
  

  const dateInfo = {
    month,
    day,
    week,
    time,
    daytime,
    hour,
    minutes,
    seconds,
    ampm
  }
  return dateInfo
}