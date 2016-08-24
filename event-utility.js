var evt = {
    addListener:function (obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn);
        } else {
            obj.attachEvent("on" + type, fn);
        }
    }
}
