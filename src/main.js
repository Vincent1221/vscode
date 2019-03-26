// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueI18n from "vue-i18n";
import store from "./store";
import VueBus from "vue-bus";
import "element-ui/lib/theme-chalk/index.css";
import elementUI from "element-ui";
import echarts from "echarts";
import commonComponent from "@/common/utils/commonComponent"; // 公用全局组件引入
import { getUserInfo } from "@/common/utils/authority"; // 权限相关
import { mapMutations } from "vuex";
import { getCookie, setCookie } from "@/common/utils/cookieOperator.js";

Vue.use(VueI18n);
Vue.use(elementUI);
Vue.use(commonComponent);
Vue.use(VueBus);
Vue.use(echarts);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: sessionStorage.getItem("i18n-lang") || "zh-CN",
  messages: {
    "zh-CN": require("./i18n/lang/cn.js"),
    "en-US": require("./i18n/lang/en.js")
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App :themePath="themePath" />',
  data() {
    return {
      themePath: "login"
    };
  },
  watch: {
    $route: "watchRouter"
  },
  methods: {
    ...mapMutations("header", ["setUserInfo"]),
    watchRouter(e) {
      let loginSession = getCookie("isLogin");
      if (!loginSession || loginSession == "false") {
        this.$router.push("/login");
      } else {
        this.checkLogin();
      }
      this.themePath = this.$route.name;
    },
    checkLogin() {
      getUserInfo()
        .then(data => {
          this.setUserInfo(data.data);
        })
        .catch(err => {
          console.log("getUserInfo.error======>", err.message);
          let expireDays = 1000 * 60 * 60;
          setCookie("isLogin", false, expireDays);
          this.$router.push("/login");
        })
        .then(data => {
          this.themePath = this.$route.name;
        });
    }
  }
});



// WEBPACK FOOTER //
// ./src/main.js