<template>
  <div class="editor">
    <h1>EDITOR</h1>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      @input="hanldeInput"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

// md 快捷鍵
import AutoformatPlugin from "@ckeditor/ckeditor5-autoformat/src/autoformat";
// 特殊字樣快捷鍵
import TextTransformationPlugin from "@ckeditor/ckeditor5-typing/src/texttransformation";
// 基本字形樣式
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import CodePlugin from "@ckeditor/ckeditor5-basic-styles/src/code";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
// 字塊模組
import IndentPlugin from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlockPlugin from "@ckeditor/ckeditor5-indent/src/indentblock";
// 引言
import BlockQuotePlugin from "@ckeditor/ckeditor5-block-quote/src/blockquote";
// code
import CodeBlockPlugin from "@ckeditor/ckeditor5-code-block/src/codeblock";
// 分隔線
import HorizontalLinePlugin from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
// 文字
import FontSizePlugin from "@ckeditor/ckeditor5-font/src/fontsize";
// list
import ListPlugin from "@ckeditor/ckeditor5-list/src/list";
import TodoListPlugin from "@ckeditor/ckeditor5-list/src/todolist";
// table
import TablePlugin from "@ckeditor/ckeditor5-table/src/table";
import TableToolbarPlugin from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TablePropertiesPlugin from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellPropertiesPlugin from "@ckeditor/ckeditor5-table/src/tablecellproperties";
// 連結
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
// 文字
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// 標題
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
// 重點
import HighlightPlugin from "@ckeditor/ckeditor5-highlight/src/highlight";
// 基本
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
export default {
  name: "Editor",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        plugins: [
          AutoformatPlugin,
          TextTransformationPlugin,
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          UnderlinePlugin,
          StrikethroughPlugin,
          CodePlugin,
          SubscriptPlugin,
          SuperscriptPlugin,
          IndentPlugin,
          IndentBlockPlugin,
          BlockQuotePlugin,
          CodeBlockPlugin,
          HorizontalLinePlugin,
          FontSizePlugin,
          LinkPlugin,
          ParagraphPlugin,
          HeadingPlugin,
          HighlightPlugin,
          ListPlugin,
          TodoListPlugin,
          TablePlugin,
          TableToolbarPlugin,
          TablePropertiesPlugin,
          TableCellPropertiesPlugin,
        ],

        toolbar: {
          items: [
            "heading",
            "highlight",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "code",
            "subscript",
            "superscript",
            "|",
            "fontsize",
            "bulletedList",
            "numberedList",
            "todoList",
            "insertTable",
            "|",
            "outdent",
            "indent",
            "blockQuote",
            "codeBlock",
            "|",
            "undo",
            "redo",
          ],
          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "tableCellProperties",
              "tableProperties",
            ],
          },
        },
      },
      debounceTimer: null,
    };
  },
  methods: {
    hanldeInput() {
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = setTimeout(() => {
        this.$emit("save", this.editorData);
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  max-width: 50vw;
}
</style>
