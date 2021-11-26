<template>
  <div id="app">
    <div class="router">
      <router-link class="router__link" to="/">Home</router-link> |
      <router-link class="router__link" to="/test">Test</router-link> |
      <router-link class="router__link" to="/ck-editor">CKEditor</router-link> |
      <router-link class="router__link" to="/tiny-mce">TinyMce</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.router {
  padding: 10px;
  &__link {
    padding: 10px;
    text-decoration: none;
    font-size: 24px;
  }
}
</style>
