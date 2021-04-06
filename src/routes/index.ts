import { Component, FunctionComponent } from "react";
import AddApproval from "pages/AddApproval/AddApproval";
import Approval from "pages/Approval/Approval";
import User from "pages/User/User";
import Project from "pages/Project/Project";


export interface Route {
  path: string;
  name: string;
  component: Component | FunctionComponent | null | any;
  isShow: boolean,
  canActive?: string[];
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/Approval/:serviceType?",
    name: "审批",
    component: Approval,
    isShow: true,
    // canActive: ['NLPManagerUser', 'NLPManagerAdmin']
  },
  {
    path: "/AddApproval/:serviceType?",
    name: "添加审批",
    component: AddApproval,
    isShow: true,
  },
  {
    path: "/User",
    name: "修改密码",
    component: User,
    isShow: true,
  },
  {
    path: "/Project",
    name: "项目列表",
    component: Project,
    isShow: true,
  }
];
