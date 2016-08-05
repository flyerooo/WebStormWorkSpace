/**
 * Created by jeff on 2016/8/6.
 */
var arr = [
    {a:1},
    [1,2,3],
    function() {return true;}
];
console.log(arr[0],
arr[1.000],
arr["2"])
console.log(typeof [1,2,3])
console.log(Object.keys(arr))