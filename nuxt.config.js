export default {
  mode: "universal",

  ssr: true,
  target: "server",
  /*
   ** Headers of the page
   */
  head: {
    title: "Media market",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
    ],
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
  plugins: ["@/plugins/axios"],
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
      Accept: "*/*",
      // credentials: "include",
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
