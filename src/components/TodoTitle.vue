<template>
  <div class="title">
    <p class="title__te">
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
      <span class="title__task-top">You've got</span>
      <span class="title__task-count">
        <em class="title__task-left">{{ propsdata.left }}</em>
        <em class="title__task-total">{{ propsdata.total }}</em>
      </span>
      <span class="title__task-bottom">tasks today !</span>
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