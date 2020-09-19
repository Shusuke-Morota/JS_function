
// アロー関数とは
// 無名関数を記述しやすくした省略記法

function a(name) {
    return "hello " + name;
}

// 上記を関数式に変換すると

const b = function (name) {
    return "hello " + name;
}

// 上記をアロー関数に変換すると

const b = name => "hello " + name;
// アロー関数は引数が1つの場合は()を省略できる。
// また実行行が１行の場合は{}とreturnも省略できる。
// 実行すると、、
console.log(b("Tom"))

// 引数を2つ以上取りたい場合は以下のようにする
const b = (name, name1) => "hello " + name + " " + name1;
console.log(b("Tom", "Bob"))

// 引数を取らない場合は()か_(アンダースコア)。
const b = () => {
    return "hello ";
}

const b = _ => "hello ";

// 無名関数とアロー関数の違い
// 無名関数はthis, arguments, new, prototypeが使える。
// アロー関数はthis, arguments, new, prototypeが使えない。
// アロー関数は基本的に無名関数の簡略記法であるが、厳密に機能が同じというわけではない。


// アロー関数とthisの関係

window.name = "John";

const person = {
    name: "Tom",
    hello: function () {
        console.log("Hello " + this.name);
    }
}

person.hello();  // Hello Tom

// アロー関数に変換すると、、、
window.name = "John";

const person = {
    name: "Tom",
    hello: () => {
        console.log("Hello " + this.name);
    }
}

person.hello();  //Hello John

// アロー関数はそのコンテキストないでthisを取らないので、呼び出し元がオブジェクトであっても、
// 関数であってもそのコンテキストのthisは無視される。　



window.name = "John";

const a = () => console.log("Bye " + this.name);

const person = {
    name: "Tom",
    hello() => {   // 無名関数として定義されている。
    console.log("Hello " + this.name);
    a();
}
}

person.hello();  //Hello Tom & Bye John

// 解説
// a();は72行目が呼び出されるわけだが、72行目のレキシカルスコープはグローバルスコープになるため、
// このグローバルスコープのthisはwindowオブジェクトになり、nameプロパティのJohnが取れてくる。


