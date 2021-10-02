<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,marginLeft:100}" :trigger="null">
      <img src="../../assets/Home/Mixin.png" class="sidebar-logo">
      <p class="sidebar-p"><a href="https://mixin.one/snapshots">Mixin Network</a></p>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="money-collect" />
          <span class="nav-text"><a href="https://mixin.one/snapshots/c6d0c728-2624-429b-8e0d-d9d19b6592fa">BTC</a></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="money-collect" />
          <span class="nav-text"><a href="https://mixin.one/snapshots/f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c">BOX</a></span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="money-collect" />
          <span class="nav-text"><a href="https://mixin.one/snapshots/c94ac88f-4671-3976-b60a-09064f1811e8">XIN</a></span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="money-collect" />
          <span class="nav-text"><a href="https://mixin.one/snapshots/43d61dcd-e413-450d-80b8-101d5e903357">ETH</a></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          More..........
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
    name: "SnapshotsSidebar",
}
</script>

<style>
.sidebar-p {
    color: rgb(255, 255, 255);
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.sidebar-logo{
    width: 100px;
    position: relative;
    top: 0%;
    left: 20%;
}
</style>
