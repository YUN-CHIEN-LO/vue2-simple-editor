<template>
  <div class="tiny-mce">
    <div class="tiny-mce__block">
      <editor @change="handleChange"></editor>
    </div>

    <div class="tiny-mce__block">
      <read-only :value="value"></read-only>
    </div>
  </div>
</template>

<script>
import Editor from "@/components/tiny-mce/Editor.vue";
import ReadOnly from "@/components/tiny-mce/ReadOnly.vue";

export default {
  name: "TinyMce",
  components: {
    Editor,
    ReadOnly,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleChange(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.tiny-mce {
  display: flex;
  width: 100%;
  &__block {
    margin: 10px;
    max-width: 50%;
    flex: 1;
  }
}
</style>
