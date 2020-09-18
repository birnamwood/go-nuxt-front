export const state = () => ({
  token: null,
})

export const actions = {
  setToken({ commit }, token) {
    commit('setToken', token )
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}