const Milky = (name, props, ...children) => {
    const el = document.createElement(name);
    Object.keys(props || {}).forEach(key => {
        if (key === `style`) {
            Object.keys(props[key]).forEach(sk => {
                el.style[sk] = props[key][sk];
            })
        } else {
            el[key] = props[key];
        }
    })

    const addChild = (child) => {
        if(Array.isArray(child)) {
            child.forEach(c => addChild(c));
        } else if (typeof child === `object`) {
            el.appendChild(child);
        } else {
            el.appendChild(document.createTextNode(child));
        }
    }

    (children || []).forEach(c => addChild(c));

    return el;
}

export default Milky;