export const state = () => ({
  users: [
    {
      name: "Блогер",
      role: "blogger",
      isActive: true,
      routerName: "/account/blogger.profile",
    },
    {
      name: "Рекламодатель",
      role: "advertiser",
      isActive: false,
      routerName: "/account",
    },
  ],

  bloggerMenu: [
    {
      name: "Профиль",
      isActive: true,
      routerName: "/account/blogger.profile",
    },
    {
      name: "Финансы",
      isActive: false,
      routerName: "/account/blogger.finance",
    },
    {
      name: "Заказы",
      isActive: false,
      routerName: "/account/blogger.orders",
    },
    {
      name: "Чат",
      isActive: false,
      routerName: "/account/blogger.chat",
    },
  ],

  advertiserMenu: [
    {
      name: "Профиль",
      isActive: true,
      routerName: "/account/advertiser.profile",
    },
    {
      name: "Финансы",
      isActive: false,
      routerName: "/account/advertiser.finance",
    },
    {
      name: "Заказы",
      isActive: false,
      routerName: "/account/advertiser.orders/",
    },
    {
      name: "Чат",
      isActive: false,
      routerName: "/account/advertiser.chat",
    },
  ],
});

export const getters = {
  users: ({ users }) => users,
  bloggerMenu: ({ bloggerMenu }) => bloggerMenu,
  advertiserMenu: ({ advertiserMenu }) => advertiserMenu,
};

export const mutations = {
  SET_USER_STATUS({ users }, role) {
    users.forEach((el) => {
      el.isActive = false;
      if (el.role === role) {
        el.isActive = true;
      }
    });
  },

  SET_BLOgGER_MENU_STATUS({ bloggerMenu }, name) {
    bloggerMenu.forEach((el) => {
      el.isActive = false;
      if (el.name === name) {
        el.isActive = true;
      }
    });
  },

  SET_BLOgGER_MENU_ROUTER({ users }, routerName) {
    users.forEach((el) => {
      if (el.name === "Блогер") {
        el.routerName = routerName;
      }
    });
  },

  SET_ADVERTISER_MENU_STATUS({ advertiserMenu }, name) {
    advertiserMenu.forEach((el) => {
      el.isActive = false;
      if (el.name === name) {
        el.isActive = true;
      }
    });
  },

  SET_ADVERTISER_MENU_ROUTER({ users }, routerName) {
    users.forEach((el) => {
      if (el.name === "Рекламодатель") {
        el.routerName = routerName;
      }
    });
  },
};

export const actions = {
  setUserStatus({ commit }, role) {
    commit("SET_USER_STATUS", role);
  },

  setBloggerMenuStatus({ commit }, name) {
    commit("SET_BLOgGER_MENU_STATUS", name);
  },

  setBloggerMenuRouter({ commit }, routerName) {
    commit("SET_BLOgGER_MENU_ROUTER", routerName);
  },

  setAdvertiserMenuStatus({ commit }, name) {
    commit("SET_ADVERTISER_MENU_STATUS", name);
  },

  setAdvertiserMenuRouter({ commit }, routerName) {
    commit("SET_ADVERTISER_MENU_ROUTER", routerName);
  },
};
