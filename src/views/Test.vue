<template>
  <div class="test" @mousemove="onMouseMove">
    <div class="block block--1">
      <div v-for="(x, index) in dragBlocks" :key="x" class="block__element">
        <span
          ref="blocks"
          :style="dragBlocks[dragTarget] === x ? moveStyle : {}"
          @mousedown="onMouseDown($event, index)"
          @mouseup="onMouseUp"
        >
          <drag-drop-brick :color="`${dragBlocks[index]}`"> </drag-drop-brick>
        </span>
      </div>
    </div>
    <drag-drop-canvas
      :dataStructure="dataStructure"
      :cursorPos="curPos"
      :isDrag="isDrag"
      class="block block--2"
      @hasDrop="handleDrop"
    ></drag-drop-canvas>
  </div>
</template>

<script>
import DragDropCanvas from "@/components/dragdrop/Canvas";
import DragDropBrick from "@/components/dragdrop/Brick.vue";
export default {
  name: "Test",
  components: { DragDropCanvas, DragDropBrick },
  data() {
    return {
      isDrag: false,
      curPos: {
        x: 0,
        y: 0,
      },
      pos: {
        x: 0,
        y: 0,
      },
      dragBlocks: ["red", "blue", "yellow", "green"],
      dataStructure: [],
      dragTarget: "",
    };
  },
  computed: {
    moveStyle() {
      if (!this.isDrag) return {};
      return {
        position: "fixed",
        top: `${
          this.curPos.y - this.$refs.blocks[this.dragTarget].clientHeight * 0.5
        }px`,
        left: `${
          this.curPos.x - this.$refs.blocks[this.dragTarget].clientWidth * 0.5
        }px`,
        opacity: 0.5,
        zIndex: 1000,
        width: "200px",
      };
    },
  },
  methods: {
    findInsertPoint(arr, id, pos, item) {
      let copyArr = [];
      arr.forEach((x, index) => {
        const insertBefore = x.id === id && pos === "top";
        const insertAfter = x.id === id && pos === "bottom";
        const insertLeft = x.id === id && pos === "left";
        const insertRight = x.id === id && pos === "right";
        if (x.length > 0) {
          copyArr.push(this.findInsertPoint(arr[index], id, pos, item));
        } else {
          if (insertBefore) {
            copyArr.push(item);
            copyArr.push(x);
          } else if (insertAfter) {
            copyArr.push(x);
            copyArr.push(item);
          } else if (insertLeft) copyArr.push([item, x]);
          else if (insertRight) copyArr.push([x, item]);
          else copyArr.push(x);
        }
      });
      return copyArr;
    },
    handleDrop(id, pos) {
      if (pos === "invalid" && this.dataStructure.length > 0) return;
      const tmp = {
        comp: DragDropBrick,
        data: {
          props: {
            color: this.dragBlocks[this.dragTarget],
          },
        },
        id: `x${getRandomInt(1000, 9999)}`,
      };
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      if (this.dataStructure.length === 0) this.dataStructure.push(tmp);
      else
        this.dataStructure = this.findInsertPoint(
          this.dataStructure,
          id,
          pos,
          tmp
        );
    },
    onMouseDown(evt, ref) {
      console.log(ref);
      evt.stopPropagation();
      this.isDrag = true;
      this.dragTarget = ref;
      this.pos.x = this.$refs.blocks[ref].getBoundingClientRect().left;
      this.pos.y = this.$refs.blocks[ref].getBoundingClientRect().top;
    },
    onMouseUp(evt) {
      evt.stopPropagation();
      this.isDrag = false;
      this.pos.x = 0;
      this.pos.y = 0;
    },
    onMouseMove(evt) {
      if (this.isDrag) {
        const { clientX, clientY } = evt;
        this.curPos.x = clientX;
        this.curPos.y = clientY;

        this.pos.x = clientX;
        this.pos.y = clientY;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  align-items: stretch;
  height: 90vh;
}
.block {
  border: solid 1px #666;
  &--1 {
    flex: 1;
  }
  &--2 {
    flex: 3;
  }
  &__element {
    width: 100%;
    height: 100px;
    background-color: #ccc;
  }
}
</style>
