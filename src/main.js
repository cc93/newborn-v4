/**
 * Created by congcong on 9/7/16.
 */
import App from './components/App.vue';

//FastClick
var attachFastClick = Origami.fastclick;
attachFastClick(document.body);

//WeChat
wx.config({

});

//Vue
new Vue({
    el: 'body',
    components: {
        'app': App
    }
});
