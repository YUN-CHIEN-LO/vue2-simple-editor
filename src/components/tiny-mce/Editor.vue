<template>
  <div class="editor">
    <h1>EDITOR</h1>
    <editor
      v-model="content"
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: 'table',
        plugins: [
          'template advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen table',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'template | undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | \
           bullist numlist outdent indent | removeformat | help',
        templates: [
          {
            title: 'Column',
            description: 'A template of column',
            content: `<div class='mceTmpl'>
                        <p></p>
                        <div>
                          <div style='display: inline-block; vertical-align: top; width: 49%; padding-right: 10px; box-sizing: border-box'>
                            <p></p>
                          </div>
                          <div style='display: inline-block; vertical-align: top; width: 49%; padding-left: 10px; box-sizing: border-box'>
                            <p></p>
                          </div>
                        </div>
                        <p></p>
                      </div>`,
          },
          {
            title: 'Table',
            description: 'A template of table',
            content: `<div class='mceTmpl'>
                        <table width='98%' border='0' cellspacing='0' cellpadding='0'>
                          <tr>
                            <th scope='col'> </th>
                            <th scope='col'> </th>
                          </tr>
                          <tr>
                            <td> </td>
                            <td> </td>
                          </tr>
                        </table>
                      </div>`,
          },
        ],
        content_css: 'template',
      }"
      @input="handleChange"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "Editor",
  components: {
    editor: Editor,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("change", this.content);
    },
  },
};
</script>

<style lang="scss"></style>
