<template>
  <div id="app" :class="themeClass">
    <transition enter-active-class="animated fadeIn">
      <div class="login-page" v-if="!hasLogin">
        <router-view></router-view>
      </div>
    </transition>
    <transition enter-active-class="animated zoomIn">
      <navigation @changeTheme="changeTheme" v-if="hasLogin" :menu="menu">
        <router-view></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
import navigation from "@/components/navigation/navigation";
import commonUtils from "@/common/utils/common";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "App",
  props: {
    themePath: {
      type: String,
      default: () => "login"
    }
  },
  components: {
    navigation
  },
  data() {
    return {
      themeClass: "dark",
      temsvgcolor: [],
      modulesArr: {
        globalStatusMgmt: [0, "overallSituation"],
        overallSecurity: [
          1,
          "videoMonitor",
          // "securityEventFiles",
          "boundarySurveillance",
          "perimeterControlDetail",
          "faceControls",
          "faceControlDetails",
          "videoPatrols",
          "videoPatrolsList",
          "videoPatrolDetail",
          "videoPatrolHistory",
          // "securityIncidentCenter",
        ],
        peopleVehicleMgmt: [
          2,
          "peoplePassing",
          "vehiclePassing",
          "peoplePassingViewMore",
          "vehiclePassingViewMore",
          "peoplePassingAuthority",
          "vehiclePassingAuthority",
          "vehicleRecogniseConfigure"
        ],
        mainDataMgmt: [3, "peopleMainData", "facilityMasterData", "carQurey"],
        systemConfiguration: [4, "sceneConfigure"]
      },
      menu: [
        {
          title: this.$t("message.globalStatus"),
          menu: [
            {
              label: this.$t("message.globalStatus"),
              target: "/overallSituation",
              mirrorPath: ["overallSituation"]
            }
          ],
          iconNormal: "icon_Statistics"
        },
        {
          title: this.$t("message.globalSecurity"),
          iconNormal: "icon_security",
          menu: [
            {
              label: this.$t("message.realtimeMonitor"),
              target: "/videoMonitor/videoListMode",
              mirrorPath: ["videoMonitor", "videoListMod"]
            },
            //  {
            //   label: this.$t("message.securityEventFiles"),
            //   target: "/securityEventFiles",
            //   mirrorPath: ["securityEventFiles"]
            // },
            {
              label: this.$t("message.boundarySurveillance"),
              target: "/boundarySurveillance",
              mirrorPath: [
                "boundarySurveillance",
                "perimeterControlDetail",
                "AlertDetailsMap"
              ]
            },
            {
              label: this.$t("message.faceControls"),
              target: "/faceControls",
              mirrorPath: ["faceControls", "faceControlDetails"]
            },
            {
              label: this.$t("message.videoPatrols"),
              target: "/videoPatrols",
              mirrorPath: ["videoPatrols"]
            },
            {
              label: this.$t("message.videoPatrolList"),
              target: "/videoPatrolsList",
              mirrorPath: ["videoPatrolsList", "videoPatrolDetail"]
            },
            {
              label: this.$t("message.videoPatrolHistory"),
              target: "/videoPatrolHistory",
              mirrorPath: ["videoPatrolHistory"]
            },
            // {
            //   label: this.$t("message.securityIncidentCenter"),
            //   target: "/securityIncidentCenter",
            //   mirrorPath: ["securityIncidentCenter"]
            // }
          ]
        },
        {
          title: this.$t("message.peopleVehicleMgmt"),
          menu: [
            {
              label: this.$t("message.manPass"),
              target: "/peoplePassing",
              mirrorPath: ["peoplePassing"]
            },
            {
              label: this.$t("message.carPass"),
              target: "/vehiclePassing",
              mirrorPath: ["vehiclePassing"]
            },
            {
              label: this.$t("message.manPassHistory"),
              target: "/peoplePassingViewMore",
              mirrorPath: ["peoplePassingViewMore"]
            },
            {
              label: this.$t("message.carPassHistory"),
              target: "/vehiclePassingViewMore",
              mirrorPath: ["vehiclePassingViewMore"]
            },
            {
              label: this.$t("message.peoplePassAuthority"),
              target: "/peoplePassingAuthority",
              mirrorPath: ["peoplePassingAuthority"]
            },
            {
              label: this.$t("message.vehiclePassAuthority"),
              target: "/vehiclePassingAuthority",
              mirrorPath: ["vehiclePassingAuthority"]
            },
            {
              label: this.$t("message.vehicleRegConfigure"),
              target: "/vehicleRecogniseConfigure",
              mirrorPath: ["vehicleRecogniseConfigure"]
            }
          ],
          iconNormal: "icon_pass"
        },
        {
          title: this.$t("message.masterData"),
          menu: [
            {
              label: this.$t("message.personMasterData"),
              target: "/peopleMainData",
              mirrorPath: ["peopleMainData"]
            },
            {
              label: this.$t("message.facilityMasterData"),
              target: "/facilityMasterData",
              mirrorPath: ["facilityMasterData"]
            },
            {
              label: this.$t("message.carsQurey"),
              target: "/carQurey",
              mirrorPath: ["carQurey"]
            }
          ],
          iconNormal: "icon_data"
        },
        {
          title: this.$t("message.configurationCenter"),
          iconNormal: "icon_system",
          menu: [
            {
              label: this.$t("message.sceneConfigure"),
              target: "/sceneConfigure",
              mirrorPath: ["sceneConfigure"]
            },
            // {
            //   label: this.$t("message.RolePermissionConfiguration"),
            //   target: "/roleConfig",
            //   mirrorPath: ["roleConfig"]
            // },
            // {
            //   label: this.$t("message.userManage"),
            //   target: "/userManage",
            //   mirrorPath: ["userManage"]
            // }
          ]
        }
      ]
    };
  },
  computed: {
    hasLogin() {
      return this.themePath !== "login";
    },
    ...mapState("navigation", {
      svgcolor: state => state.svgcolor
    }),
    ...mapState("navigation", {
      selectItemIndex: state => state.selectItemIndex
    }),
    ...mapState("navigation", {
      selectItemIndex2: state => state.selectItemIndex2
    })
  },
  watch: {
    $route(item) {
      let tempindex1 = "";
      let tempindex2 = "";
      console.log("watchrouteitem", item);
      let routepatharr = item.path.split("/");
      // let firstParent = item.matched[0].name; //一级路由名
      let firstParent = routepatharr[1]; //一级路由名
      console.log("一级路由名", firstParent);
      // if (firstParent !== "login") {
      let len = item.matched.length;
      for (let key in this.modulesArr) {
        let result = this.modulesArr[key].indexOf(firstParent);
        if (result !== -1) {
          tempindex1 = this.modulesArr[key][0];
        }
      }
      if (tempindex1 === "") return;
      console.log("tempindex1", tempindex1);
      this.setSelectItemIndex(tempindex1);
      let newChild = this.menu[tempindex1].menu; //二级菜单数组
      let childLen = newChild.length;
      let childname = firstParent; //路由路径，带斜杠/，为了跟第二级menu数组target匹配
      for (let i = 0; i < childLen; i++) {
        if (newChild[i].mirrorPath.indexOf(childname) !== -1) {
          tempindex2 = i;
        }
      }
      console.log("tempindex2", tempindex2);
      this.setSelectItemIndex2(tempindex2);
      this.changeBGcolor();
      // }
    },
    selectItemIndex() {
      this.changeBGcolor();
    },
    selectItemIndex2() {
      this.changeBGcolor();
    }
  },
  methods: {
    changeTheme() {},
    ...mapMutations("navigation", [
      "setSelectItemIndex",
      "setSelectItemIndex2",
      "setSvgcolor"
    ]),
    changeBGcolor() {
      let len = this.svgcolor.length;
      for (let i = 0; i < len; i++) {
        if (i === this.selectItemIndex) {
          this.temsvgcolor[i] = "#fff";
        } else {
          this.temsvgcolor[i] = "#8091ac";
        }
      }
      this.setSvgcolor(this.temsvgcolor);
    }
  },

  mounted() {
    commonUtils.setRemOnresize();
  },
  beforeDestroy() {
    commonUtils.removeRemResizeEvent();
  }
};
</script>

<style lang="less">
@import "./less/app.less";
</style>
