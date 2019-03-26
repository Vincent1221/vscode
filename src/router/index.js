import Vue from "vue";
import Router from "vue-router";
import {
  authorityLogin
} from "@/common/utils/authority";

const carQurey = () =>
  import( /* webpackChunkName: "carQurey" */ "@/pages/mainDataMgmt/carQurey.vue"); // 车辆管理--车辆列表
const vehiclePassing = () =>
  import( /* webpackChunkName: "vehiclePassing" */ "@/pages/peopleVehicleMgmt/vehiclePassing.vue"); // 人车通行--车辆通行
const peoplePassing = () =>
  import( /* webpackChunkName: "peoplePassing" */ "@/pages/peopleVehicleMgmt/peoplePassing.vue"); // 人车通行--人员通行
const peoplePassingViewMore = () =>
  import( /* webpackChunkName: "peoplePassingViewMore" */ "@/pages/peopleVehicleMgmt/peoplePassingViewMore.vue"); // 人员异常通行历史
const vehiclePassingViewMore = () =>
  import( /* webpackChunkName: "vehiclePassingViewMore" */ "@/pages/peopleVehicleMgmt/vehiclePassingViewMore.vue"); // 车辆通行历史
const facilityMasterData = () =>
  import( /* webpackChunkName: "facilityMasterData" */ "@/pages/mainDataMgmt/facilityMasterData"); // 主数据--设施主数据
const facilityMasterDetail = () =>
  import( /* webpackChunkName: "facilityMasterDetail" */ "@/pages/mainDataMgmt/facilityMasterDetail"); // 设施主数据详情
const editFacilityMaster = () =>
  import( /* webpackChunkName: "editFacilityMaster" */ "@/pages/mainDataMgmt/editFacilityMaster"); // 设施主数据修改
const videoMonitor = () =>
  import( /* webpackChunkName: "videoMonitor" */ "@/pages/overallSecurity/videoMonitor"); // 综合安防-视频监控
const boundarySurveillance = () =>
  import( /* webpackChunkName: "boundarySurveillance" */ "@/pages/overallSecurity/boundarySurveillance"); // 综合安防-周界布控
const videoPatrolsList = () =>
  import( /* webpackChunkName: "videoPatrolsList" */ "@/pages/overallSecurity/videoPatrolsList"); // 综合安防-视频巡逻列表
const videoPatrolDetail = () =>
  import( /* webpackChunkName: "videoPatrolDetail" */ "@/pages/overallSecurity/videoPatrolDetail"); // 综合安防-视频巡逻列表详情
const videoPatrolHistory = () =>
  import( /* webpackChunkName: "videoPatrolHistory" */ "@/pages/overallSecurity/videoPatrolHistory"); // 综合安防-视频巡逻历史
const overallSituation = () =>
  import( /* webpackChunkName: "overallSituation" */ "@/pages/globalStatusMgmt/overallSituation"); // 综合安防-综合态势
const peopleMainData = () =>
  import( /* webpackChunkName: "peopleMainData" */ "@/pages/mainDataMgmt/peopleMainData"); // 人员查询--人员管理
const loginPage = () =>
  import( /* webpackChunkName: "loginPage" */ "@/pages/loginPage/loginPage"); // 登陆页
const addDataInBatches = () =>
  import( /* webpackChunkName: "addDataInBatches" */ "@/pages/mainDataMgmt/addDataInBatches"); //创建设施数据
const perimeterControlDetail = () =>
  import( /* webpackChunkName: "perimeterControlDetail" */ "@/pages/overallSecurity/perimeterControlDetail"); //周界详情
const perimeterImgList = () =>
  import( /* webpackChunkName: "perimeterImgList" */ "@/pages/overallSecurity/perimeterImgList"); //周界详情-卡片模式
const AlertDetailsMap = () =>
  import( /* webpackChunkName: "AlertDetailsMap" */ "@/pages/overallSecurity/AlertDetailsMap"); //周界详情-地图模式
const createBoundarySurveilanve = () =>
  import( /* webpackChunkName: "createBoundarySurveilanve" */ "@/pages/overallSecurity/createBoundarySurveilanve"); // 创建周界布控
const videoListMode = () =>
  import( /* webpackChunkName: "videoListMode" */ "@/pages/overallSecurity/videoListMode"); // 视频监控-列表模式
const monitorMapMode = () =>
  import( /* webpackChunkName: "monitorMapMode" */ "@/pages/overallSecurity/monitorMapMode"); // 视频监控-地图模式
