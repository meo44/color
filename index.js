document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)
    let father = ''
    for(let k=0; k<2; k++) {
        const father = document.createElement('div')
        for(let i=0; i<2; i++) {
            container.appendChild(father);
            const div = document.createElement('div')
            div.classList.add('box')
            father.appendChild(div);
        }

    }
})