import _ from 'lodash'
import './style/index.css'
import './style/a.scss'

function createDomElement(){
    let dom = document.createElement('div')
    dom.innerHTML = _.join(['airfoce.com',' hao!','com'],'~')
    dom.classList.add("box","a","b")
    return dom
}

let divDom = createDomElement()

document.body.appendChild(divDom)

let [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)