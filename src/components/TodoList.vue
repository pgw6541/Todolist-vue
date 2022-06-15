<template>
  <div
    class="list"
    :class="listempty">
    <ul class="in__container">
      <li
        class="list__item"
        v-for="(todoItem, index) in propsdata"
        :key="todoItem.item">
        <input
          type="checkbox"
          class="checkbox"
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
  </div>
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
  .in__container {
    border: 3px solid $black;
    padding: 20px;
    .list__item {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      input {
        flex-grow: 1;
        &[type="checkbox"] {
          width: 17px;
          height: 17px;
        }
      }
      .list__label {
        flex-grow: 6;
        text-align: left;
      }
      .list__date {
        flex-grow: 3;
      }
      button {
        width: 36px;
      }
    }
  }
}
</style>