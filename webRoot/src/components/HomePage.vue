<template>
  <div class="layout">
    <Layout>
      <Affix>
      <Header>
        <Menu mode="horizontal" theme="primary" active-name="1">
          <div class="layout-logo">
            <Icon class="fa" type="logo-github"/>
            yquanmei
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-home"/>Home
          </MenuItem>
            <MenuItem name="2">
              <Icon type="md-code-working" />
              Code
          </MenuItem>
          <MenuItem name="3">
              <!--<Icon type="ios-analytics"></Icon>-->
            <Icon type="ios-leaf" />
              Life
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-link" />
              Link
          </MenuItem>
          <MenuItem name="5">
            <!--<Icon type="ios-paper"></Icon>-->
            <Icon type="ios-brush" />
            <!--<Icon type="md-create" />-->
              Message
          </MenuItem>
          </div>
        </Menu>
      </Header>
      </Affix>
      <Layout :style="{margin: '50px 80px'}">
        <Content :style="{padding: '0 50px'}">
          <!--<Breadcrumb :style="{margin: '20px 0'}">-->
            <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
          <!--</Breadcrumb>-->
          <!--<Card>-->
            <!--<div style="min-height: 200px;">-->
              <!--Content-->
          <!--</div>-->
          <!--</Card>-->
          <Card :bordered="false" :style="{marginBottom: '40px'}">
            <p slot="title">程序</p>
            <p>我只是一只快乐的敲代码的小猪~</p>
            <p>这里的程序只有一个主题~</p>
            <p>你猜猜是啥，嘻嘻~</p>
            <div class="life-container">
              <img src="../assets/img/circle.gif">
            </div>
          </Card>
          <Card :bordered="false">
            <p slot="title">生活</p>
            <p>生活不止诗和远方~</p>
            <p>更多的是琐屑~</p>
            <p>那~~~</p>
            <p>你们是怎么让自己快乐的呢~</p>
            <div class="life-container">
              <img src="../assets/img/life.jpeg">
            </div>
          </Card>
        </Content>
        <Sider hide-trigger  width="315" :style="{ 'margin-top': '40px', background:'transparent'}">
          <Affix :offset-top="100">
            <Card :bordered="false">
              <section class="site-overview-wrap sidebar-panel sidebar-panel-active">
                <div class="site-overview" style="max-height: 283px;">
                  <div class="site-author motion-element" itemprop="author" itemscope=""
                       itemtype="http://schema.org/Person"><img class="site-author-image" itemprop="image"
                                                                src="../assets/img/avatar.jpeg" alt="sSuncat">
                    <p class="site-author-name" itemprop="name"><span style="opacity:.6">网红</span>aSuncat</p>
                    <p class="site-description motion-element" itemprop="description">快来陪我玩呀！</p></div>
                  <div class="links-of-author motion-element"><span class="links-of-author-item"><a
                    href="https://github.com/yquanmei/yquanmei.github.io" target="_blank" title="GitHub">
                    <Icon class="fa" type="logo-github"/>
                  </a> </span>
                    <span
                    class="links-of-author-item"><a href="https://blog.csdn.net/aSuncat/article/details/89365806" target="_blank" title="CSDN">
                      <Icon class="fa" custom="icon-font icon-csdn"/>
                    </a> </span>
                    <span class="links-of-author-item"><a
                    href="https://t.me/awesomeDIYgod" target="_blank" title="email">
                      <Icon class="fa" type="ios-mail" />
                    </a> </span><span
                    class="links-of-author-item"><a href="https://t.me/prpr233" target="_blank" title="wechat">
                      <Icon class="fa"  type="ios-chatbubbles" />
                      <!--<i class="fa fa-fw fa-telegram"></i>-->
                    </a></span></div>
                  <!--<nav class="site-state motion-element">-->
                    <!--<div class="site-state-item site-state-posts"><a href="/archives"><span-->
                      <!--class="site-state-item-count">54</span> <span class="site-state-item-name">日志</span></a></div>-->
                    <!--<div class="site-state-item site-state-categories"><a href="/categories/index.html"><span-->
                      <!--class="site-state-item-count">5</span> <span class="site-state-item-name">分类</span></a></div>-->
                  <!--</nav>-->
                </div>
              </section>
          </Card>
          </Affix>
        </Sider>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
