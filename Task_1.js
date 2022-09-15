const srcData = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
</list>`

function XMLtoDOM(XMLData) {
    const result = {}
    const parser = new DOMParser()

    const XMLString = XMLData

    const xmlDOM = parser.parseFromString(XMLString, 'text/xml')

    return xmlDOM
}

const listNode = XMLtoDOM(srcData).querySelector('list');
const nameNodes = listNode.querySelectorAll('name')
const firstNameNodes = listNode.querySelectorAll('first')
const secondNameNodes = listNode.querySelectorAll('second')
const ageNodes = listNode.querySelectorAll('age');
const profNodes = listNode.querySelectorAll('prof');
const langAtributs = []
nameNodes.forEach((node) => {
    langAtributs.push(node.getAttribute('lang'))
})

const result = {
    list: [
        
    ]
}

for(let i = 0; i < firstNameNodes.length; i++) {
    result.list.push({name: firstNameNodes[i].textContent + ' ' + secondNameNodes[i].textContent, age: +ageNodes[i].textContent, prof: profNodes[i].textContent, lang: langAtributs[i]});
}

console.log(result)