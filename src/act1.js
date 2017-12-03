
var Act1Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        /*
        var range = cc.rect(0,0,10,10);
        var frame = new cc.SpriteFrame(res.s1_png, range);
        */

        cc.spriteFrameCache.addSpriteFrames(
            res.s1_plist, res.s1_png);
        var aryAnimFrames = [];
        for (var i=1; i<=25; i++ ){
            var key = "s1_00" + (i<10?"0"+i:i) + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(key);
            aryAnimFrames.push(frame);
        }

        //cc.log(aryAnimFrames.toString());


        var fTime = 1.0 / 16;
        var animation = cc.Animation.create(aryAnimFrames, fTime);
        // Create a Animation Action
        //var animAct = cc.Animate.create(animation);
        var animAct = new cc.Animate(animation);

        // -------------------------------
        this.sprite = new cc.Sprite(aryAnimFrames[0]);
        this.sprite.x = cc.winSize.width/2;
        this.sprite.y = cc.winSize.height/2;
        this.addChild(this.sprite);

        this.sprite.runAction(cc.repeatForever(animAct));



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

