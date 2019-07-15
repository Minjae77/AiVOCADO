import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import IndexPage from "@/components/IndexPage";
import ShowPage from "@/components/showPage";
import RegisterPage from "@/components/Register";
import StartPage from "@/components/Scene_start";
import sub from "@/components/sub";
import "expose-loader?$!expose-loader?jQuery!jquery";
import Category from "@/components/Category";
import RankingPage from '@/components/RankingPage';
import GameMain from "@/components/gameMain";
import Restart from "@/components/restart";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: IndexPage
    },
    {
      path: "/show/:id",
      name: "show",
      component: ShowPage
    },
    {
      path: "/reg",
      name: "register",
      component: RegisterPage
    },
    {
      path: "/",
      name: "start",
      component: StartPage
    },
    {
      path: "/sub",
      name: "subsub",
      component: sub
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingPage
    },
    {
      path: '/main/:cate',
      name: 'gameMain',
      component: GameMain
    },
    {
      path: '/main/:st',
      name: 'start',
      component: StartPage
    },
    {
      path: '/main/:rest',
      name: 'restart',
      component: Restart
    },
    {
      path: '/restart',
      name: 'restart',
      component: Restart
    }
  ]
});
