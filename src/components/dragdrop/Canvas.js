import DragDropBlock from "@/components/dragdrop/Block.vue";
export default {
  name: "DragDropCanvas",
  components: { DragDropBlock },
  props: {
    dataStructure: {
      type: Array,
      default: () => [],
    },
    isDrag: {
      type: Boolean,
      default: false,
    },
    cursorPos: {
      type: Object,
      default: () => ({ x: 0, y: 0 }),
    },
  },
  data() {
    return {
      windowWidth: 0,
      insertPoint: {
        id: "",
        position: "",
      },
    };
  },
  watch: {
    isDrag(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.$emit("hasDrop", this.insertPoint.id, this.insertPoint.position);
      }
    },
  },
  mounted() {
    // 掛載監聽事件
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });
  },
  methods: {
    onResize() {
      console.log("resize");
      this.windowWidth = window.innerWidth;
    },
  },
  destroyed() {
    // 移除監聽事件
    window.removeEventListener("resize", this.onResize);
  },
  render() {
    /**
     * JSX 產生 DOM element
     *
     * @param {object} value
     * - value.comp {string} - 為標籤名稱
     * - value.data {object} - 為要傳遞的參數，例如props、on等等
     * @returns {Element}
     */
    const genDOM = function (value, props, on) {
      if (!value) return null;
      if (!value.length) {
        const tag = value.comp;
        const classes = value.class ? value.class : "";
        const styles = value.style ? value.style : "";
        return (
          <drag-drop-block props={{ ...props, id: value.id }} on={on}>
            <tag {...value.data} class={classes} style={styles}></tag>
          </drag-drop-block>
        );
      } else {
        return (
          <drag-drop-block
            props={{ ...props, id: value.id, isParent: true }}
            on={on}
          >
            {value.map((x) => genDOM(x, props, on))}
          </drag-drop-block>
        );
      }
    };
    const _ = this;
    const props = {
      onResize: this.windowWidth,
      cursorPos: this.cursorPos,
      isDrag: this.isDrag,
    };
    const on = {
      toDrop: (id, val) => {
        _.insertPoint.id = id;
        _.insertPoint.position = val;
      },
    };
    const renderMap = this.dataStructure.map((x) => {
      return genDOM(x, props, on);
    });
    return <div style="width: 100%; h:100%">{...renderMap}</div>;
  },
};
