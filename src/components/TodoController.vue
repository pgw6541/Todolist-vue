<template>
  <div class="ctrl">
    <div class="select">
      <label for="order">Order</label>
      <select
        name="order"
        id="order"
        class="selectbox"
        v-model="selected"
        @change="sortTodo">
        <option value="date-asc">
          오래된순
        </option>
        <option value="date-desc">
          최신순
        </option>
      </select>
    </div>
    <button
      class="clear"
      @click="clearTodo">
      모두 비우기
    </button>
  </div>
</template>

<script>
export default {
  emits: ["sortItem", "clearAll"],
  methods: {
    sortTodo() {
      this.$emit("sortItem", { value: this.selected })
    },
    clearTodo() {
      this.$emit("clearAll")
    }
  }
}
</script>