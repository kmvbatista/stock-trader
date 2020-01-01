<template>
  <div>
    <Stock
      v-for="stock in stockPortfolio"
      :stock="stock"
      :key="stock.id"
    ></Stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters(['stockPortfolio'])
  },
  components: {
    Stock
  }
};
</script>

<style></style>
