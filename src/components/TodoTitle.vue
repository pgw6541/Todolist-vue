<template>
  <div class="title">
    <p class="title__text">
      <span class="title__message">
        {{ message }}&nbsp;
      </span>
      <span
        @keyup.enter="handleName"
        @blur="handleBlur"
        class="title__name"
        ref="test"
        contenteditable="true">
        {{ propName }}
      </span>
    </p>
    <p class="title__task">
      <span class="title__task-top"></span>
      <span class="title__task-count">
        <em class="title__task-left">{{ propsdata.left }}&nbsp;</em>
        <em class="titme__task-slash">/</em>
        <em class="title__task-total">&nbsp;{{ propsdata.total }}</em>
      </span>
      <span class="title__task-info"></span>
    </p>
  </div>
</template>

<script>
import getDate from "~/commonJS/getDate"

export default {
  props: ["propsdata", "propName"],
  data() {
    return {
      message: ""
    }
  },
  emits: ["changeName"],
  methods: {
    handleBlur(e) {
      const originalName = this.propName
      const newName = e.target.innerText
      if (newName !== originalName) {
        if (newName === "") {
          e.target.innerText = originalName
        } else {
          this.$emit("changeName", newName)
        }
      }
    },
    handleName() {
      this.$refs.test.blur()
    }
  },
  mounted() {
    this.message = getDate().daytime
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding: 50px 0 50px;
  display: flex;
  justify-content: space-around;
  // background: linear-gradient(to right, yellowgreen, skyblue);
  .title__text {
    .title__message {}
    .title__name {}
  }
  .title__task {
    .title__task-top {}
    .title__task-count {}
    .title__task-left {}
    .title__task-total {}
    .title__task-bottom {}
    .title__task-info {}
  }
}
</style>