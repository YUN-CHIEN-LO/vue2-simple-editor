<template>
  <div class="block" ref="block">
    <slot></slot>
    <div v-show="canDrop === 'top'" class="block__add block--top"></div>
    <div v-show="canDrop === 'right'" class="block__add block--right"></div>
    <div v-show="canDrop === 'bottom'" class="block__add block--bottom"></div>
    <div v-show="canDrop === 'left'" class="block__add block--left"></div>
  </div>
</template>

<script>
export default {
  name: "DragDropBlock",
  props: {
    id: String,
    isDrag: {
      type: Boolean,
      default: false,
    },
    cursorPos: {
      type: Object,
      default: () => ({ x: 0, y: 0 }),
    },
    onResize: {
      type: Number,
      default: 0,
    },
    isParent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pos: {
        x: 0,
        y: 0,
      },
      size: {
        w: 0,
        y: 0,
      },
    };
  },
  computed: {
    canDrop() {
      if (this.isParent || !this.isDrag) return "invalid";
      if (
        this.cursorPos.x > this.pos.x &&
        this.cursorPos.x < this.pos.x + this.size.w &&
        this.cursorPos.y > this.pos.y &&
        this.cursorPos.y < this.pos.y + 20
      )
        return "top";

      if (
        this.cursorPos.x > this.pos.x &&
        this.cursorPos.x < this.pos.x + 20 &&
        this.cursorPos.y > this.pos.y &&
        this.cursorPos.y < this.pos.y + this.size.h
      )
        return "left";

      if (
        this.cursorPos.x > this.pos.x &&
        this.cursorPos.x < this.pos.x + this.size.w &&
        this.cursorPos.y < this.pos.y + this.size.h &&
        this.cursorPos.y > this.pos.y + this.size.h - 20
      )
        return "bottom";

      if (
        this.cursorPos.x < this.pos.x + this.size.w &&
        this.cursorPos.x > this.pos.x + this.size.w - 20 &&
        this.cursorPos.y > this.pos.y &&
        this.cursorPos.y < this.pos.y + this.size.h
      )
        return "right";

      return "invalid";
    },
  },
  mounted() {
    this.pos.x = this.$refs.block.getBoundingClientRect().left;
    this.pos.y = this.$refs.block.getBoundingClientRect().top;
    this.size.w = this.$refs.block.clientWidth;
    this.size.h = this.$refs.block.clientHeight;
  },
  watch: {
    onResize() {
      this.pos.x = this.$refs.block.getBoundingClientRect().left;
      this.pos.y = this.$refs.block.getBoundingClientRect().top;
    },
    canDrop(newValue) {
      if (this.isDrag) {
        this.$emit("toDrop", this.id, newValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  flex: 1;
  display: flex;
  background-color: #eee;
  box-sizing: border-box;
  position: relative;
  &__add {
    position: absolute;
    background-color: #ccc;
  }
  &--top {
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
  }
  &--right {
    width: 5px;
    height: 100%;
    top: 0;
    right: 0;
  }
  &--bottom {
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
  }
  &--left {
    width: 5px;
    height: 100%;
    bottom: 0;
    left: 0;
  }
}
.pos {
  position: absolute;
  background-color: #fff;
}
</style>
