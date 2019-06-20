import appConfig from 'src/config/app'

//Auto load api routes from modules available in: src/config/app.js "modules"
//Not edit
let pages = {}

if (appConfig && appConfig.modulesDev) {
  const modules = appConfig.modulesDev

  modules.forEach(name => {
    try {
      //Get pages according to app config in: src/config/app.js "isBackend"
      let page = (appConfig.isBackend) ?
        require(`@imagina/${name}/_config/backendPages`).default :
          require(`@imagina/${name}/_config/frontendPages`).default

      pages[name] = page
    } catch (e) {}
  })
}

//Add or update extra apiRoutes
//#example: pages.<name-page> = require('path-page').default

export default pages