const cameraAlertDetail = () =>
  import( /* webpackChunkName: "cameraAlertDetail" */ "@/components/overallSecurity/cameraAlertDetail");
const faceControls = () =>
  import(/* webpackChunkName: "faceControls" */ "@/pages/overallSecurity/faceControls"); // 综合安防-人员布控
const addFaceControl = () =>
  import(/* webpackChunkName: "addFaceControl" */ "@/pages/overallSecurity/addFaceControl"); // 综合安防-人员布控-新建人员布控
const securityEventFiles = () =>
  import(/* webpackChunkName: "securityEventFiles" */ "@/pages/overallSecurity/securityEventFiles"); // 综合安防-事件档案
const securityEventDetails = () =>
  import(/* webpackChunkName: "securityEventDetails" */ "@/pages/overallSecurity/securityEventDetails"); // 综合安防-事件档案详情
const peoplePassingAuthority = () =>
  import( /* webpackChunkName: "peoplePassingAuthority" */ "@/pages/authorityConfigure/peoplePassingAuthority"); //权限配置-人员通行权限
const vehiclePassingAuthority = () =>
  import( /* webpackChunkName: "vehiclePassingAuthority" */ "@/pages/authorityConfigure/vehiclePassingAuthority"); //权限配置-人员通行权限
const vehicleRecogniseConfigure = () =>
  import( /* webpackChunkName: "vehicleRecogniseConfigure" */ "@/pages/authorityConfigure/vehicleRecogniseConfigure"); //权限配置-人员通行权限
const videoPatrols = () =>
  import( /* webpackChunkName: "videoPatrols" */ "@/pages/overallSecurity/videoPatrols"); // 综合安防-视频巡逻
const newPatrol = () =>
  import( /* webpackChunkName: "newPatrol" */ "@/pages/overallSecurity/newPatrol"); // 综合安防-视频巡逻-新建视频巡逻

const sceneConfigure = () =>
  import( /* webpackChunkName: "sceneConfigure" */ "@/pages/authorityConfigure/sceneConfigure"); // 配置中心-场景配置
const controlDetail = () =>
  import( /* webpackChunkName: "controlDetail" */ "@/pages/overallSecurity/controlDetail"); // 人员布控详情

const userSetup = () =>
  import( /* webpackChunkName: "userSetup" */ "@/pages/loginPage/userSetup"); // 用户设置
const userManage = () =>
  import( /* webpackChunkName: "userManage" */ "@/pages/authorityConfigure/userManage"); // 用户设置
const roleConfig = () =>
  import( /* webpackChunkName: "roleConfig" */ "@/pages/authorityConfigure/roleConfig"); // 角色权限配置

const securityIncidentCenter = () =>
  import( /* webpackChunkName: "securityIncidentCenter" */ "@/pages/overallSecurity/securityIncidentCenter"); // 事件中心


