// TESTE DB

let dados = [
    {temporada: 1, ep_qtd: 10, ep: ["Ep 01: O Inverno Está Chegando",  "Ep 02: A Estrada do Rei",               "Ep 03: Lorde Snow",                        "Ep 04: Aleijados, Bastardos e Coisas Partidas",  "Ep 05: O Lobo e o Leão",          "Ep 06: Uma Coroa Dourada",                            "Ep 07: Ganhar ou Morrer",         "Ep 08: A Ponta Afiada",            "Ep 09: Baelor",                      "Ep 10: Fogo e Sangue"]},
    {temporada: 2, ep_qtd: 10, ep: ["Ep 01: O Norte Se Lembra",        "Ep 02: As Terras Noturnas",             "Ep 03: O Que Está Morto Não Pode Morrer",  "Ep 04: O Jardim dos Ossos",                      "Ep 05: O Fantasma de Harrenhal",  "Ep 06: Os Deuses Antigos e os Novos",                 "Ep 07: Um Homem Sem Honra",       "Ep 08: O Príncipe de Winterfell",  "Ep 09: Água Negra",                  "Ep 10: Valar Morghulis"]},
    {temporada: 3, ep_qtd: 10, ep: ["Ep 01: Valar Dohaeris",           "Ep 02: Asas Negras, Palavras Negras",   "Ep 03: A Caminhada da Punição",            "Ep 04: E Agora Sua Patrulha Terminou",           "Ep 05: Beijado Pelo Fogo",        "Ep 06: A Escalada",                                   "Ep 07: O Urso e a Bela Donzela",  "Ep 08: Segundos Filhos",           "Ep 09: As Chuvas de Castamere",      "Ep 10: Mhysa"]},
    {temporada: 4, ep_qtd: 10, ep: ["Ep 01: Duas Espadas",             "Ep 02: O Leão e a Rosa",                "Ep 03: Quebradora de Correntes",           "Ep 04: Cumpridora de Promessas",                 "Ep 05: O Primeiro de Seu Nome",   "Ep 06: As Leis dos Deuses e dos Homens",              "Ep 07: Sabiá",                    "Ep 08: A Montanha e a Víbora",     "Ep 09: Os Patrulheiros da Muralha",  "Ep 10: As Crianças"]},
    {temporada: 5, ep_qtd: 10, ep: ["Ep 01: As Guerras Que Virão",     "Ep 02: A Casa do Preto e Branco",       "Ep 03: Alto Pardal",                       "Ep 04: Os Filhos da Harpia",                     "Ep 05: Mate o Garoto",            "Ep 06: Não Rebaixados, Não Curvados, Não Quebrados",  "Ep 07: O Presente",               "Ep 08: Durolar",                   "Ep 09: A Dança dos Dragões",         "Ep 10: A Misericórdia da Mãe"]},
    {temporada: 6, ep_qtd: 10, ep: ["Ep 01: A Mulher Vermelha",        "Ep 02: Lar",                            "Ep 03: Quebrador de Promessas",            "Ep 04: O Livro do Estranho",                     "Ep 05: A Porta",                  "Ep 06: Sangue do Meu Sangue",                         "Ep 07: O Homem Quebrado",         "Ep 08: Ninguém",                   "Ep 09: A Batalha dos Bastardos",     "Ep 10: Os Ventos do Inverno"]},
    {temporada: 7, ep_qtd: 7,  ep: ["Ep 01: Pedra do Dragão",          "Ep 02: Nascida da Tormenta",            "Ep 03: A Justiça da Rainha",               "Ep 04: Os Despojos da Guerra",                   "Ep 05: Atalaialeste",             "Ep 06: Além da Muralha",                              "Ep 07: O Dragão e o Lobo"]},
    {temporada: 8, ep_qtd: 6,  ep: ["Ep 01: Winterfell",               "Ep 02: Uma Cavaleira dos Sete Reinos",  "Ep 03: A Longa Noite",                     "Ep 04: Os Últimos Starks",                       "Ep 05: Os Sinos",                 "Ep 06: O Trono de Ferro"]},
];



// Trailer

function abrirPopUpPlay() {
    document.getElementById('pop-up').style.display = 'block';
    document.getElementById('pop-up-container').innerHTML = `
        <button onclick="fecharPopUp()">Fechar</button>
        <object>
            <param name="movie" value="http://www.youtube.com/v/KYKpcWuZDYs" />
            <embed class="videoBox" src="http://www.youtube.com/v/KYKpcWuZDYs" type="application/x-shockwave-flash" />
        </object>
    `
}

function fecharPopUp() {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('pop-up-container').innerHTML = ``
}

// Informações

function abrirPopUpInfo() {
    document.getElementById('pop-up').style.display = 'block';
    document.getElementById('pop-up-container').innerHTML = `
        <button onclick="fecharPopUp()">Fechar</button>
        <div class="informacoes">
            <br/><h1 align="center" class="lbl-temporadas">Temporadas</h1>
            <div>
                <ul>
                    <li onclick="escolherInfo(1)">1</li>
                    <li onclick="escolherInfo(2)">2</li>
                    <li onclick="escolherInfo(3)">3</li>
                    <li onclick="escolherInfo(4)">4</li>
                    <li onclick="escolherInfo(5)">5</li>
                    <li onclick="escolherInfo(6)">6</li>
                    <li onclick="escolherInfo(7)">7</li>
                    <li onclick="escolherInfo(8)">8</li>
                </ul>
            </div>
            <div class="corpo-informacoes">
                <div class="tabela-informacoes" ></div>
            </div>
            <div class="footer-informacoes">
                <a class="assistir" href="https://www.hbomax.com/">Cadastre-se para assistir</a><br/>
            </div>
        </div>
    `
}


function escolherInfo(i){

    $('.tabela-informacoes').html('');

    dados.forEach(element => {
        if(element.temporada == i) { 
            element.ep.forEach(episodio => {

                let bloco2 = `  
                    <ul>${episodio}</ul>  
                `;
                
                $('.tabela-informacoes').append(bloco2);   
            });

        }
    });

};