import {changeTitle} from 'assets/js/mixin';
export default {
  mixins: [changeTitle],
  data () {
    return {
      msg: 'Welcome to My blog',
      name: 'I am yquanmei',
      hint: 'Website under construction'
    };
  },
  mounted () {
  },
  methods: {}
};
</script>

<style lang="scss" type="text/css" scoped>
  @import "~assets/css/variable.scss";
  @import "../assets/css/iconfont.css";
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-footer-center{
    text-align: center;
  }

  /*.sidebar-inner{*/
    /*position: fixed;*/
    /*top: 52px;*/
    /*width: 315px;*/
  /*}*/

  /*.ivu-layout-sider{*/
    /*width: 350px;*/
    /*min-width: 350px;*/
  /*}*/

  .ivu-layout {
    /*background: $color2; !* 2 7 8 10 11 12 13 15 16 17 18 20 24 26*! !**!*/
    /*background: #ffcccb; !* 2 7 8 10 11 12 13 15 16 17 18 20 24 26*! !**!*/
    background: $color12; /* 2 7 8 10 11 12 13 15 16 17 18 20 24 26*/ /**/
  }

  .sidebar-inner {
    position: relative;
    padding: 20px 10px;
    color: #999;
    text-align: center
  }
  .site-overview-wrap {
    overflow: hidden
  }

  .site-overview {
    overflow-y: auto;
    overflow-x: hidden
  }
  .site-author{
    position: relative;
  }
  /*.site-author-image {*/
    /*display: block;*/
    /*margin: 0 auto;*/
    /*padding: 2px;*/
    /*max-width: 120px;*/
    /*height: auto;*/
    /*border: 1px solid #eee*/
  /*}*/
  .site-author-image {
    max-width: none;
    width: 100%;
    height:150px;
    border: none;
    padding: 0;
  }

  .site-author-name {
    /*margin: 0;*/
    /*text-align: center;*/
    /*color: #222;*/
    /*font-weight: 600*/
    position: absolute;
    bottom: 36px;
    margin: 0 0 0 -65px;
    font-size: 20px;
    letter-spacing: .5px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
    /*width: 130px;*/
    left: 50%;
  }
  .site-author-name {
    text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
  }

  /*.site-description {*/
    /*margin-top: 0;*/
    /*text-align: center;*/
    /*font-size: 13px;*/
    /*color: #999*/
  /*}*/
  .site-description {
    font-size: 14px;
    margin: 5px 0 8px;
    font-weight: 700;
    color: #555;
  }
  .links-of-author {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 20px;
  }
  .links-of-author-item {
    margin: 5px 0 0;
  }

  .links-of-author a {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 10px;
    border-bottom-color: #555;
    font-size: 13px
  }
  .links-of-author-item a {
    display: block;
    text-decoration: none;
    overflow: visible;
  }

  .links-of-author-item a {
    max-width: 216px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 0;
    margin-bottom: 0;
    padding: 0 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .links-of-author-item .fa {
    font-size: 16px;
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    border-radius: 42px;
    color: rgba(0,0,0,.5);
    background-color: rgba(0,0,0,.1);
    transition: all .3s ease-in-out;
    font-style: normal;
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
  }
  /*.links-of-author a:before {*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*margin-right: 3px;*/
    /*content: " ";*/
    /*width: 4px;*/
    /*height: 4px;*/
    /*border-radius: 50%;*/
    /*background: #74ffb0*/
  /*}*/

  /**头部导航栏*/
  .ivu-layout-header{
    /*background: $primary-color;*/
    background: rgba(0, 0, 0, 0.3);
  }
  .ivu-menu{
    color: #fff;
    font-size: 16px;
  }
  .layout-logo {
    width: auto;
    height: auto;
    top: 0;
    background: transparent;
  }
  .layout-nav{
    width: 530px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .ivu-menu-item{
    font-size:16px;
  }
  .ivu-menu-item > i{
    margin-bottom:6px;
  }
  .ivu-menu-primary{
    background: transparent;
  }
  /**life版块*/
  .life-container{
    margin-top:30px;
  }
  .life-container img{
    width: 50%;
  }

</style>
