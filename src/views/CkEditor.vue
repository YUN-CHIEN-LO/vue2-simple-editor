<template>
  <div class="ck-editor">
    <editor class="ck-editor__block" @save="handleSave"></editor>
    <read-only class="ck-editor__block" :value="value"></read-only>
  </div>
</template>

<script>
import Editor from "@/components/ck-editor/Editor.vue";
import ReadOnly from "@/components/ck-editor/ReadOnly.vue";
export default {
  name: "CkEditor",
  components: { Editor, ReadOnly },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleSave(newValue) {
      this.value = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.ck-editor {
  display: flex;
  width: 100%;
  &__block {
    flex: 1;
    margin: 10px;
  }
}
</style>
