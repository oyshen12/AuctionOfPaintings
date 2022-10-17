<template>
  <button class="btn" @click.stop="clickEmit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickEmit() {
      this.$emit("clickEmit");
    },
  },
};
</script>

<style scoped lang='scss'>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #382e2b;
  font-size: 14px;
  width: 118px;
  height: 48px;
  line-height: 150%;
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover {
    color: #f4f6f9;
    background: #776763 !important;
  }
}
</style>