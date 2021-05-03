export const state = () => ({
  latitude: "",
  longititude: "",
  coor: {}
});

const actions = {
  async getUser({ commit }) {
    const { data } = await this.$axios.get("https://randomuser.me/api/");
    console.log(data.results[0]);
    commit("SET_USER", data.results[0]);
  }
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

const getters = {
  user(state) {
    return state.user;
  }
};
