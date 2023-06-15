export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    config.headers.delete["X-Csrftoken"] = store.state.csrftoken;
    config.headers.delete["X-Requested-With"] = "XMLHttpRequest";
    config.headers.put["X-Csrftoken"] = store.state.csrftoken;
    config.headers.put["X-Requested-With"] = "XMLHttpRequest";
    config.headers.patch["X-Csrftoken"] = store.state.csrftoken;
    config.headers.patch["X-Requested-With"] = "XMLHttpRequest";
    config.headers.post["X-Csrftoken"] = store.state.csrftoken;
    config.headers.post["X-Requested-With"] = "XMLHttpRequest";
  });
}
