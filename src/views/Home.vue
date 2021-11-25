<template>
  <div class="home" @mousemove="move">
    <div class="home__block home--block1">
      <div class="box box--blue">
        <div
          @mousedown="captureOn('blue')"
          @mouseup="captureOff"
          :style="dragTarget === 'blue' ? moveStyle : {}"
          ref="blue"
          class="box__shadow box--blue"
        >
          <div class="box__item box--blue">Blue</div>
        </div>
      </div>
      <div class="box box--red">
        <div
          @mousedown="captureOn('red')"
          @mouseup="captureOff"
          :style="dragTarget === 'red' ? moveStyle : {}"
          ref="red"
          class="box__shadow box--red"
        >
          <div class="box__item box--red">Red</div>
        </div>
      </div>
      <div class="box box--yellow">
        <div
          @mousedown="captureOn('yellow')"
          @mouseup="captureOff"
          :style="dragTarget === 'yellow' ? moveStyle : {}"
          ref="yellow"
          class="box__shadow box--yellow"
        >
          <div class="box__item box--yellow">Yellow</div>
        </div>
      </div>
    </div>

    <div class="home__block home--block2">
      <div class="canvas" ref="canvas"></div>
      <div v-show="canInsert" class="canvas__point"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isDragged: false,
      pos: {
        x: 0,
        y: 0,
      },
      dragTarget: "",
      canInsert: false,
    };
  },
  computed: {
    moveStyle() {
      if (!this.isDragged) return {};
      return {
        position: "fixed",
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`,
        opacity: 0.5,
        zIndex: 1000,
      };
    },
  },
  methods: {
    captureOn(ref) {
      this.isDragged = true;
      this.dragTarget = ref;
      this.pos.x = this.$refs[this.dragTarget].getBoundingClientRect().left;
      this.pos.y = this.$refs[this.dragTarget].getBoundingClientRect().top;
    },
    captureOff() {
      this.isDragged = false;
      this.pos.x = 0;
      this.pos.y = 0;
      if (this.canInsert) {
        this.insertDOM(this.dragTarget);
      }
      this.canInsert = false;
    },
    move(evt) {
      if (this.isDragged) {
        this.pos.x =
          evt.screenX - this.$refs[this.dragTarget].clientWidth * 0.5;
        this.pos.y =
          evt.screenY - this.$refs[this.dragTarget].clientHeight * 1.5;

        const canvasPosX = this.$refs.canvas.getBoundingClientRect().left;
        const canvasPosY = this.$refs.canvas.getBoundingClientRect().top;

        if (this.pos.x > canvasPosX && this.pos.y > canvasPosY) {
          this.canInsert = true;
        } else {
          this.canInsert = false;
        }
      }
    },
    insertDOM(target) {
      const template = this.$refs[target].cloneNode(true);
      const dom = document.createElement("div");
      dom.innerHTML = template.innerHTML;
      this.$refs.canvas.appendChild(dom);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: calc(100vh - 52.8px);
  align-items: stretch;
  &__block {
    border: solid 1px #666;
  }
  &--block1 {
    background-color: #eee;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  &--block2 {
    flex: 3;
  }
}
.canvas {
  width: 100%;
  &__point {
    width: 100%;
    height: 10px;
    background: #ccc;
  }
}
.box {
  width: 100px;
  height: 100px;
  background-color: #fff;
  margin: 10px 0px;
  position: relative;
  &--blue {
    background-color: #aaf;
  }
  &--red {
    background-color: #faa;
  }
  &--yellow {
    background-color: #ffa;
  }
  &__shadow {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
  &__item {
    width: 100%;
    height: 100px;
  }
}
</style>
