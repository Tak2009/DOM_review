reference:
https://qiita.com/KDE_SPACE/items/e21bb31dd4d9c162c4a6

ドキュメントノード:	ドキュメント全体を表すDocumentオブジェクト
要素ノード:	要素を表すオブジェクト。HTMLタグを表します。DOMでは、HTMLタグのことを「要素」と呼びます。
テキストノード:	テキストを表すオブジェクト。タグではない文字の部分を表します。
コメントノード:	コメントを表すオブジェクト
属性ノード:	属性を表すオブジェクト。タグ内に記述されている属性を表します。Aタグのhref属性やIMGタグのsrc属性などが該当します。


document *1
 └ html *2
    ├ head  *2
    │   ├ 空白 *3
    │   ├ title *2 
    │   ├ 空白 *3 
    │   ├ meta *2 
    │   └ 空白 *3 
    ├ 空白 *3
    └ body  *2
        ├ 空白 *3 
        ├ h1 *2 
        │  └ タイトル *3
        ├ 空白 *3 
        ├ コメント *4 
        ├ 空白 *3 
        ├ p *2 
        │  └ テキストテキストテキスト *3
        └ 空白 *3 

*1: ドキュメントノード
*2: 要素ノード
*3: テキストノード
*4: コメントノード


DOMツリーでは空白はテキストと扱われます。 (インラインボックスの要素の場合、前後に空白がある場合、1つの半角スペースがあるかのように振舞う)
空白は空白ノードというテキストノードの一種です。
html要素の先頭と末尾には空白ノードは入りません。
DOMツリーのルートはdocumentオブジェクトです。

以下はただこの参照では空白ノード（テキストノード）のことを考える必要があり非常に非効率。

parentNode：	親ノードへの参照。（Documentオブジェクトを指定した場合はnull）
childNodes：	子ノードへの参照を格納するNodeList
firstChild：	最初の子ノード。（子ノードをもたない場合はnull）
lastChild：	最後の子ノード。（子ノードをもたない場合はnull）
nextSibling：	兄弟ノードの中で次のノード。（次の兄弟ノードをもたない場合はnull）
previousSibling：	兄弟ノードの中で1つ前のノード。（前の兄弟ノードをもたない場合はnull）
nodeType：	ノードの種類を表す数値。
nodeValue：	テキストノードのテキストコンテンツ。（要素ノードやドキュメントノードの場合はnull）
nodeName：	要素ノードの場合は HTMLでは大文字、XHTMLでは小文字で要素名。

テキストノードを無視して要素ノードを取り出すためのプロパティがあり

parentElement：	親要素ノードへの参照。（親要素ノードがない場合はnull）
children：	子要素ノードへの参照を格納するHTMLCollection
firstElementChild：	最初の子要素ノード。（子要素ノードがない場合はnull）
lastElementChild：	最後の子要素ノード。（子要素ノードがない場合はnull）
nextElementSibling：	兄弟要素ノードの中で次の要素ノード。（次の兄弟要素ノードをもたない場合はnull）
previousElementSibling：	兄弟要素ノードの中で1つ前の要素ノード。（前の兄弟要素ノードをもたない場合はnull）
childElementCount：	子要素ノードの数。（= children.length）
