<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header></Header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
