export const state = () => ({
  users: [
    {
      name: "Блогер",
      role: "blogger",
      isActive: true,
      routerName: "/account/bloger.profile",
    },
    {
      name: "Рекламодатель",
      role: "advertiser",
      isActive: false,
      routerName: "/account",
    },
  ],

  blogerMenu: [
    {
      name: "Профиль",
      isActive: true,
      routerName: "/account/bloger.profile",
    },
    {
      name: "Финансы",
      isActive: false,
      routerName: "/account/bloger.finance",
    },
    {
      name: "Заказы",
      isActive: false,
      routerName: "/account/bloger.orders",
    },
    {
      name: "Чат",
      isActive: false,
      routerName: "/account/bloger.chat",
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
  blogerMenu: ({ blogerMenu }) => blogerMenu,
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

  SET_BLOGER_MENU_STATUS({ blogerMenu }, name) {
    blogerMenu.forEach((el) => {
      el.isActive = false;
      if (el.name === name) {
        el.isActive = true;
      }
    });
  },

  SET_BLOGER_MENU_ROUTER({ users }, routerName) {
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

  setBlogerMenuStatus({ commit }, name) {
    commit("SET_BLOGER_MENU_STATUS", name);
  },

  setBlogerMenuRouter({ commit }, routerName) {
    commit("SET_BLOGER_MENU_ROUTER", routerName);
  },

  setAdvertiserMenuStatus({ commit }, name) {
    commit("SET_ADVERTISER_MENU_STATUS", name);
  },

  setAdvertiserMenuRouter({ commit }, routerName) {
    commit("SET_ADVERTISER_MENU_ROUTER", routerName);
  },
};
