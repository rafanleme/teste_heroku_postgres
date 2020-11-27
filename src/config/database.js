// timestamp coloca created_at e updated_at nas tabelas
// underscored coloca os nomes de tabelas e atributos como snake_case

module.exports = process.env.DATABASE_URL || {
  dialect: "postgres",
  protocol: "postgres",
  host: "postgresql-perpendicular-30629",
  username: "postgres",
  password: "bcd127",
  database: "senai_overflow",
  logging: console.log,
  dialectOptions: {
    ssl: true,
  },
  define: {
    timestamp: true,
    underscored: true,
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
