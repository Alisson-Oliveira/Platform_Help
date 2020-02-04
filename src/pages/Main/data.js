const emBreve = () => {
  return alert("OKAY");
};

const Data = [
  {
    id_page: 0,
    actions: [{
      key: 0,
      title: "Média com Peso",
      route: "/media",
      action: emBreve,
    },
    {
      key: 1,
      title: "Média sem Peso",
      route: "/media",
      action: emBreve,
    },
    { 
      key: 2,
      title: "Localicação Atual",
      route: "/locate",
      action: emBreve,
    },
    {
      key: 3,
      title: "Número Randômico",
      route: "/media",
      action: emBreve,
    }]
  },
  {
    id_page: 1,
    actions: [{
      key: 0,
      title: "Sortear Strings",
      route: "/media",
      action: emBreve,
    },
    {
      key: 1,
      title: "Calcular IMC",
      route: "/media",
      action: emBreve,
    },
    {
      key: 2,
      title: "Área do Retângulo",
      route: "/locate",
      action: emBreve,
    },
    {
      key: 3,
      title: "Área do Quadrado",
      route: "/media",
      action: emBreve,
    }]
  }
]

export default Data;
