/*
 * This function parses ampersand-separated name-value arguments pairs
 * from the query string of the URL. 
 * It stores the pairs in properties of an object and returns that object.
 * 
 * Usage:
 * var args= urlArgs();  //parse URL
 * var q=args.q || "";  //If defined, or return a default value ''
 * var n=args.n ? parseInt(args.n):10;
*/

function urlArgs() {
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; ++i) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1); // ignore =
        args[name] = value;
    }
    return args;
}