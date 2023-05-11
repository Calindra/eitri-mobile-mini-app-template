import Eitri from 'eitri-app-client';
export default class More {
  // Esta função é responsável por abrir uma URL externa
  accessPortal = () => {
    if (typeof Eitri.openBrowser === 'function') {
      // Este método só aceita URL's seguras com protocolo HTTPS
      Eitri.openBrowser({ url: 'https://developer.eitri.calindra.com.br/' });
    } else {
      // Exibir um alerta ao usuário caso ele esteja com um aplicativo desatualizado.
      Eitri.alert({
        title: 'Ops',
        description: 'Parece que o seu Aplicativo do EITRI não está atualizado.',
        buttonText: 'OK',
      });
    }
  };
}
