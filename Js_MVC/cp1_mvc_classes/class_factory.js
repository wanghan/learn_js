/*
    class library includes functionality for instantiating and initializing instances.    
*/

var Class = function () {
    var _class = function () {
        this.init.apply(this, arguments);
    }

    _class.prototype.init = function () { };

    //shortcut to access prototype;
    _class.fn = _class.prototype;

    //shortcut to access class
    _class.fn.parent = _class;

    //#region Methods

    //adding class static properties
    _class.extend = function (obj) {
        //callback function
        var extended = obj.extended;
        for (var i in obj) {
            _class[i] = obj[i];
        }
        if (extended) extended(_class);
    };

    //adding instance properties
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