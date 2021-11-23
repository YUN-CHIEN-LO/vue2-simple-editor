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
    /* ckeditor5-font/theme/fontsize.css */
    ::v-deep .text-tiny {
      font-size: 0.7em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    ::v-deep .text-small {
      font-size: 0.85em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    ::v-deep .text-big {
      font-size: 1.4em;
    }
    /* ckeditor5-font/theme/fontsize.css */
    ::v-deep .text-huge {
      font-size: 1.8em;
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .marker-yellow {
      background-color: var(--ck-highlight-marker-yellow);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .marker-green {
      background-color: var(--ck-highlight-marker-green);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .marker-pink {
      background-color: var(--ck-highlight-marker-pink);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .marker-blue {
      background-color: var(--ck-highlight-marker-blue);
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .pen-red {
      color: var(--ck-highlight-pen-red);
      background-color: transparent;
    }
    /* ckeditor5-highlight/theme/highlight.css */
    ::v-deep .pen-green {
      color: var(--ck-highlight-pen-green);
      background-color: transparent;
    }
    ::v-deep blockquote {
      overflow: hidden;
      padding-right: 1.5em;
      padding-left: 1.5em;
      margin-left: 0;
      margin-right: 0;
      font-style: italic;
      border-left: solid 5px hsl(0, 0%, 80%);
    }
    /* ckeditor5-block-quote/theme/blockquote.css */
    ::v-deep[dir="rtl"] blockquote {
      border-left: 0;
      border-right: solid 5px hsl(0, 0%, 80%);
    }
    /* ckeditor5-basic-styles/theme/code.css */
    ::v-deep code {
      background-color: hsla(0, 0%, 78%, 0.3);
      padding: 0.15em;
      border-radius: 2px;
    }
    /* ckeditor5-table/theme/tablecaption.css */
    ::v-deep .table > figcaption {
      display: table-caption;
      caption-side: top;
      word-break: break-word;
      text-align: center;
      color: var(--ck-color-table-caption-text);
      background-color: var(--ck-color-table-caption-background);
      padding: 0.6em;
      font-size: 0.75em;
      outline-offset: -1px;
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep .table {
      margin: 0.9em auto;
      display: table;
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep .table table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      height: 100%;
      border: 1px double hsl(0, 0%, 70%);
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep .table table td,
    ::v-deep .table table th {
      min-width: 2em;
      padding: 0.4em;
      border: 1px solid hsl(0, 0%, 75%);
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep .table table th {
      font-weight: bold;
      background: hsla(0, 0%, 0%, 5%);
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep[dir="rtl"] .table th {
      text-align: right;
    }
    /* ckeditor5-table/theme/table.css */
    ::v-deep[dir="ltr"] .table th {
      text-align: left;
    }
    /* ckeditor5-media-embed/theme/mediaembed.css */
    ::v-deep .media {
      clear: both;
      margin: 0.9em 0;
      display: block;
      min-width: 15em;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list {
      list-style: none;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list li {
      margin-bottom: 5px;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list li .todo-list {
      margin-top: 5px;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label > input {
      -webkit-appearance: none;
      display: inline-block;
      position: relative;
      width: var(--ck-todo-list-checkmark-size);
      height: var(--ck-todo-list-checkmark-size);
      vertical-align: middle;
      border: 0;
      left: -25px;
      margin-right: -15px;
      right: 0;
      margin-left: 0;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label > input::before {
      display: block;
      position: absolute;
      box-sizing: border-box;
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid hsl(0, 0%, 20%);
      border-radius: 2px;
      transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background,
        250ms ease-in-out border;
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label > input::after {
      display: block;
      position: absolute;
      box-sizing: content-box;
      pointer-events: none;
      content: "";
      left: calc(var(--ck-todo-list-checkmark-size) / 3);
      top: calc(var(--ck-todo-list-checkmark-size) / 5.3);
      width: calc(var(--ck-todo-list-checkmark-size) / 5.3);
      height: calc(var(--ck-todo-list-checkmark-size) / 2.6);
      border-style: solid;
      border-color: transparent;
      border-width: 0 calc(var(--ck-todo-list-checkmark-size) / 8)
        calc(var(--ck-todo-list-checkmark-size) / 8) 0;
      transform: rotate(45deg);
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label > input[checked]::before {
      background: hsl(126, 64%, 41%);
      border-color: hsl(126, 64%, 41%);
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label > input[checked]::after {
      border-color: hsl(0, 0%, 100%);
    }
    /* ckeditor5-list/theme/todolist.css */
    ::v-deep .todo-list .todo-list__label .todo-list__label__description {
      vertical-align: middle;
    }
    /* ckeditor5-language/theme/language.css */
    ::v-deep span[lang] {
      font-style: italic;
    }
    /* ckeditor5-horizontal-line/theme/horizontalline.css */
    ::v-deep hr {
      margin: 15px 0;
      height: 4px;
      background: hsl(0, 0%, 87%);
      border: 0;
    }
    /* ckeditor5-code-block/theme/codeblock.css */
    ::v-deep pre {
      padding: 1em;
      color: hsl(0, 0%, 20.8%);
      background: hsla(0, 0%, 78%, 0.3);
      border: 1px solid hsl(0, 0%, 77%);
      border-radius: 2px;
      text-align: left;
      direction: ltr;
      tab-size: 4;
      white-space: pre-wrap;
      font-style: normal;
      min-width: 200px;
    }
    /* ckeditor5-code-block/theme/codeblock.css */
    ::v-deep pre code {
      background: unset;
      padding: 0;
      border-radius: 0;
    }
    /* ckeditor5-mention/theme/mention.css */
    ::v-deep .mention {
      background: var(--ck-color-mention-background);
      color: var(--ck-color-mention-text);
    }
  }
}
</style>
