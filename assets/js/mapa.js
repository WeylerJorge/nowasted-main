class TipoItem {
  constructor(nome, icone) {
    this.nome = nome;
    this.icone = icone;
  }
}

const tiposDeItens = [
  new TipoItem("Eletrodomésticos", "eletrodomesticos.png"),
  new TipoItem("Bateria", "bateria.png"),
  new TipoItem("Celular", "celular.png"),
  new TipoItem("Placa para Computador", "placa_computador.png"),
  new TipoItem("HD", "hd.png"),
];

const pontosDeColeta = [
  {
    lat: -19.9255805,
    lng: -44.0891884,
    nome: "EcoPonto Fonte Grande",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[1]], // Exemplo: Aceita Eletrodomésticos e Baterias
  },
  {
    lat: -19.9570892,
    lng: -44.0349695,
    nome: "BH Recicla Reciclagem de Lixo Eletrônico e Outras Sucatas.",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[3], tiposDeItens[4]], // Exemplo: Aceita Placas para Computador e HD
  },
  {
    lat: -20.00549,
    lng: -44.16892780000001,
    nome: "Emile Reciclagem de Lixo Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Eletrodomésticos, Celulares e HD
  },
  {
    lat: -19.9431076,
    lng: -44.0048183,
    nome: "Reciclagem Horizonte BH",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[1], tiposDeItens[2], tiposDeItens[3]], // Exemplo: Aceita Baterias, Celulares e Placas para Computador
  },
  {
    lat: -19.9453905,
    lng: -43.9224724,
    nome: "E-MILE Reciclagem de Lixo Eletrônico - Agende a coleta por WhatsApp 31 99544-9937",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Celulares e HD
  },
  {
    lat: -19.9408104,
    lng: -44.00158920000001,
    nome: "MG Recicla Reciclagem de Lixo Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[3]], // Exemplo: Aceita Placas para Computador
  },
  {
    lat: -19.8919873,
    lng: -43.9080694,
    nome: "SOS GREEN Gestão de Descarte Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[1]], // Exemplo: Aceita Eletrodomésticos e Baterias
  },
  {
    lat: -19.9139503,
    lng: -43.95800610000001,
    nome: "Lithium Informática - Ecoponto E-MILE - Descarte Lixo Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Celulares e HD
  },
  {
    lat: -19.8120751,
    lng: -43.8755677,
    nome: "Inovar Ambiental Coleta, Transporte e Tratamento de Resíduos",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[3]], // Exemplo: Aceita Eletrodomésticos e Placas para Computador
  },
  {
    lat: -19.8766497,
    lng: -43.99403340000001,
    nome: "Ponto de Coleta de Lixo Eletrônico - PROPAM",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[1]], // Exemplo: Aceita Baterias
  },
  {
    lat: -19.853842,
    lng: -43.9145755,
    nome: "Reciclar Minas",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[4]], // Exemplo: Aceita HD
  },
  {
    lat: -19.9542588,
    lng: -43.9937856,
    nome: "Impulso Reciclar",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[1]], // Exemplo: Aceita Eletrodomésticos e Baterias
  },
  {
    lat: -19.9151839,
    lng: -43.9305077,
    nome: "Projeto Pro Verde - Lixo Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[3]], // Exemplo: Aceita Celulares e Placas para Computador
  },
  {
    lat: -19.8496913,
    lng: -43.8802723,
    nome: "Emile Coleta de Lixo Eletronico MG",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Celulares e HD
  },
  {
    lat: -19.925871,
    lng: -43.9527431,
    nome: "Ecoponto E-MILE de Lixo Eletrônico (CTRL+Play)",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[3]], // Exemplo: Aceita Eletrodomésticos e Placas para Computador
  },
  {
    lat: -19.9102212,
    lng: -43.9162674,
    nome: "E-MILE Coleta Lixo Eletrônico",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Celulares e HD
  },
  {
    lat: -19.7861035,
    lng: -43.98932420000001,
    nome: "Reciclagem da Preta",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[1]], // Exemplo: Aceita Eletrodomésticos e Baterias
  },
  {
    lat: -19.9297365,
    lng: -44.0805981,
    nome: "WHARGO Comércio e Reciclagem",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[3], tiposDeItens[4]], // Exemplo: Aceita Placas para Computador e HD
  },
  {
    lat: -19.9528975,
    lng: -44.0096651,
    nome: "Trindade Reciclagem",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[2], tiposDeItens[4]], // Exemplo: Aceita Celulares e HD
  },
  {
    lat: -19.95776069999999,
    lng: -43.994552,
    nome: "Reciclagem Tc",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[1], tiposDeItens[3]], // Exemplo: Aceita Baterias e Placas para Computador
  },
  {
    lat: -19.9288201,
    lng: -43.94363439999999,
    nome: "Reciclagem Santa Maria",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[2]], // Exemplo: Aceita Eletrodomésticos e Celulares
  },
  {
    lat: -19.9180323,
    lng: -43.95054270000001,
    nome: "CMR - Reciclagem de Resíduos e Sucatas Ltda",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[1], tiposDeItens[3], tiposDeItens[4]], // Exemplo: Aceita Baterias, Placas para Computador e HD
  },
  {
    lat: -19.9130812,
    lng: -43.94516660000001,
    nome: "Reciclagem Lunardi",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[2]], // Exemplo: Aceita Eletrodomésticos e Celulares
  },
  {
    lat: -19.9099723,
    lng: -43.94261830000001,
    nome: "Reciclagem Lagoinha",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[3], tiposDeItens[4]], // Exemplo: Aceita Placas para Computador e HD
  },
  {
    lat: -19.9176766,
    lng: -44.1223259,
    nome: "Reciclagem Campo alto",
    descricao: "",
    avaliacao: 0,
    itensAceitos: [tiposDeItens[0], tiposDeItens[1], tiposDeItens[2], tiposDeItens[3], tiposDeItens[4]], // Aceita todos os tipos de itens
  },
];

function inicializarMapa() {
  const localizacaoInicial = { lat: -19.917887, lng: -43.937270 };
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 11,
    center: localizacaoInicial,
  });

  const infoWindows = []; // Array para armazenar as janelas de informações

  pontosDeColeta.forEach((ponto) => {
    const marker = new google.maps.Marker({
      position: { lat: ponto.lat, lng: ponto.lng },
      map: mapa,
      title: ponto.nome,
      icon: './assets/img/elements/map_icon.png', // Substitua pelo caminho correto do ícone
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <strong>${ponto.nome}</strong>
        <p>${ponto.descricao}</p>
        <p>Avaliação: ${ponto.avaliacao}</p>
        <p>Itens Aceitos:</p>
        <ul style="list-style: none; padding: 0;">
          ${ponto.itensAceitos.map((tipoItem) => `
            <li style="margin: 5px 0;">
              <img src="./assets/img/icon/${tipoItem.icone}" alt="${tipoItem.nome}" width="30" height="30" />
              ${tipoItem.nome}
            </li>`).join('')}
        </ul>
      `,
    });

    // Adicione um evento de mouseover para exibir informações quando o mouse passa por cima
    marker.addListener("mouseover", () => {
      infoWindow.open(mapa, marker);
    });

    // Adicione um evento de mouseout para fechar a janela de informações quando o mouse sai do marcador
    marker.addListener("mouseout", () => {
      infoWindow.close();
    });

    infoWindows.push(infoWindow);
  });
}