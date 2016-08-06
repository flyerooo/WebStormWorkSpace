// /**
//  * Created by jeff on 2016/8/6.
//  */
// var arr = [
//     {a:1},
//     [1,2,3],
//     function() {return true;}
// ];
// console.log(arr[0],
// arr[1.000],
// arr["2"])
// console.log(typeof [1,2,3])
// console.log(Object.keys(arr))
// var arr = ['a','b'];
// console.log(arr);
// console.log(arr.length);
//
// arr[2] = 'c';
// console.log(arr);
// console.log(arr.length);
//
// arr[9] = 'd';
// console.log(arr);
// console.log(arr.length);
// arr[15]='e';
// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]);
// arr.length = 4;
// console.log(arr);
// console.log(arr[3]);
// var arr2 = [];
// arr2.length = 2;
// // console.log(arr2);
// var arr = [];
// arr[-1] = 'a';
// arr[Math.pow(2, 3)] = 'b';
//
// console.log(arr.length) ;
// console.log(arr[-1]) ;
// console.log(arr[42]);
// console.log(arr);
// var obj = {
//     length: 0
// };
// obj[3] = 'd';
// console.log(obj.length);
// console.log(obj);
// function args() { return arguments }
// var arrayLike = args('a', 'b');
// console.log(arrayLike.arguments);
// console.log(arrayLike instanceof Array);

// var arr=['a','b','c'];
// arr.foo=true
// for (var i in arr) {
//     console.log(arr[i]);
// }
// console.log(arr);
// console.log(arr instanceof Array);

// var a = [1,2,3];
// for (var i =0; i<a.length;i++) {
//     console.log(a[i]);
// }
// var i = 0;
// while (i <a.length){
//     console.log(a[i]);
//     i++;
// }
// var l = a.length;
// while (l--) {
//     console.log(a[l]);
// }

var colors = ['red','green','blue'];
colors.forEach(function (color) {
    console.log(color);
})