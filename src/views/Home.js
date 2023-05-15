/**
 * Template básico para criação de aplicações com eitri.
 */

// Importando o módulo de comunicação com o Super-APP
import Eitri from "eitri-app-client";

// Para cada View você pode criar uma classe com o nome da View
export default class Home {

  /**
   * Assim como no React, você também pode incluir funcionalidades a partir do momento
   * em que a tela terminar de ser renderizada. Bastando utilizar componentDidMount.
   */
  async componentDidMount() {

    /**
     * Como aqui estamos usando javascript, você pode utilizar mensagens de log como essa
     * abaixo e acompanhar o log através do seu terminal.
     */
    console.log("Esta é uma mensagem de Eitri")
  }
  
  /**
   * Você também pode criar funções na raiz da classe da página. Estas funções podem ser
   * atribuídas no arquivo de Views.
   */
  makeRequest = async () => {

    /**
     * De forma semelhante ao que fazemos com a biblioteca Axios, você também pode realizar
     * uma chamada HTTP para uma API. Neste exemplo estamos apenas carregando uma lista de 
     * produtos em formato JSON para ser utilizada mais tarde.
     */
    const { data } = await Eitri.http.get('https://calindra.tech/eitri/product_list.json')

    
    console.log("Dados obtidos em chamada HTTP:", data)
  }

}
