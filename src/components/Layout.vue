<!--此文件作为页面的布局-->
<template>
  <div>
    <!-- 作为页面的页眉 -->
    <div class="app-head">
      <div class="app-head-inner">
        <img class="head-logo" src="../assets/logo.png">
        <div class="head-nav">
          <ul>
            <li v-on:click="showDialog(1)">登录</li>
            <li class="nav-pile">|</li>
            <li v-on:click="showDialog(2)">注册</li>
            <li class="nav-pile">|</li>
            <li v-on:click="showDialog(3)">关于</li>
          </ul>
        </div>
      </div>
    </div>



    <!-- 作为页面的中间布局 -->
    <div class="app-content">
      <keep-alive>
        <!-- 此处设置前端路由的使用 -->
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- 作为页面的页脚 -->
    <div class="app-foot">
      <p>这是我练习项目架构问题</p>
    </div>

    <!--此处将弹出框隐藏起来-->
    <!-- 此处是登录页面 -->
    <mydialog v-bind:isShow="this.control_isShowLoginDialog" v-on:goto_close_dialog="closeDIalog('control_isShowLoginDialog')">
      <loginmydialog></loginmydialog>
    </mydialog>

    <!-- 此处是申请页面 -->
    <mydialog v-bind:isShow="this.control_isShowRegDialog" v-on:goto_close_dialog="closeDIalog('control_isShowRegDialog')">
      <regmydialog></regmydialog>
    </mydialog>

    <!-- 此处是关于页面 -->
    <mydialog v-bind:isShow="this.control_isShowAboutDialog" v-on:goto_close_dialog="closeDIalog('control_isShowAboutDialog')">
      <aboutmydialog></aboutmydialog>
    </mydialog>
  </div>
</template>

<script>
  import Dialog from './dialog.vue';
  import AboutDialog from './all_dialog/about_dialog.vue'
  import RegDialog from './all_dialog/reg_dialog.vue'
  import LoginDialog from './all_dialog/login_dialog.vue'

  export default {
    props: {},
    data: function () {
      return {
        control_isShowLoginDialog: false,
        control_isShowRegDialog: false,
        control_isShowAboutDialog: false,
      }
    },
    methods: {
      showDialog: function (dialog_name) {
        console.log('点击了弹窗按钮');
        /*this.control_isShowDialog = true;*/
        if (dialog_name === 1) {
          this.control_isShowLoginDialog = true;
        } else if (dialog_name === 2) {
          this.control_isShowRegDialog = true;
        } else {
          this.control_isShowAboutDialog = true;
        }
      },
      closeDIalog: function (dialog_name) {
        console.log('触发了父组件的关闭弹窗事件')
        /*this.control_isShowDialog = false;*/
        this[dialog_name] = false;
      }
    },
    components: {
      'mydialog': Dialog,
      'aboutmydialog': AboutDialog,
      'regmydialog': RegDialog,
      'loginmydialog': LoginDialog
    }
  }
</script>


<!--
  在此设置成为全局共享，因为此页面只是作为一个布局的作用
-->
<style>
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }

  .head-logo {
    float: left;
  }

  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
