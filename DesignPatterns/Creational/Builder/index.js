class Tag{
    constructor(name='',text=''){
        this.name = name;
        this.text = text;
        this.children = [];
    }
}

class HTMLBuilder{
    constructor(rootName){
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    addChild(childName,childText){
        let child = new Tag(childName,childText);
        this.root.children.push(child);
    }

    toString() {
        return this.root.toString();
    }

    clear(){
        this.root = new Tag(this.rootName)
    }

    build(){
        return root
    }
}


const hello = 'hello';
let html = []
html.push('<p>')
html.push(hello)
html.push('</p>')
console.log(html.join(''))


const words = ['hello', 'world']
html = []
html.push('<ul> \n')
for (let word of words){
    html.push(` <li>${word}</li> \n`)

}
html.push('</ul>')
console.log(html.join(''))

let builder = new HTMLBuilder('ul')
for (let word of words){
    builder.addChild('li',word)
} 
console.log(builder.root)
builder.clear()