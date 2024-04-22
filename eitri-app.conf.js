module.exports = {
  /**
   * Name of your mini app
   * The name will be used to identify your mini-app among the others already existing.
   */
  "name": "My Eitri App",
  /**
   * This property sets the title of the mini app in the application's title bar.
   */
  "title": "My Super Eitri App",
  /**
   * Use a unique and easy-to-read identifier here.
   * Do not use whitespace.
   * We suggest using a reverse domain as the slug.
   */
  "slug": "com.mycompany.sales",
  /**
   * Here you can include the version of your mini app.
   * Remember that you can only submit one version at a time for publication.
   */
  "version": "0.1.0",
  /**
   * Enter your company's data (Company name may contain spaces)
   * Don't forget your mini app's ownership email as well.
   */
  "organization": {
    "name": "My Company",
    "owner": {
      "email": "youremail@yourcompany.com"
    },
  },
  /**
   * Here on this line, you determine the version of the Luminus component library you will use.
   */
  "eitri-luminus": "1.30.0",
  /**
   * Here on this line, you determine the version of the Bifrost API you will use.
   */
  "eitri-bifrost": "1.4.0",

  /**
   * Enables Eitri-App to utilize unit testing functionality.
   * Note: with "type":"module" activated, imports must be done with "import" instead of "require".
   */
  "type":"module",
}
