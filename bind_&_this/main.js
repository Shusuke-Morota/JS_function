// bindとthisの関係
// bindはメソッド

window.name = "John";

const person = {
    name: "Tom",
    hello: function () {
        console.log("Hello" + this.name);
    }
}

person.hello();
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}
fn(helloTom);

// bindの役割
// bindはbindのオブジェクトで渡した第一引数(person)をhelloの中で実行されるthisの参照先として設定し、
// その設定した関数を新しい関数としてhelloTomに返却していることになる。
// 故にhelloTomという関数を実行した際には、必ずbindで指定したオブジェクトがthisの参照先となるため
// コールバック関数で渡したとしても、出力されるのはHelloTomとなる。

// 簡単な例

function a() {
    console.log("Hello " + this.name);
}

const b = a.bind({ name: "Tim" });
b();

// bindとは
// bindによってthisや引数を固定固定した新しい関数を作成する。
// これをbindによるthisの束縛という。
// 自分の使いたいthisが渡ってこない渡ってこない場合はこのような解消法がある。