Vue.use(Router);
let routerFilter = new Router({
  routes: [{
      path: "/",
      redirect: "/overallSituation"
    },
    {
      path: "/carQurey", // 车辆查询--车辆管理
      name: "carQurey",
      component: carQurey
    },
    {
      path: "/vehiclePassing", // 人车通行--车辆通行
      name: "vehiclePassing",
      component: vehiclePassing
    },
    {
      path: "/vehiclePassingViewMore", // 人车通行--车辆通行
      name: "vehiclePassingViewMore",
      component: vehiclePassingViewMore
    },
    {
      path: "/peoplePassing", // 人车通行--人员通行
      name: "peoplePassing",
      component: peoplePassing
    },
    {
      path: "/peoplePassingViewMore", // 人员异常通行历史
      name: "peoplePassingViewMore",
      component: peoplePassingViewMore
    },

    {
      path: "/facilityMasterData", // 设施主数据
      name: "facilityMasterData",
      component: facilityMasterData
    },
    {
      path: "/facilityMasterDetail/:id", // 设施主数据详情
      name: "facilityMasterDetail",
      component: facilityMasterDetail
    },
    {
      path: "/editFacilityMaster/:id", // 设施主数据修改
      name: "editFacilityMaster",
      component: editFacilityMaster
    },
    {
      path: "/videoMonitor", // 综合安防-视频监控
      name: "videoMonitor",
      component: videoMonitor,
      redirect: "/videoMonitor/videoListMode",
      children: [{
          path: "videoListMode", // 视频监控-列表模式
          name: "videoListMode",
          component: videoListMode
        },
        {
          path: "monitorMapMode", // 视频监控-地图模式
          name: "monitorMapMode",
          component: monitorMapMode
        }
      ]
    },
    {
      path: "/boundarySurveillance", // 综合安防-周界布控
      name: "boundarySurveillance",
      component: boundarySurveillance
    },
    {
      path: "/videoPatrolsList", // 综合安防-视频巡逻列表
      name: "videoPatrolsList",
      component: videoPatrolsList
    },
    {
      path: "/videoPatrolDetail", // 综合安防-视频巡逻列表
      name: "videoPatrolDetail",
      component: videoPatrolDetail
    },
    {
      path: "/videoPatrolHistory", // 综合安防-视频巡逻历史
      name: "videoPatrolHistory",
      component: videoPatrolHistory
    },
    {
      path: "/overallSituation", // 综合安防-综合态势
      name: "overallSituation",
      component: overallSituation
    },
    {
      path: "/peopleMainData", // 人员查询--人员管理
      name: "peopleMainData",
      component: peopleMainData
    },
    {
      path: "/login", // 登陆页
      name: "login",
      component: loginPage
    },
    {
      path: "/addDataInBatches", // 创建设施数据
      name: "addDataInBatches",
      component: addDataInBatches
    },
    {
      path: "/perimeterControlDetail", // 周界详情
      name: "perimeterControlDetail",
      component: perimeterControlDetail,
      redirect: "/perimeterControlDetail/perimeterImgList",
      children: [{
          path: "perimeterImgList", // 周界详情-卡片模式
          name: "perimeterImgList",
          component: perimeterImgList
        },
        {
          path: "AlertDetailsMap", // 周界详情-地图模式
          name: "AlertDetailsMap",
          component: AlertDetailsMap
        }
      ]
    },
    {
      path: "/createBoundarySurveilanve", // 创建周界布控
      name: "createBoundarySurveilanve",
      component: createBoundarySurveilanve
    },
    {
      path: "/cameraAlertDetail", // test
      name: "cameraAlertDetail",
      component: cameraAlertDetail
    },
    {
      path: "/faceControls", // 综合安防-人员布控
      name: "faceControls",
      component: faceControls
    },
    {
      path: "/securityEventFiles", // 综合安防-事件档案
      name: "securityEventFiles",
      component: securityEventFiles
    },
    {
      path: "/securityEventDetails", // 综合安防-事件档案详情
      name: " securityEventDetails",
      component:  securityEventDetails
    },
    {
      path: '/addFaceControl', // 综合安防-人员布控-新建人员布控
      name: 'addFaceControl',
      component: addFaceControl
    },
    {
      path: '/controlDetail/:id',
      name: 'controlDetail',
      component: controlDetail

    },
    {
      path: '/newPatrol', // 综合安防-视频巡逻-新建视频巡逻
      name: 'newPatrol',
      component: newPatrol
    },
    {
      path: "/videoPatrols", // 综合安防-视频巡逻
      name: "videoPatrols",
      component: videoPatrols
    },
    {
      path: "/peoplePassingAuthority", //人员通行权限
      name: "peoplePassingAuthority",
      component: peoplePassingAuthority
    },
    {
      path: "/vehiclePassingAuthority", //人员通行权限
      name: "vehiclePassingAuthority",
      component: vehiclePassingAuthority
    },
    {
      path: "/vehicleRecogniseConfigure", //人员通行权限
      name: "vehicleRecogniseConfigure",
      component: vehicleRecogniseConfigure
    },
    {
      path: "/sceneConfigure", //场景配置
      name: "sceneConfigure",
      component: sceneConfigure
    },
    {
      path: "/userSetup", // 用户设置
      name: "userSetup",
      component: userSetup
    },
    {
      path: "/userManage", // 用户管理
      name: "userManage",
      component: userManage
    },
    {
      path: "/roleConfig", // 用户权限配置
      name: "roleConfig",
      component: roleConfig
    },
    {
      path: "/securityIncidentCenter", // 事件中心
      name: "securityIncidentCenter",
      component: securityIncidentCenter
    }
  ]
});
routerFilter.beforeEach((to, from, next) => {
  // 导航钩子，全局钩子
  authorityLogin(to, from, next);
});
export default routerFilter;



// WEBPACK FOOTER //
// ./src/router/index.js