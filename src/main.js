
var MainLayer = cc.Layer.extend({
    home:null,
    ctor:function () {
        this._super();

        this.home = new cc.Sprite(res.HelloWorld_png);
        this.home.x = cc.winSize.width/2;
        this.home.y = cc.winSize.height/2;
        this.addChild(this.home);

        this.home.runAction(cc.blink(1,2));

        var item1 = new cc.MenuItemFont("test1", this.test1, this);
        item1.x = 0 - cc.winSize.width/2 + 40;
        item1.y = 0 - cc.winSize.height/2 + 40;

        var item2 = new cc.MenuItemFont("test2", this.test2, this);
        item2.x = 0 - cc.winSize.width/2 + 140;
        item2.y = 0 - cc.winSize.height/2 + 40;

        var item3 = new cc.MenuItemFont("test3", this.test3, this);
        item3.x = 0 - cc.winSize.width/2 + 240;
        item3.y = 0 - cc.winSize.height/2 + 40;
        var menu = new cc.Menu(item1, item2, item3);
        this.addChild(menu);


        return true;
    },
    test1:function () {
        this.home.runAction(cc.show());
        this.home.runAction(cc.place(new cc.Point(400,400)));
    },
    test2:function () {
        this.home.setVisible(false);
        //this.home.runAction(cc.hide());
    },
    test3:function () {
        cc.director.pushScene(new Act1Scene())
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

