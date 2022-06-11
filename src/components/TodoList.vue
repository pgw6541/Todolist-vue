<template>
  <ul
    class="list"
    :class="listempty">
    <li
      class="list__item flex"
      v-for="(todoItem, index) in propsdata"
      :key="todoItem.item">
      <input
        type="checkbox"
        :id="todoItem.item"
        :checked="todoItem.completed === true"
        @change="toggleComplete(todoItem)" />
      <label
        :for="todoItem.item"
        class="list__label">
        <p class="list__text">{{ todoItem.item }}</p>
      </label>
      <p class="list__date">
        {{ todoItem.date }}
      </p>
      <button
        class="list__delete"
        @click="removeTodo(todoItem, index)">
        X
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["propsdata", "propempty"],
  emits: ["removeItem", "toggleItem"],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index)
    },
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem)
    }
  },
  computed: {
    listempty() {
      return this.propempty ? "list--empty" : null
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 50px;
  padding: 20px;
  border: 1px solid #000;
  .flex {
  display: flex;
}
}
</style>