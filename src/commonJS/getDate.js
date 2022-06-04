export default () => {
  const now = new Date()
  const hour = now.getHours()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const weekList = new Array(
    "월.",
    "화.",
    "수.",
    "목.",
    "금.",
    "토.",
    "일."
  );
  const week = weekList[now.getDay()]
  const time = now.getTime()
  let daytime = ""

  if (hour < 12) {
    daytime = '좋은 아침이에요 :)'
  } else if (hour < 18) {
    daytime = '나른한 오후에요 :)'
  } else {
    daytime = '고요한 밤이에요 :)'
  }

  const dateInfo = {
    month,
    date,
    week,
    time,
    daytime
  }
  return dateInfo
}