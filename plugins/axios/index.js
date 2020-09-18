export let axios;

export default ({ store, $axios }) => {

  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
  });
    axios = $axios;
}
