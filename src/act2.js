
var Act2Layer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var sprite = new cc.Sprite(res.HelloWorld_png);
        this.addChild(sprite);

        sprite.setPosition(
            cc.winSize.width/2, cc.winSize.height/2);




        return true;
    }
});

var Act2Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Act2Layer();
        this.addChild(layer);
    }
});

