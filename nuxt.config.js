export default {
  mode: "universal",

  ssr: true,
  target: "server",
  /*
   ** Headers of the page
   */
  head: {
    title: "SMM Planet",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff3600" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "cookie-universal-nuxt",

    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.ACC_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: [
        "text/html",
        "application/xhtml+xml",
        "application/xml;q=0.9",
        "image/avif",
        "image/webp",
        "image/apng",
        "*/*",
        "application/signed-exchange",
      ],
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.ACC_API_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.ACC_API_URL,
    },
  },

  transition: {
    mode: "in-out",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
