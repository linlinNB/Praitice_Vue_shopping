<template>
  <div class="Login-form-title">
    <div data-name="用户邮箱填写">
      <span>
        电子邮箱：
      </span>
      <span>
        <input type="text"/>
      </span>
    </div>

    <div data-name="用户密码填写">
      <span>
        密码：
      </span>
      <span>
        <input type="password"/>
      </span>
    </div>

    <div>
      <router-link to="" class="button">登录</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .Login-form-title {
    position: absolute;
    left: 30%;
    top: 20%;
  }
</style>
