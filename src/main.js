
var MainLayer = cc.Layer.extend({
    home:null,
    ctor:function () {
        this._super();

        this.home = new cc.Sprite(res.HelloWorld_png);
        this.home.x = cc.winSize.width/2;
        this.home.y = cc.winSize.height/2;
        this.addChild(this.home);

        var item1 = new cc.MenuItemFont("test1", this.test1, this);
        item1.x = 0 - cc.winSize.width/2 + 40;
        item1.y = 0 - cc.winSize.height/2 + 40;

        var menu = new cc.Menu(item1);
        this.addChild(menu);


        return true;
    },
    test1:function () {

    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

