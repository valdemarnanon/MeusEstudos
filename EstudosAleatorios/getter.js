// const log = ['Test'];
// var obj = {
//     get latest() {
//         if (log.length == 0) return undefined;
//         return log[log.length - 1];
//     },
// };
// console.log(obj.latest);

// delete obj.latest;




// const o = { a: 0 };

// Object.defineProperty(o, 'b', {
//     get: function () {
//         return this.a + 1;
//     },
// });

// console.log(o.b);



// const expr = "foo";

// const obj = {
//     get [expr]() {
//         return 'bar';
//     },
// };

// console.log(obj.foo);