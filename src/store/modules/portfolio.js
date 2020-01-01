const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({ id: stockId, quantity: quantity });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds -= stockPrice * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    console.log(state.stocks);
    return state.stocks.map(stock => {
      const record = getters.stocks.find(stock => stock.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
