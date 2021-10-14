/* eslint-disable */

import Vue from "vue";
import axios from "axios";

const config = {
  timeout: 15000,
};

const _axios = axios.create(config);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
