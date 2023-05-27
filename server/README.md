# server

## 環境構築

Go-1.18 over
docker desktop app を立ち上げておく

```zsh
go get -u github.com/99designs/gqlgen
gqlgen version
```

※もし`gqlgen version`で`zsh: command not found: gqlgen`のエラーが出現したら、以下の「パスを通す」を行う

`/server`
仮想環境を立ち上げる

```zsh
#初回
make up

#それ以降
make re
```

## ディレクトリ構造

このままか変えるかは検討中
現状を記しておく

```none
/server
├ database
├ docker
├ graph
|  ├ model
|  |  └ model_gen.go　 //自動生成・絶対いじらない
|  |
|  ├ generated.go　 //自動生成・絶対いじらない
|  ├ resolver.go　 //基本いじらない
|  ├ schema.resolver.go　 //スキーマのリゾルバーを定義
|  └ schema.graphqls　 //スキーマを定義する
|
├ server.go   // serverと接続するコード
//以下略
```

## 開発時の注意

- 作業ディレクトリは必ず`/server`で
- 開発前に**pull**を必ずする
- API を書き直したら`make generate`をして`make re`で仮想環境を再起動する
- commit するディレクトリも必ず`/server`

### パスを通す

1. go 自体入っているか確認

   ```zsh
   go version

   #error出たらこれを打つ
   brew install go
   ```

2. go のパスを確認（`GOPATH`, `GOROOT`, `GOTOOLDIR`が設定されているかを確認）

   ```zsh
   go env
   ```

3. go の PATH を設定する

   ```zsh
   vim ~/.zshrc
   ```

   ```vim
   export PATH="$HOME/go/bin:$PATH"
   ```

   ※vim の使い方は[こちら](https://qiita.com/okamos/items/c97970ab34ff55ff3167)より

4. もう一度確認して PATH が通っているかを確認する

   ```zsh
   gqlgen version
   ```
