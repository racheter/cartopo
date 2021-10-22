var inicio = `

    <div class="apresentativo">

        <img src="images/conteudo.jpg" />

    </div>

    <div class="topo flex-topo">

			<img src="images/logo.png" alt="cartopo" width="90" height="80">

			<nav class="menu flex-topo">

				<li id="mutavel"><a href="#">CARTOPO TOPOGRAFIA</a></li>

	        </nav>

	</div>


    <div class="conteiner-caixa">

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-globe-americas image-1"></i>
                <i id="image-2" class="fas fa-satellite"></i>
                <p id="titulo-planeta">Retificação de área</p>
            </div>

            <p>O procedimento de ajuste entre as divisas reais do imovel e a que consta na Matrícula do imóvel e deve ser feita quando a descrição presente na matrícula do imovel for, de alguma forma, omissa, não contendo informação necessária, imprecisa ou não condizente com a realidade</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-map image-1"></i>
                <p id="titulo-planeta">Desmenbramento</p>

            </div>

            <p>Pode trazer varios beneficios, como valorização do imovel, possibilita sua revenda, construção de casas e a doação do imóvel.</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">
                
                <i class="fas fa-atlas image-1"></i>
                <p id="titulo-planeta">Usucapiao</p>

            </div>

            <p>Meio de aquisição de uma propriedade, solicitado quando  possuidor exerce uma posse pacífica, mansa e ininterrupta por certo periodo especificado por lei.</p>
        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-layer-group image-1"></i>
                <p id="titulo-planeta">Unificação</p>

            </div>

            <p>Ao contrario do desmembramento, esse é o ato de unificar duas ou mais matrículas em uma só, seu procedimento é parecido com o desmembramento.</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">
                
                <i class="fas fa-map-marked-alt image-1"></i>
                <p id="titulo-planeta">Georreferenciamento</p>

            </div>

            <p>Georreferenciamento é um instrumento do INCRA que define dimensão, forma e localização exata do imóvel rural, com isso também define sua confrontação, limites e características. Deve ser feito por um profissional registrado no CONFEA/CREA e credenciado do INCRA.</p>
        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">
                
                <i class="fas fa-atlas image-1"></i>
                <p id="titulo-planeta">CAR</p>

            </div>

            <p>O Cadastro Ambiental Rural (CAR) é um registro público eletrônico, obrigatório para todos os imóveis rurais, que tem por finalidade integrar as informações ambientais referentes à situação das áreas de preservação permanente (APP), das áreas de reserva legal, das florestas e dos remanescentes de vegetação nativa, das áreas de uso restrito e das áreas consolidadas das propriedades e posses rurais do país.

</p>
        </div>

    </div>
    

    <div>

        <div class="caixa-sobre">

            <div>

                <p id="titulo-sobre">Quem somos</p>

            </div>

            <p>A cartopo topografia e uma empresa voltada para realização de projetos topograficos e regularizaçao de imovel rural e urbano.
oferecemos serviços com eficiência e qualidade, obedecendo a todas as normas e requisitos legais nescessarios para realizar um projeto.</p>
        </div>

    </div>


    <div class="caixa-footer">

            <p class="titulo-footer"><i class="fas fa-id-card"></i> CONTATO</p>

            <div class="caixa-contato">
                <p><i class="fas fa-envelope-square"></i> E-Mail: cartopocontato@gmail.com</p>
                <p><i class="fab fa-whatsapp-square"></i> Celular: (19) 971425111</p>
                <p><i class="fab fa-instagram-square"></i>  Instagram: @cartopocontato</p>
            </div>

    </div>
`


CorpoElementoMutavel.innerHTML = inicio
function InicioSelecionado() {

	CorpoElementoMutavel.innerHTML = inicio

}