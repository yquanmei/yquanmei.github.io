<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ name }}</h3>
    <h3>{{ hint }}</h3>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://github.com/yquanmei/yquanmei.github.io/tree/master/"
          target="_blank"
        >
          github地址
        </a>
      </li>
      <li>
        <a
          href="https://blog.csdn.net/aSuncat/article/details/89365806"
          target="_blank"
        >
          博客搭建日常
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to My blog',
      name: 'I am yquanmei',
      hint: 'Website under construction'
    };
  },
  mounted () {
    this.pageInit();
  },
  methods: {
    pageInit () {
      let arr = [1, 2, 3];
      let arr1 = arr.map(item => item + 1);
      console.log(arr1);
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
  @import "~assets/css/variable.scss";
  h1, h2 {
    color:$font-color;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
