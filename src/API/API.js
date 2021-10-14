import Vue from "vue";

export const get = async (url, params = {}) => {
  return await Vue.axios.get(`${process.env.VUE_APP_ENDPOINT}${url}`, {
    params,
  });
};
