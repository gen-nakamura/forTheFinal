var cached = function (foo) {
    var cache = {};
    return function() {
        args = arguments;
        if (cache[args] !== null) return cache[args];
        var res = foo.apply(null, args);
        cache[args] = res;
        return res;
    }
}


var foo = function(x, y, z) {return (x + y+ z);}
var f = cached(foo);
var res1 = f(1, 2, 3);
var res3 = f(1, 2, 3);