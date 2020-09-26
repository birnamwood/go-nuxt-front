export const state = () => ({
  token: null,
})

export const actions = {
  setToken({ commit }, token) {
    commit('setToken', token )
  },
  resetToken({ commit }) {
    commit('resetToken')
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  resetToken(state) {
    state.token = null;
  }
}