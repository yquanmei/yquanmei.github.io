import {titleTxt} from 'assets/js/config';

export const changeTitle = {
  mounted () {
    let changeTitle = this._titleInit();
    this.$nextTick(() => {
      document.addEventListener('visibilitychange', changeTitle);
    });
  },
  methods: {
    // 函数：page显示隐藏时标签页title的改变
    _titleInit () {
      let OriginTitile = document.title;
      let titleTime;
      const leaveList = titleTxt.leaveList;
      const enterList = titleTxt.enterList;
      let leaveLen = leaveList.length;
      let enterLen = enterList.length;
      return function () {
        if (document.hidden) {
          let leaveRandom = parseInt(Math.random() * leaveLen);
          document.title = leaveList[leaveRandom];
          clearTimeout(titleTime);
        } else {
          let enterRandom = parseInt(Math.random() * enterLen);
          document.title = enterList[enterRandom];
          titleTime = setTimeout(function () {
            document.title = OriginTitile;
          }, 2000);
        }
      };
    }
  }
};
