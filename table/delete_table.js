import pool from "../pool.js"; // assumindo que você já tenha um pool configurado

const deleteTable = async (tableName) => {
  const queryText = `DROP TABLE IF EXISTS ${tableName};`;
  try {
    await pool.query(queryText);
    console.log(`Tabela ${tableName} deletada com sucesso.`);
  } catch (err) {
    console.error('Erro ao deletar tabela:', err);
  }
};

deleteTable('execuções');
