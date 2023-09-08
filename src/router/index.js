/*
 * @Description:
 * @Date: 2023-09-06 13:45:37
 * @LastEditTime: 2023-09-07 17:39:58
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import DataAlarm from "@/views/dataAlarm/dataAlarm";
import Structure from "@/views/Structure/Structure";
import MonitorData from "@/views/monitorData/MonitorData";
import Login from "@/views/login/Login";
import Home from "@/views/home/index";

const routes = [
  {
    path: "/",
    name: "/",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: "/map",
    children: [
      { path: "/dataAlarm", name: "dataAlarm", component: DataAlarm },
      { path: "/structure", name: "structure", component: Structure },
      { path: "/map", name: "map", component: MonitorData },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
