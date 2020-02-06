const emBreve = () => {
  return alert("OKAY");
};

const Data = [
  {
    id_page: 0,
    actions: [{
      key: 0,
      title: "Calular Notas",
      route: "/calcular-notas",
      action: emBreve,
    },
    {
      key: 1,
      title: "Calular Notas com Peso",
      route: "/embreve",
      action: emBreve,
    },
    {
      key: 2,
      title: "Área do Retângulo",
      route: "/embreve",
      action: emBreve,
    },
    {
      key: 3,
      title: "Área do Quadrado",
      route: "/embreve",
      action: emBreve,
    }]
  },
  {
    id_page: 1,
    actions: [{
      key: 0,
      title: "Sortear Palavras",
      route: "/embreve",
      action: emBreve,
    },
    {
      key: 1,
      title: "Sortear Números",
      route: "/embreve",
      action: emBreve,
    },
    { 
      key: 2,
      title: "Localicação Atual",
      route: "/embreve",
      action: emBreve,
    },
    {
      key: 3,
      title: "Calcular IMC",
      route: "/embreve",
      action: emBreve,
    }]
  }
]

//  GERADOR DE SIGLAS

export default Data;
