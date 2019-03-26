export default {
    namespaced: true,
    state: {
      userInfo: {},
      isReset: false,
      isResetTreeData: false,
      isResetImgList: false,
      total: 0, //周界告警详情总数
      detailInfo: {
        creationDate: "",
        taskTitle: "",
        statusCn: "",
        camera: "",
        description: ""
      } //周界标题描述
    },
    mutations: {
      setUserInfo(state, info) {
        state.userInfo = info;
      },
      setReset(state, info) {
        state.isReset = info;
      },
      setResetTree(state, info) {
        state.isResetTreeData = info;
      },
      setResetImgList(state, info) {
        state.isResetImgList = info;
      },
      setPerimeterTotal(state, data) {
        state.total = data.total
        state.detailInfo = data.detailInfo
      }
  
  
    }
  };
  
  
  
  // WEBPACK FOOTER //
  // ./src/store/components/navigation/header.js