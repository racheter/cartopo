var inicio = `

    <div class="apresentativo" id="s-inicio">

        <a id="aId"><img id="imagem-1"></a>
        <a id="prev" href="javascript:menos()"></br></br></br></br></br></br></br><i class="fas fa-angle-left"></i></a>
        <a id="next" href="javascript:mais()"></br></br></br></br></br></br></br><i class="fas fa-angle-right"></i></a>
        <form name="form">
        <input type=text name="texto">
        </form>
        <p>CARTOPO TOPOGRAFIA</p>
        

    </div>


    <div class="conteiner-caixa" id="s-servi">

        <div class="titulo-servi">

            <p>SERVIÇOS</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-globe-americas image-1"></i>
                <i id="image-2" class="fas fa-satellite"></i>
                <p id="titulo-planeta">RETIFICAÇÔ DE ÁREA</p>
            </div>

            <p>O procedimento de ajuste entre as divisas reais do imovel e a que consta na Matrícula do imóvel e deve ser feita quando a descrição presente na matrícula do imovel for, de alguma forma, omissa, não contendo informação necessária, imprecisa ou não condizente com a realidade</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-map image-1"></i>
                <p id="titulo-planeta">DESMENBRAMENTO</p>

            </div>

            <p>Pode trazer varios beneficios, como valorização do imovel, possibilita sua revenda, construção de casas e a doação do imóvel.</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">
                
                <i class="fas fa-atlas image-1"></i>
                <p id="titulo-planeta">USOCAPIAO</p>

            </div>

            <p>Meio de aquisição de uma propriedade, solicitado quando  possuidor exerce uma posse pacífica, mansa e ininterrupta por certo periodo especificado por lei.</p>
        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">

                <i class="fas fa-layer-group image-1"></i>
                <p id="titulo-planeta">UNIFICAÇÂO</p>

            </div>

            <p>Ao contrario do desmembramento, esse é o ato de unificar duas ou mais matrículas em uma só, seu procedimento é parecido com o desmembramento.</p>

        </div>

        <div class="caixa-informativa">

            <div class="imagem-planeta">
                
                <i class="fas fa-map-marked-alt image-1"></i>
                <p id="titulo-planeta">GEORREFERENCIAMENTO</p>

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

        <div class="caixa-sobre" id="s-sobre">

            <div>

                <p id="titulo-sobre">QUEM SOMOS</p>

            </div>

            <p>A cartopo topografia e uma empresa voltada para realização de projetos topograficos e regularizaçao de imovel rural e urbano.
oferecemos serviços com eficiência e qualidade, obedecendo a todas as normas e requisitos legais nescessarios para realizar um projeto.</p>
        </div>

    </div>


    <div class="caixa-footer" id="s-contato">

            <p class="titulo-footer"><i class="fas fa-id-card"></i> CONTATO</p>

            <div class="caixa-contato">
                <p><i class="fas fa-envelope-square"></i> E-Mail: cartopocontato@gmail.com</p>
                <p><i class="fab fa-whatsapp-square"></i> Celular: (19) 971425111</p>
                <p><i class="fab fa-instagram-square"></i>  Instagram: @cartopocontato</p>
            </div>

    </div>


    <div class="topo flex-topo">

			<img src="images/logo.png" alt="cartopo" width="auto" height="80">

			<nav class="menu flex-topo">

				    <li><a href="#s-inicio">INICIO</a></li>
                    <li><a href="#s-servi">SERVIÇOS</a></li>
                    <li><a href="#s-sobre">SOBRE</a></li>
                    <li><a href="#s-contato">CONTATO</a></li>

	        </nav>

	</div>
`


CorpoElementoMutavel.innerHTML = inicio
function InicioSelecionado() {

	CorpoElementoMutavel.innerHTML = inicio

}
