import Vue from "vue";
import Vuex from "vuex";
import header from "./components/navigation/header";
import navigation from "./components/navigation/navigation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
    navigation,
  }
});



// WEBPACK FOOTER //
// ./src/store/index.js