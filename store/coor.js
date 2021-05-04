export const state = () => ({
  latitude: "",
  longititude: "",
  coor: {}
});

const actions = {
  async getCoor({ commit }) {
    const { data } = await this.$axios.get("https://randomuser.me/api/");
    console.log(data.results[0]);
    commit("SET_COOR", data.results[0]);
  }
};

const mutations = {
  SET_COOR(state, coor) {
    state.coor = coor;
  }
};

const getters = {
  coor(state) {
    return state.coor;
  }
};
