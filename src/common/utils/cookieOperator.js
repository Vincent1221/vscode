import { get } from "http";

//设置cookie
function setCookie(c_name, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    "=" +
    escape(value) +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie
//参数name为cookie的key,返回结果为value值(数组).
function getCookie(target, flag = true) {
  let arr,
    reg = new RegExp("(^|)" + target + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

//删除cookie
function delCookie(name) {
  // let exp = new Date();
  // exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  // console.log("cookie before delete is " + document.cookie)
  //将cookie的expires设置为当前会话之前的时间点(GMT格式),该cookie就自动被销毁了.
  if (cval != null) {
    document.cookie =
      name + "=" + cval[0] + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // console.log("cookie after delete is " + document.cookie)
  }
}

export { setCookie, getCookie, delCookie };



// WEBPACK FOOTER //
// ./src/common/utils/cookieOperator.js