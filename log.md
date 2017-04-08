# vue.js でサンプルアプリケーションを作成

## 環境構築

1. vue.js のインストール
npm install --save-dev vue
1. browserifyのインストール  
 npm install --save-dev browserify
1. browserify の実行  
./node_modules/.bin/browserify js/main.js -o js/bundle.js
``` 
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. 
(found in <Root>)
```

browserify でインポートされるファイルが vue.runtime.js になるため
コンパイルはできないよーというエラー。

vue.min.js を vue.runtime.js に変更すると、browserifyなしでも同じ問題がでることを確認。

package.json に以下の記述を追加して対応した。

``` js
"browser": {
  "vue": "vue/dist/vue.common.js"
}
```

##