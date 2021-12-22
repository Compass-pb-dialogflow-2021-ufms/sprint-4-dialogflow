const customExpress = require('./config/customExpress')

const app = customExpress();

const port_number = (process.env.PORT || 3000);
  app.listen(port_number, () => {
    console.log("Servidor está na porta 3000");
  });

  