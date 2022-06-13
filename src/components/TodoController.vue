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
      @click="clearModalShow">
      초기화
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
  emits: ["sortItem", "allClear"],
  methods: {
    sortTodo() {
      this.$emit("sortItem", { value: this.onePick })
    },
    clearModalShow() {
      this.$emit("allClear")
    }
  }
}
</script>