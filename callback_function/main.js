// コールバック関数とは
// 他の関数に引数として渡される関数

function hello() {
    console.log('hello');
}

function fn(cb) {
    cb();
}
fn(hello);

// helloと呼ばれるとコンソールにhelloが出力される関数を作成する。
// helloという関数を渡す先の関数を定義する。
// その関数の引数にはコールバック(cb)を定義する。
// そのcbがfunction fnの中で実行される(  cb();  )
// このときにfn();が実行されるとき、helloが渡されると、コンソールにhelloが出力される。