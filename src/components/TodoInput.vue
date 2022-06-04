<template>
  <div class="add">
    <input
      type="text"
      class="add__input"
      placeholder="Enter your task"
      v-model="newTodoItem"
      @keyup.enter="addTodoItem()" />
    <button
      class="add_button"
      @click="addTodoItem()">
      <span class="blind">추가</span>
    </button>
  </div>
</template>

<script>
import getDate from "~/commonJS/getDate"

export default {
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "") {
        var value = {
          item: this.newTodoItem,
          date: `${getDate().date}/${getDate().week}`,
          time: getDate().time,
          completed: false
        }
        localStorage.setItem(this.newTodoItem, JSON.stringify(value))
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = ""
    }
  }
}
</script>