<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>{{ stock.price }}US$ | Quantity {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            v-model="quantity"
            class="form-control"
            placeholder="Quantity"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="handleSellStock"
            :disabled="quantity <= 0"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(['sellStock']),
    handleSellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  }
};
</script>

<style></style>
