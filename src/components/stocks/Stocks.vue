<template>
  <div>
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      :name="stock.name"
      :price="stock.price"
    ></Stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
  components: { Stock },
  data() {
    return {
      stocks: [
        { id: 3, name: 'Microsoft', price: 232 },
        { id: 3, name: 'Twitter', price: 523 },
        { id: 1, name: 'Bmw', price: 100 },
        { id: 2, name: 'Google', price: 342 }
      ]
    };
  }
};
</script>

<style></style>
