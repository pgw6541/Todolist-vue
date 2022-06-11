<template>
  <header class="header">
    <h1 class="logo">
      ToDo.
    </h1>
    <p class="date">
      {{ timestamp }}
    </p>
  </header>
</template>

<script>
import getDate from "~/commonJS/getDate";

export default {
  data() {
    return {
      timestamp: ""
    }
  },
  created() {
    this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
  }
}
</script>
<style lang="scss" scoped>
  header {
    width: 100%;
    height: 100px;
    background-color: $gray-700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {

    }
    .date {

    }
  }
</style>