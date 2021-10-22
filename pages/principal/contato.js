function ContatoSelecionado() {

	CorpoElementoMutavel.innerHTML = `
		<div class="topo flex-topo">

			<img src="images/logo.png" alt="cartopo" width="90" height="80">

			<nav class="menu flex-topo">

	            <li><a id="MenuInicio" href="#" onclick="InicioSelecionado()">Inicio</a></li>
		        <li><a id="MenuAnuncios" href="#" onclick="SobreSelecionado()">Sobre</a></li>
		        <li id="mutavel"><a id="MenuProjetos" href="#" onclick="ContatoSelecionado()">Contato</a></li>

	        </nav>

	    </div>
	    
		<div class="centro">

			<img src="images/conteudo.jpg" alt="cartopo">


		</div>
`

}