<template>
  <div class="ctrl">
    <div class="select">
      <label for="order">Order</label>
      <select
        name="order"
        id="order"
        class="selectbox">
        <option value="date-asc">
          Date Acsending
        </option>
        <option value="date-desc">
          Date Descending
        </option>
        <option value="name-asc">
          Name Ascending
        </option>
        <option value="name-desc">
          Name Descending
        </option>
      </select>
    </div>
    <button class="clear">
      모두 비우기
    </button>
  </div>
</template>