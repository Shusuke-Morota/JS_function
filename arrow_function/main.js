
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