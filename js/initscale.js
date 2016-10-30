/**
 * Created by LiChong on 2016/10/30.
 */
;(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    //设计稿的尺寸
    var docWidth = 750;
    var docHeight = 1334;
    //实际的屏幕尺寸
    var screenWidth = docEl.getBoundingClientRect().width;
    var screenHeight = docEl.getBoundingClientRect().height;
    //缩放大小，宽度占满
    var scale =  screenWidth / docWidth;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
})(window);