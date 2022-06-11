<template>
  <transition
    name="modal"
    appear>
    <div
      class="modal_v modal__dim"
      @click.self="$emit('close')">
      <div class="modal__content">
        <p class="modal__text">
          <slot
            name="modal-text"></slot>
        </p>
        <button
          class="modal__close"
          @click="$emit('close')"
          @keyup.enter="$emit('close')"
          tabindex="0">
          확인
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style lang="scss" scoped>
.modal_v {
  width: 300px;
  height: 100px;
  padding: 50px;
  background-color: darkslateblue;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
}
</style>