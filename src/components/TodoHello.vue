<template>
  <div class="helloCtn">
    <div>
      <div class="hello">
        사용자 이름을 입력해주세요
      </div>
      <!-- <label for="user-name"></label> -->
      <input
        type="text"
        id="user-name"
        v-model="userName"
        @keyup.enter="addUserName()" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  emits: ["addName"],
  methods: {
    addUserName() {
      this.$emit("addName", this.userName);
    }
  }
};
</script>
<style lang="scss" scoped>
.helloCtn {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hello {
    padding-bottom: 20px;
  }
  input#user-name {
    font-size: 24px;
  }
}
</style>