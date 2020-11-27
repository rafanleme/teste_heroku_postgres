// timestamp coloca created_at e updated_at nas tabelas
// underscored coloca os nomes de tabelas e atributos como snake_case

module.exports = process.env.CLEARDB_DATABASE_URL || {
  dialect: "postgres",
  host: "postgresql-perpendicular-30629",
  username: "postgres",
  password: "bcd127",
  database: "senai_overflow",
  logging: console.log,
  define: {
    timestamp: true,
    underscored: true,
  },
};
