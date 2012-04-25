// inherit object from given

function inherit(proto) {
    if (p == null) {
        throw TypeError();
    }

    // if Object.create defined
    if (Object.create) {
        return Object.create(p);
    }

    var t = typeof p;
    if (t !== "object" && t != "function") {
        throw TypeError();
    }

    function f() { };
    f.prototype = p;
    return new f();
}