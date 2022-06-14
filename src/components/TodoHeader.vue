<template>
  <header class="header">
    <div class="month">
      {{ timemonth }}월&nbsp;
    </div>
    <div class="day">
      {{ timeday }}일&nbsp;
    </div>
    <div class="week">
      {{ timeweek }}요일&nbsp;/&nbsp;
    </div>
    <div class="now__time">
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
  margin: 20px 20px 0 0;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  .day {
  }
  .month {
  }
  .week {
  }
}
</style>