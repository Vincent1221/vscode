export default {
    namespaced: true,
    state: {
      webSocketChange: "",
      selectItemIndex: 0,//一级主菜单索引，界面登录后默认在人员通行界面，人员通行在第二个模块，所以该值给默认值1
      selectItemIndex2: 0,//二级主菜单索引
      svgcolor: ["#fff","#8091ac", "#8091ac","#8091ac","#8091ac"]//一级主菜单svg颜色，默认选中第二个
    },
    mutations: {
      webSocketChange(state, data) {
        state.webSocketChange = data.webSocketChange;
      },
      setSelectItemIndex(state, data) {
        state.selectItemIndex = data;
      },
      setSelectItemIndex2(state, data) {
        state.selectItemIndex2 = data
      },
      setSvgcolor(state, data) {
        state.svgcolor = data
      },
  
    }
  };
  
  
  
  // WEBPACK FOOTER //
  // ./src/store/components/navigation/navigation.js