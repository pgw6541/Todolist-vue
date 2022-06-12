<template>
  <header class="header">
    <div class="month">
      {{ timemonth }}월
    </div>
    <div class="day">
      {{ timeday }}일
    </div>
    <div class="week">
      {{ timeweek }}요일
    </div>
    <div class="now__time">
      {{ ampm }}
      {{ this.propstime }}
    </div>
  </header>
</template>

<script>
import getDate from "~/commonJS/getDate";

export default {
  data() {
    return {
      timeday: "",
      timemonth: "",
      timeweek: "",
      ampm: "",
    }
  },
  created() {
    this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
    this.timeday = `${getDate().day}`
    this.timemonth = `${getDate().month}`
    this.timeweek = `${getDate().week}`
    this.ampm = `${getDate().ampm}`
    // this.timeHours = `${getDate().hour < 10? "0" + getDate().hour: getDate().hour }`
    // this.timeMinutes = `${getDate().minutes}`
    // this.timeSeconds = `${getDate().seconds}`
  },
  props: ["propstime"]
}
</script>
<style lang="scss" scoped>
header {
  height: 200px;
  font-size: 56px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .day {
  }
  .month {
  }
  .week {
  }
}
</style>