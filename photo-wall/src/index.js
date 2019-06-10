let a = 'smyhvae';
const b = 'qianguyihao';

console.log(a);
console.log(b);

var fn2 = (a, b) => a + b;

console.log(fn2(1, 2));  //输出结果：3

var fun = (a = 9,b = 5) => {
    console.log(a+b);
    return a+b;
}
console.log(fun());
console.log(fun(8,9));

var fun3 = (a ,b  ,c = 5) => {
    console.log(a+b+c);
    return a+b+c;
}

console.log(fun3(1,5));
