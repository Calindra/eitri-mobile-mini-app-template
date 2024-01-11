/**
 * Basic template for creating applications with Eitri.
 */

// Importing the communication module with the Host App
import Eitri from "eitri-bifrost";

// For each View, you can create a class with the name of the View
export default class Home {

  /**
   * Just like in React, you can also include functionalities once
   * the screen has finished rendering. Just use componentDidMount.
   */
  async componentDidMount() {

    /**
     * Since we are using JavaScript here, you can use log messages like this
     * one below and track the log through your terminal.
     */
    console.log("This is an Eitri message");
  }

  /**
   * You can also create functions at the root of the page class. These functions can be
   * assigned in the Views file.
   */
  makeRequest = async () => {

    /**
     * Similar to what we do with the Axios library, you can also make
     * an HTTP call to an API. In this example, we are just loading a list of
     * products in JSON format to be used later.
     */
    const { data } = await Eitri.http.get('https://calindra.tech/eitri/product_list.json');


    console.log("Data obtained in HTTP call:", data);
  }

}
