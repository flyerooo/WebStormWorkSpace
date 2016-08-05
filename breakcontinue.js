/**
 * Created by jeff on 2016/8/6.
 */
// var i = 0;
// while (i < 100) {
//     console.log('i当前为： ' + i);
//     i++;
//     if (i === 10) break;
// }

var i = 0;
while (i < 100) {
    i++;
    if (i % 2 === 0) continue;
    console.log('i当前为： ' + i);
}