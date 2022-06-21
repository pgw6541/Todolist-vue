<template>
  <div class="title">
    <div class="in__container">
      <p class="title__text">
        <span class="title__message">
          {{ message }}<span class="ntt">&nbsp;&#58;&#41;&nbsp;</span> <!--ntt코드 :) -->
        </span>
        <span
          @keyup.enter="handleName"
          @blur="handleBlur"
          class="title__name"
          ref="test"
          spellcheck="false"
          contenteditable="true">
          {{ propName }}
        </span>
      </p>
      <p class="title__task">
        <span class="title__task-top"></span>
        <span class="title__task-count">
          <em class="title__task-left">남은&nbsp;{{ propsdata.left }}</em>
          <!-- <em class="titme__task-slash">/</em> --><br />
          <em class="title__task-total">전체&nbsp;{{ propsdata.total }}</em>
        </span>
        <span class="title__task-info"></span>
      </p>
    </div>
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
      this.blur()
    }
  },
  mounted() {
    this.message = getDate().daytime
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding: 50px 0;
  .in__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title__text {
      font-size: 52px;
      font-weight: bold;
      .title__message {
        .ntt {}
      }
      .title__name {}
    }
    .title__task {
      font-size: 36px;
      span.title__task-top {}
      span.title__task-count {
        em.title__task-left {}
        em.title__task-slash {}
        em.title__task-total {}
      }
      span.title__task-info {}
    }
  }
}
</style>