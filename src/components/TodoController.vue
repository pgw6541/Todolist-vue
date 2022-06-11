<template>
  <div class="ctrl">
    <div class="select">
      <label for="order">Order</label>
      <select
        name="order"
        id="order"
        class="selectbox"
        v-model="onePick"
        @change="sortTodo">
        <option
          v-for="sortOption in sortOptions"
          :key="sortOption"
          :value="sortOption.value">
          {{ sortOption.txt }}
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
  data() {
    return {
      sortOptions: [
        {
          txt: "오래된순",
          value: "date-asc"
        },
        {
          txt: "최신순",
          value: "date-desc"
        },
      ],
      onePick : "date-asc"
    }
  },
  emits: ["sortItem", "clearAll"],
  methods: {
    sortTodo() {
      this.$emit("sortItem", { value: this.onePick })
      
    },
    clearTodo() {
      this.$emit("clearAll")
    }
  }
}
</script>