/**
 * Ajoute un element ou cree un element
 * @param {*} type 
 * @param {*} props 
 * @param  {...any} children 
 */
export function createElement(type, props, ...children) {
    return {
        type,
        props : {
            ...props,
            children : children.map(child => {
                return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }
}

/**
 * Crée un noeud de type text
 * @param {*} text 
 * @return {{type : string, props:{nodeValue: *, children: []}}}
 */
function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            children : [],
            abc: text,
        }
    }
}

