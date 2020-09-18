// thisとは
// 呼び出し元おオブジェクトへの参照を保持するキーワード

// const person = {
//     name: "Tom",
//     hello: function () {
//         console.log("Hello" + this.name);
//     }
// }
// person.hello();

// this.nameとした場合、thisがオブジェクトのpersonを参照することになる。
// methodを飛び出す場合には、オブジェクト.hello();

// 結論
// 実行コンテキストによって、thisの参照先は変わる。


// 参照のコピーとthis
// personのhelloというメソッドを他の変数にコピーすると挙動が変わる。
// person.helloを変数refに代入する 。

window.name = "John";

const person = {
    name: "Tom",
    hello: function () {
        console.log("Hello" + this.name);
        a();
    }
}
// const ref = person.hello;
// ref();

// 出力結果Hello
// なぜHello Tomではないのか。
// オブジェクトのメソッドとして実行される場合、thisは呼び出し元のオブジェクトを参照する。
// 関数として実行される場合、thisはグローバルオブジェクトを参照する。
// 今回は後者。

person.hello();
function a() {
    console.log("Hello" + this.name);
}

// ただ単に関数の中でthisを読んだ場合は、Hello John
// 
