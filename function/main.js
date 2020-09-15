function fn(a, b) {
    console.log(a, b);
}

fn(0, 1);
// 出力結果　0 1

function fn(a, b) {
    console.log(a, b);
}

fn(null, 1);
// bの引数だけを渡したくてもaの引数を省略することはできない。
// bだけ引数に渡したい場合は、nullを置いたりする。


// 引数が2つ定義されていた場合でも、1つの引数だけを呼びして実行することができる。以下のようになる。

function fn(a, b) {
    console.log(a, b);
}

fn(1);
// fn(1);だと、出力されるのは、1 undefinedとなる。


// 関数名が重複していると後から宣言したものが優先される。
function fn(a, b) {
    console.log(a, b);
}
function fn(a, b) {
    console.log(2);
}

fn(1);
// この場合だとコンソールに2が出力される。
// 関数名で呼び出し先が決まる。


// 関数の重複を避けたい場合は、以下のようにする。
const fn = function (a, b) {
    console.log(a, b);
}
fn(1);
// 出力結果は、1, undefinedとなる。