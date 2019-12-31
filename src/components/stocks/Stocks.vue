<template>
  <div>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
  components: { Stock },
  data() {
    return {
      stocks: []
    };
  }
};
</script>

<style></style>
