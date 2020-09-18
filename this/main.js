// thisとは
// 呼び出し元おオブジェクトへの参照を保持するキーワード

const person = {
    name: "Tom",
    hello: function () {
        console.log("Hello" + this.name);
    }
}
person.hello();

// this.nameとした場合、thisがオブジェクトのpersonを参照することになる。
// methodを飛び出す場合には、オブジェクト.hello();

// 結論
// 実行コンテキストによって、thisの参照先は変わる。