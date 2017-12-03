
var Act1Layer = cc.Layer.extend({
    ctor:function () {
        this._super();

        return true;
    }
});

var Act1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Act1Layer();
        this.addChild(layer);
    }
});

