import axios from "axios";

//  设置请求头
const AXIOS = axios.create({
  timeout: 20000, // 请求超时时间
  header: {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    withCredentials: true,
    "Cache-Control": "no-cache",
    Pragma: "no-cache"
  }
});

// 创建 request拦截器
AXIOS.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 创建response 拦截器
AXIOS.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;

        case 403:
          error.message = "权限不足,请联系管理员";
          break;

        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;

        case 500:
          error.message = error.response.data.errorMsg;
          break;

        case 511:
          error.message = `需要登录: ${error.response.data.errorMsg}`;
          if (location.hash != "#/login") {
            location.href = location.origin + "/#/login";
            console.log("SESSION失效，请重新登录");
          }
          break;
        default:
          error.message = "服务器内部错误";
      }
    }
    return Promise.reject(error);
  }
);

//  数据字典
const sysRegistry = require("../registry/sysRegistry.js");

let commonUtils = {
  axiosData: function (url, method, params, baseURL, ...configHead) {
    let config = {
      url: url,
      baseURL
    };
    method = method.toLowerCase();
    switch (method) {
      case "get":
        config.params = params;
        break;
      case "post":
        config.data = params;
        config.method = method;

        if (configHead[0]) {
          if (configHead[0].responseType) {
            config.responseType = configHead[0]["responseType"];
          } else {
            config.header = configHead[0];
            config.onUploadProgress = configHead[1];
          }
        }
        break;
      case "delete":
        config.data = params;
        config.method = method;
        break;
      case "put":
        config.data = params;
        config.method = method;
        break;
      default:
        break;
    }
    return new Promise(function (resolve, reject) {
      AXIOS.request(config)
        .then(response => {
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  },

  getRegistry: function (key) {
    return sysRegistry.sysRegistry[key];
  },

  objectToQueryString: function (query) {
    let urlQuery = "";
    for (let key in query) {
      urlQuery += `&${key}=${query[key]}`;
    }
    urlQuery = urlQuery.substr(1);
    return urlQuery;
  },

  recalc: function () {
    let docEl = document.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 16 * (clientWidth / 1920) + "px";
  },

  setRemOnresize: function () {
    let resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";

    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, this.recalc, false);
    document.addEventListener("DOMContentLoaded", this.recalc, false);
  },

  removeRemResizeEvent: function () {
    window.removeEventListener("orientationchange", this.recalc);
    window.removeEventListener("resize", this.recalc);
    document.removeEventListener("DOMContentLoaded", this.recalc);
  },
  // 多张图片压缩
  photoCompress: function (file, settingObj, NUM) {
    let _this = this;
    console.log(`压缩前${(file.size / 1024 / 1024).toFixed(2)}M`);
    return new Promise((resolve, reject) => {
      // 图片小于300k不压缩
      if (file.size < Math.pow(1024, 2) * 0.3) {
        resolve(file);
      } else {
        let stardate = new Date();
        console.log(`单张第${NUM+1}压缩开始",${stardate.getMinutes()}:${stardate.getSeconds()}:${stardate.getMilliseconds()}`);
        let ready = new FileReader();
        let fileType = file.type;
        /*开始读取指定的File对象中的内容. 当读取操作完成时,调用onload*/
        ready.readAsDataURL(file);
        ready.onload = function () {
          // 此result已经是base64格式
          let newResult = this.result;
          let img = new Image();
          img.src = newResult;
          img.onload = async function () {
            let that = this;
            // 默认按比例压缩
            let imgWidth = settingObj.width || this.width;
            let imgHeight = settingObj.height || this.height;
            let quality = 0.7; // 默认图片质量为0.7
            console.log("图片真实宽高", "imgWidth", imgWidth, "imgHeight", imgHeight);
            imgWidth > 1920 ? imgWidth = 1920 : imgWidth = imgWidth;
            imgHeight > 1080 ? imgHeight = 1080 : imgHeight = imgHeight;
            console.log("压缩后宽高", "imgWidth", imgWidth, "imgHeight", imgHeight);
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            // 创建属性节点
            let canWidth = document.createAttribute("width");
            let canHeight = document.createAttribute("height");
            canWidth.nodeValue = imgWidth;
            canHeight.nodeValue = imgHeight;
            canvas.setAttributeNode(canWidth);
            canvas.setAttributeNode(canHeight);
            //铺底色 PNG转JPEG时透明区域会变黑色
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, imgWidth, imgHeight);
            ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
            // 图像质量
            if (settingObj.quality && settingObj.quality <= 1 && settingObj.quality > 0) {
              quality = settingObj.quality;
            }
            // quality值越小，所绘制出的图像越模糊
            let base64 = canvas.toDataURL("image/jpeg", quality);
            // 返回base64转FILE的值
            console.log(
              `原图${NUM+1}大小————${(newResult.length / 1024 / 1024).toFixed(2)}M`,
              `新图${NUM+1}大小————${(base64.length / 1024 / 1024).toFixed(
                2
              )}M`
            );
            // 回调函数返回base64的值
            let newFile = _this.convertBase64UrlToFile(base64, file.name);
            let enddate = new Date();
            console.log(
              `单张第${NUM+1}压缩结束",${enddate.getMinutes()}:${enddate.getSeconds()}:${enddate.getMilliseconds()}`
            );
            resolve(newFile);
          };
        };
      }
    });
  },
  convertBase64UrlToFile: function (urlData, filename) {
    let arr = urlData.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    // return new Blob([u8arr], { type: mime });
    return new File([u8arr], filename, {
      type: "image/jpeg"
    });
  },
  //将url转化为JSON对象
  transUrlToObject: function (string) {
    //判断有没有参数，没有就返回空
    if (string.indexOf('=') < 0) {
      return {};
    }
    let params = string.substr(string.indexOf('?') + 1, string.length);

    //页面有跳转的时候，url会出现#号，可以使用html锚点调试，清除#号以及后面的锚点，保证获取的参数是正确的
    if (params.indexOf('#') > 0) {
      params = params.substr(0, params.indexOf("#"));
    }
    let obj = {}, //定义空对象，json对象格式，用于存储转换后的参数对象
      pairs = params.split('&'), //把参数分割成键值对形式的数组
      d = decodeURIComponent; //d decodeURIComponent 方法的别名，下面有调用 
    pairs.forEach((item) => {
      let pairArray = item.split('='); //把参数分割成key，value的形式
      let name = d(pairArray[0]); //name是url里参数的键
      let value = d(pairArray[1]); //value是url里参数的值
      obj[name] = value;
    })

    return obj;
  },
  timeFormat: function (date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return `${y}-${m}-${d} ${h}:${min}:${s}`;
  },

  getObject(params) {
    for (const key in params) {
      if (Object.prototype.toString.call(params[key]) === "[object Object]") {
        this.getObject(params[key])
      } else {
        params[key] = "暂无数据"
      }
    }
  }
};
export default commonUtils;



// WEBPACK FOOTER //
// ./src/common/utils/common.js