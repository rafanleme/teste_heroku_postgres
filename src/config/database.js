// timestamp coloca created_at e updated_at nas tabelas
// underscored coloca os nomes de tabelas e atributos como snake_case

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "bcd127",
  database: "senai_overflow",
  logging: console.log,
  define: {
    timestamp: true,
    underscored: true,
  },
};
