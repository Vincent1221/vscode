import noDataShowContent from "@/components/common/noDataShowContent.vue";
import errorMessage from "@/components/common/errorMessage.vue";
import svgIcon from "@/components/common/svgIcon.vue";
import navBreadCrumb from "@/components/common/navBreadCrumb.vue";
import maskLayer from "@/components/common/maskLayer";
export default {
  install(Vue) {
    Vue.component("noDataShowContent", noDataShowContent);// noData没数据显示
    Vue.component("errorMessage", errorMessage);// 消息弹出框
    Vue.component("svgIcon", svgIcon);// SVG图标
    Vue.component("navBreadcrumb", navBreadCrumb); // 头部导航面包屑
    Vue.component("maskLayer", maskLayer); // 遮罩层
  }
};


// WEBPACK FOOTER //
// ./src/common/utils/commonComponent.js