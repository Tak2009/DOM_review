
// pタグを参照その１
const p1 = document.lastChild.lastChild.childNodes[5];
// pタグ参照その２
const p2 = document.firstElementChild.lastElementChild.children[1];

// pタグ要素ノード内にあるテキストノードにfirstChildでアクセスして、そのテキストノード内にあるValueをnodeValueで取得
const p1Text = p1.firstChild.nodeValue
// pタグ内にあるテキストを取得
const p2Text = p2.textContent

// htmlタグ参照方法１ = htmlタグ参照方法２
const html1 = document.lastChild.firstChild
// htmlタグ参照方法２ = htmlタグ参照方法１
const html2 = document.firstElementChild

// 
const html1Text1 = html1.nodeValue
// textContentはそのしたに属する全てのテキストNode内に存在するテキストを表示してしまう
const html1Text2 = html1.textContent

const html1Text3 = html1.innerText

const html1Text4 = html1.innerHTML

console.log(html1Text1)
console.log(html1Text2)
console.log(html1Text3)
console.log(html1Text4)


const html2Text1 = html2.nodeValue
// textContentはそのしたに属する全てのテキストNode内に存在するテキストを表示してしまう
const html2Text2 = html2.textContent

const html2Text3 = html2.innerText

const html2Text4 = html2.innerHTML

console.log(html2Text1)
console.log(html2Text2)
console.log(html2Text3)
console.log(html2Text4)



