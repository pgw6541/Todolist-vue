<template>
  <div class="add">
    <input
      type="text"
      class="add__input"
      placeholder="Enter를 눌러주세요"
      v-model="newTodoItem"
      @keypress.enter="addTodoItem" />
    <button
      class="add_button"
      @click="addTodoItem">
      <span class="blind">추가</span>
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newTodoItem: ""
    }
  },
  emits: ["addItem"],
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "" || this.newTodoItem == "") {
        this.$emit("addItem", this.newTodoItem)
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = ""
    }
  }
}
</script>