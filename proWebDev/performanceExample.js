//减少全局变量访问
function updateUI() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0, len = imgs.length; i < len; ++i) {
        imgs[i].title = document.title + "image" + i;
    }

    var msg = document.getElementById("msg");
    msg.innerHTML = "Update complete";
}

function updateUIOpti() {
    var doc = document;
    var imgs = doc.getElementsByTagName("img");
    for (var i = 0, len = imgs.length; i < len; ++i) {
        var image = imgs[i];
        //other code
    }

    var msg = doc.getElementById("msg");
    msg.innerHTML = "Update complete";
}
//避免使用with语句
function updateBody(){
    with (document.body) {
        alert(tagName);
        innerHTML = "HelloWorld";
    };
}

function updateBodyOpti() {
    var body = document.body;
    alert(body.tagName);
    body.innerHTML = "HelloWorld";
}

//避免多重解释
eval("alert('Hello world!')");
var sayHi = new Function("alert('Hello world!')");
setTimeout("alert('Hello world!')", 500);

alert('Hello world!');
var sayHi = function () {
    alert('Hello world!'); 
}
setTimeout(function () {
    alert('Hello world!');
}, 500);

//最小化现象更新

var list = document.getElementById("mylist");

for (var i = 0; i < 10; ++i) {
    var item = document.createElement("li");
    list.appendChild(item);
    item.appendChild(document.createTextNode("Item " + i));
}

var list = document.getElementById("mylist");
var fragment = documen.createDocumentFragment();
for (var i = 0; i < 10; ++i) {
    var item = document.createElement("li");
    fragment.appendChild(item);
    item.appendChild(document.createTextNode("Item " + i));
}

list.appendChild(fragment);