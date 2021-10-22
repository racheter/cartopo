const funcbtn = document.createElement('script')

funcbtn.src = './script/botao.js'

document.head.appendChild(funcbtn)



const baseElementoMutavel = document.getElementById('cima')
const base = document.createElement('script')

base.src = './pages/principal/base.js'

document.head.appendChild(base)


const CorpoElementoMutavel = document.getElementById('article')
const InicioPage = document.createElement('script')

InicioPage.src = './pages/principal/inicio.js'

document.head.appendChild(InicioPage)


const socialElementoMutavel = document.getElementById('aside')
const social = document.createElement('script')

social.src = './pages/principal/social.js'

document.head.appendChild(social)


const footerElementoMutavel = document.getElementById('footer')
const footer = document.createElement('script')

footer.src = './pages/principal/footer.js'

document.head.appendChild(footer)