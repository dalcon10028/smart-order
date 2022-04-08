import { OrderRepository } from '@/api';
import { displayPrice } from '@/utils/format';
import { UPDATE_ORDER_LIST, UPDATE_AMOUNT_DUE, CLEAR_ORDER } from './mutation-type';

export default {
  namespaced: true,
  state: () => ({
    orderList: [],
    amountDue: 0,
  }),
  getters: {
    orderSummary(state) {
      return `${state.orderList[0]?.product.nameKr} 포함 ${state.orderList.length}잔`;
    },
    amountSummary(state) {
      return `${displayPrice(state.amountDue)}을 결제합니다.`;
    },
  },
  mutations: {
    [UPDATE_ORDER_LIST](state, orderList) {
      state.orderList = orderList;
    },
    [UPDATE_AMOUNT_DUE](state, amountDue) {
      state.amountDue = amountDue;
    },
    [CLEAR_ORDER](state) {
      state.orderList = [];
      state.amountDue = 0;
    },
  },
  actions: {
    async order({ commit }) {
      await OrderRepository.order();
      commit(CLEAR_ORDER);
    },
  },
};
