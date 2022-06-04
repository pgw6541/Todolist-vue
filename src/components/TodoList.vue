<template>
  <ul class="list">
    <li
      class="list__item flex"
      v-for="todoItem in todoItems"
      :key="todoItem">
      <input
        type="checkbox"
        :id="todoItem.item" />
      <label
        :for="todoItem.item"
        class="list__label">
        <p class="list__text">{{ todoItem.item }}</p>
      </label>

      <p class="list__date">
        {{ todoItem.date }}
      </p>

      <!-- <button class="list__delete">
        삭제하기
      </button> -->
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i ++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 50px;
  padding: 20px;
  border: 1px solid #000;
}
</style>