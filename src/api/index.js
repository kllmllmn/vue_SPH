// 对API进行统一管理
import service from "./service";

// 三级联动接口
// /api/product/getBaseCategoryList GET 无参数
// axios的函数写法
export const reqCategoryList = () =>
  // 返回的是Promise类型
  service({ url: "/product/getBaseCategoryList", method: "GET" });
