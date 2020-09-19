
// call, apply
// thisや引数の参照先を変更。同時に関数を実行。

// bind
// thisや引数の参照先を変更。同時に関数を実行はしない。


function a() {
    console.log("hello " + this.name);
}

const tim = { name: "Tim" };

const b = a.bind(tim);
b();
a.apply(tim);
a.call(tim);