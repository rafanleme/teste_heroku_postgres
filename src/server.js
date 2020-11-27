//sobe a aplicação

const app = require("./app");

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log("Servido rodando na porta 3333");
});