const env = _ENV_; // eslint-disable-line
const SERVER_URLS = {
  DEV: "/service", // 开发环境
  BETA: "/service", // 测试环境
  PROD: "/service", // 外网环境
  WEBSOCKET: "http://100.101.24.106:9095", // websoket
  fileUrl: "http://10.98.7.22:9092", //文件系统
  GIS_URL: "http://114.116.84.93:8090" //GIS系统
};
// 开发环境
let BASEURL = SERVER_URLS.DEV; // 开发服务器IP
let WSURL = SERVER_URLS.WEBSOCKET; // WEBSOCKET
let isDevelope; // 切换服务器与本地开发代理
if (env === "localhost") {
  isDevelope = false; // 开发时切换连接本地ip还是开发服务器ip
} else {
  BASEURL = SERVER_URLS[env]; // 打包部署多环境ip
  isDevelope = false; // 切换服务器与本地开发代理
}
const PORTS = {
  authmgmt: "", // 鉴权登录模块--zuul 8080(公有云)
  videomgmt: "/video", // 视频播放模块9090
  safetymgmt: "/safety", // 安防模块9091
  filemgmt: "/file", // 文件上传微服务9092
  vehiclemgmt: "/vehicle", // 车辆管理微服务9093
  websocket: "/websocket", // 长连接微服务9095
  personmgmt: "/person", // 人员管理微服务9096
  equipmentmgmt: "/equipment", // 设备管理微服务9097
  reportmgmt: "/report", // 报表管理微服务9098
  basemgmt: "/base", // 主数据微服务9196
  intrusionmgmt: "/intrusion", // 周界布控微服务9100
  growthmgmt: "/growth", //场景配置--每日成长日记7000
  facecontrolmgmt: "/distributioncontrol" //场景配置--每日成长日记7000
};
let sysRegistry;
if (isDevelope) {
  // 开发环境
  sysRegistry = {
    AUTHORITY_MODULE_URL: `${BASEURL}${PORTS.authmgmt}`, // 鉴权登录模块
    VIDEOMGMT_MODULE_URL: `${BASEURL}${PORTS.videomgmt}`, // 视频播放模块
    SAFETYMGMT_MODULE_URL: `${BASEURL}${PORTS.safetymgmt}`, // 安防模块
    FILEMGMT_MODULE_URL: `${BASEURL}${PORTS.filemgmt}`, // 文件上传微服务
    WEBSOCKET_MODULE_URL: `${WSURL}${PORTS.websocket}`, // 长连接微服务
    BASEMGMT_MODULE_URL: `${BASEURL}${PORTS.basemgmt}`, // 主数据微服务
    EQUIPMENTMGMT_MODULE_URL: `${BASEURL}${PORTS.equipmentmgmt}`, // 设备管理微服务
    REPORTMGMT_MODULE_URL: `${BASEURL}${PORTS.reportmgmt}`, // 报表管理微服务
    VEHICLEMGMT_MODULE_URL: `${BASEURL}${PORTS.vehiclemgmt}`, // 车辆管理微服务
    PERSONMGMT_MODULE_URL: `${BASEURL}${PORTS.personmgmt}`, // 人员管理微服务
    INTRUSIONMGMT_MODULE_URL: `${BASEURL}${PORTS.intrusionmgmt}`, // 周界布控微服务
    GROWTH_MODULE_URL: `${BASEURL}${PORTS.growthmgmt}`,//场景配置--每日成长日记7000
    FACECONTROL_MODULE_URL: `${BASEURL}${PORTS.facecontrolmgmt}`,//布控
    GIS_MODULE_URL: `${SERVER_URLS.GIS_URL}`,
    TSINGLAN_MAP: "http://114.116.69.73:8090/iserver/services/map-QLSXX3/rest/maps/",
    WEB_TITLE: "清澜山校园智慧运营中心",
    WEB_LOGIN: "Tsinglan",
    GET_UPLOADIMG: "/getUploadImg",
    fileUrl: `${BASEURL.slice(0, -5)}:9092`
  };
} else {
  // 内网部署环境
  sysRegistry = {
    AUTHORITY_MODULE_URL: `${BASEURL}${PORTS.authmgmt}`, // 鉴权登录模块
    VIDEOMGMT_MODULE_URL: `${BASEURL}${PORTS.videomgmt}`, // 视频播放模块
    SAFETYMGMT_MODULE_URL: `${BASEURL}${PORTS.safetymgmt}`, // 安防模块
    FILEMGMT_MODULE_URL: `${BASEURL}${PORTS.filemgmt}`, // 文件上传微服务
    WEBSOCKET_MODULE_URL: `${WSURL}${PORTS.websocket}`, // 长连接微服务
    BASEMGMT_MODULE_URL: `${BASEURL}${PORTS.basemgmt}`, // 主数据微服务
    EQUIPMENTMGMT_MODULE_URL: `${BASEURL}${PORTS.equipmentmgmt}`, // 设备管理微服务
    REPORTMGMT_MODULE_URL: `${BASEURL}${PORTS.reportmgmt}`, // 报表管理微服务
    VEHICLEMGMT_MODULE_URL: `${BASEURL}${PORTS.vehiclemgmt}`, // 车辆管理微服务
    PERSONMGMT_MODULE_URL: `${BASEURL}${PORTS.personmgmt}`, // 人员管理微服务
    INTRUSIONMGMT_MODULE_URL: `${BASEURL}${PORTS.intrusionmgmt}`, // 周界布控微服务
    GROWTH_MODULE_URL: `${BASEURL}${PORTS.growthmgmt}`,//场景配置--每日成长日记7000
    FACECONTROL_MODULE_URL: `${BASEURL}${PORTS.facecontrolmgmt}`,//布控
    GIS_MODULE_URL: `${SERVER_URLS.GIS_URL}`,
    TSINGLAN_MAP: "http://114.116.69.73:8090/iserver/services/map-QLSXX3/rest/maps/",
    WEB_TITLE: "清澜山校园智慧运营中心",
    WEB_LOGIN: "Tsinglan",
    GET_UPLOADIMG: `${SERVER_URLS.fileUrl}`, // 获取已上传的图片
    fileUrl: `${BASEURL}${PORTS.filemgmt}`
  };
}
export {
  sysRegistry
};



// WEBPACK FOOTER //
// ./src/common/registry/sysRegistry.js