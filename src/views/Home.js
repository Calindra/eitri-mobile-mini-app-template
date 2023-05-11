import Eitri from "eitri-app-client";

export default class Home {
  state = {
    links: [
      {
        title: "About",
        subtitle: "Última versão dos componentes",
        to: "/About",
      },
      {
        title: "More",
        subtitle: "Mais detalhes sobre os componentes",
        to: "/More",
      }
    ]
  };
  navigateTo = (item) => {
    Eitri.navigation.navigate(item.to);
  };
}
