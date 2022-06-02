<template>
  <div class="container">
    <input
      type="text"
      v-model="newTodoItem" />
    <button @click="addTodo">
      추가
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
  methods: {
    addTodo() {
      console.log(this.newTodoItem);
      // 저장 로직
      localStorage.setItem(this.newTodoItem, this.newTodoItem)
      
      // 비우기
      this.newTodoItem="" 
    }
  }
}
</script>