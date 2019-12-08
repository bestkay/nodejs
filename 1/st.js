function foo() {
    console.log("Hello syl!");
}

//三秒后执行以上函数
var t = setTimeout(foo, 3000);

//清除定时器
clearTimeout(t);
