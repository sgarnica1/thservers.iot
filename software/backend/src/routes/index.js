const config = require("../config/index");
const temphumidityRouter = require("./temphumidity.routes");
const initRouter = require("./init.routes");

const initRoutes = app => {
  app.use(`${config.BASE_PATH}/`, initRouter);
  app.use(`${config.BASE_PATH}/data`, temphumidityRouter);
}

module.exports = initRoutes;