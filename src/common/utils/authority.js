import Utils from "./common";
import {
  getCookie
} from './cookieOperator';
const AUTH_URL = Utils.getRegistry("AUTHORITY_MODULE_URL");

export async function getUserInfo() {
  return await Utils.axiosData("/environment/baseInfo", "get", {}, AUTH_URL);
}

export async function loginSys(params) {
  return await Utils.axiosData("/login", "post", params, AUTH_URL);
}

export async function logoutSys() {
  return await Utils.axiosData("/logout", "post", {}, AUTH_URL);
}

export function isLogin() {
  let loginSession = getCookie("isLogin");
  return loginSession && loginSession === "true";
}

export function authorityLogin(to, from, next) {
  let loginFlag = isLogin();
  if (!loginFlag && to.name != "login") {
    next("/login");
  } else {
    next();
  }
}
