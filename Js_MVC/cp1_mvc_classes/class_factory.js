/*
    class library includes functionality for instantiating and initializing instances.    
*/

var Class = function (parent) {
    var _class = function () {
        this.init.apply(this, arguments);
    }

    // change _class's prototype
    if (parent) {
        var subclass = function () { };
        subclass.prototype = parent.prototype;
        _class.prototype = new subclass;
    }

    _class.prototype.init = function () { };



    //#region Aliases
    //shortcut to access prototype;
    _class.fn = _class.prototype;

    //shortcut to access class
    _class.fn.parent = _class;
    _class._super = _class.__proto__;
    //#endregion

    //#region Methods

    //adding class properties
    _class.extend = function (obj) {
        //callback function
        var extended = obj.extended;
        for (var i in obj) {
            _class[i] = obj[i];
        }
        if (extended) extended(_class);
    };

    //adding instance properties to prototype
    _class.include = function (obj) {
        //callback function
        var included = obj.included;
        for (var i in obj) {
            _class.fn[i] = obj[i];
        }

        if (included) included(_class);
    }

    //#endregion

    return _class;
}