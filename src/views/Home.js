import Ame from "ame-super-app-client";

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
    Ame.navigation.navigate(item.to);
  };
}
