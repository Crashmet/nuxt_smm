export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    config.headers.common["X-Csrftoken"] = store.state.csrftoken;
    config.headers.common["X-Requested-With"] = "XMLHttpRequest";
  });
}
