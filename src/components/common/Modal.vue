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
            name="modal-text">
            (모달 내용)
          </slot>
        </p>
        <button
          class="modal__close"
          @click="$emit('close')"
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
.modal-enter {
  opacity: 0;
  .modal__content {
    transform: translateY(30px);
    transition: transform 0.6s;
  }
}
.modal-enter-active {
  transition: opacity 0.3s;
}
.modal-leave-active {
  transition: opacity 0.3s 0.05s;
}
.modal-leave-to {
  opacity: 0;
  .modal__content {
    transform: translateY(30px);
    transition: transform 0.6s;
  }
}
</style>