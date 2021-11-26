<template>
  <div class="brick" :class="`brick--${color}`">{{ color }}</div>
</template>

<script>
export default {
  name: "DragDropBrick",
  props: {
    color: {
      type: String,
      default: "red",
    },
  },
};
</script>

<style lang="scss" scoped>
.brick {
  width: 100%;
  height: 100px;
  border: solid 1px #666;
  &--red {
    background-color: #faa;
  }
  &--blue {
    background-color: #aff;
  }
  &--yellow {
    background-color: #ffa;
  }
  &--green {
    background-color: #afa;
  }
}
</style>
