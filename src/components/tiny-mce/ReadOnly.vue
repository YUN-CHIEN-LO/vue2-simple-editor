<template>
  <div class="read-only">
    <h1>READ ONLY</h1>
    <div class="read-only__content" v-html="value"></div>
  </div>
</template>

<script>
export default {
  name: "ReadOnly",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.read-only {
  &__content {
    width: 100%;
    word-wrap: break-word;
  }
}
</style>
