export const state = () => ({
  bloggerData: {
    created: "",
    id: null,
    nickname: "",
    price_for_post: null,
    price_for_reels: null,
    price_for_stories: null,
    social: "",
    subscribers: null,
  },
});

export const getters = {
  bloggerData: ({ bloggerData }) => bloggerData,
};

export const mutations = {
  ADD_BLOGGER_DATA(state, data) {
    state.bloggerData = data;
  },
};

export const actions = {
  addBloggerData({ commit }, data) {
    console.log(data);
    commit("ADD_BLOGGER_DATA", data);
  },
};
