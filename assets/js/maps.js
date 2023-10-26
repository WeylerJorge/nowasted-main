  function inicializarMapa() {
    const localizacaoInicial = { lat: -23.550520, lng: -46.633308 }; // Coordenadas iniciais do mapa
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 10, // Nível de zoom inicial
      center: localizacaoInicial,
    });

    // Array de pontos de coleta (coordenadas e tipos de materiais)
    const pontosDeColeta = [
      { lat: -23.555, lng: -46.650, tipo: "Placa Eletrônica" },
      { lat: -23.560, lng: -46.635, tipo: "Computadores" },
      { lat: -23.545, lng: -46.625, tipo: "Baterias" },
      // Adicione mais pontos de coleta conforme necessário
    ];

    // Ícones personalizados
    const icones = {
      "Placa Eletrônica": "icone-placa-eletronica.png",
      "Computadores": "icone-computadores.png",
      "Baterias": "icone-baterias.png",
      // Adicione mais tipos de materiais e ícones correspondentes
    };

    // Adicionar marcadores ao mapa
    pontosDeColeta.forEach((ponto) => {
      const marker = new google.maps.Marker({
        position: { lat: ponto.lat, lng: ponto.lng },
        map: mapa,
        icon: icones[ponto.tipo], // Use o ícone correspondente ao tipo de material
        title: ponto.tipo, // Exibe o tipo de material quando o marcador é clicado
      });
    });
  }
