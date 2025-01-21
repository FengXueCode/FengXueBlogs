//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀补药走哇~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
      document.title = OriginTitile;
  }
});
