
// JavaScriptにおいて、関数はあくまで実行可能なオブジェクトである。


function a() {
    console.log('hello');
}

a.prop = 0;
a.method = function ()[
    console.log('method');
]

a(); // 出力結果hello
a.method(); // 出力結果method