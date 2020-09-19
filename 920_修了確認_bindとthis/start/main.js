const person = {
    name: 'Tom',
    bye() {
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */

    hello1s() {
        // 1, setTimeout(this.hello.bind(this, "hello"), 1000)  

        // 2, setTimeout(() => {
        //     this.hello("ello")
        // }, 1000);

        // 3, const _this = this;
        // setTimeout(function () {
        //     _this.hello("hello");
        // })
    }
}
person.hello1s();  // hello Tom






/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
setTimeout(person.hello.bind(person, "hello"), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
alert(person.hello("hello"));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
setTimeout(person.bye.bind(person), 1000);
// アロー関数はthisを取らないので、bindを使ってthisを束縛することができない。
// メソッドの中でthisを使うような場合はそもそもアロー関数は適していない。
// 故にこれを無名関数に記述し直すことが大切である。