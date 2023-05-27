# client

## 環境構築

`/client`で入力

```zsh
npm install -g pnpm
pnpm install
pnpm run dev
```

※ `pnpm`のインストールについては[こちら](https://pnpm.io/ja/installation)を参考してください。

## ディレクトリ構造

```none
/client
├ .next
├ node_modules
├ public
├ src
|  ├ api
|  |  ├ query.ts  //queryまとめ
|  |  └ mutation.tsx　　 //mutationまとめ
|  |
|  ├ apollo
|  ├ app
|  |  ├ service　    //serviceディレクトリ以下にページを追加
|  |  ├ layout.tsx  //全体のレイアウトを決定
|  |  └ page.tsx　　 //Homeのページ
|  |
|  ├ components     //コンポーネント
|  |  ├ elements    //いろんなページで横断的に使われるコンポーネント
|  |  ├ layout      //レイアウトで使われるコンポーネント
|  |  └ service     //それぞれのページで使われるコンポーネント
|  |
|  ├ hooks
|  └ utils
├ tailwind.config.js
//以下略
```

## 開発時の注意

- 作業ディレクトリは必ず`/client`で
- 開発前に**pull**を必ずする
- **prettier**で必ず整形してから commit する
- commitするディレクトリも必ず`/client`
