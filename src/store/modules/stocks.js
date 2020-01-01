import stocks from '../../data/stocks';

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {}
};

const actions = {
  buyStock: ({ commit }, order) => {},
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: () => {
    return stocks;
  }
};

export default {
  stocks,
  mutations,
  actions,
  getters
};
