function customRender(reactElement,container)
{
    /*
       const domEle = document.createElement(reactElement.type)
       domEle.innerHTML = reactElement.Children
       domEle.setAttribute('href', reactElement.props.href)
       domEle.setAttribute('target', reactElement.props.target)
       container.appendChild(domEle)
    */
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        if(prop === 'children'){continue}
        domEle.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domEle)
}
const reactElement = {
    type:'a', // div,h1...
    props : {
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}
const container = document.querySelector('#root')
customRender(reactElement,container)