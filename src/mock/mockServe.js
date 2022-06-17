import Mock from "mockjs";
// 引入JSON文件
import banners from "./banners.json";
import floors from "./floors.json";

// 第一个参数是请求地址，第二个是请求数据
Mock.mock("/mock/banners", { code: 200, data: banners });
Mock.mock("/mock/floors", { code: 200, data: floors });
