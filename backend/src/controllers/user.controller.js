const db = require('../database/connection');

class UserController {
  // Listar usuários
  static list(req, res) {
    const query = `
      SELECT id, name, email, created_at
      FROM users
      ORDER BY created_at DESC
    `;
    db.all(query, [], (err, rows) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar usuários' });
      return res.status(200).json(rows);
    });
  }

  // Criar usuário
  static create(req, res) {
    const { name, email } = req.body;

    if (!name || !email) return res.status(400).json({ error: 'Nome e email são obrigatórios' });

    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    db.get(checkQuery, [email], (err, row) => {
      if (err) return res.status(500).json({ error: 'Erro ao verificar email' });
      if (row) return res.status(400).json({ error: 'Email já cadastrado' });

      const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
      db.run(insertQuery, [name, email], function (err) {
        if (err) return res.status(500).json({ error: 'Erro ao criar usuário' });

        return res.status(201).json({
          id: this.lastID,
          name,
          email,
          created_at: new Date().toISOString()
        });
      });
    });
  }

  // Atualizar usuário
  static update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) return res.status(400).json({ error: 'Nome e email são obrigatórios' });

    // Verifica se o usuário existe
    const checkUserQuery = 'SELECT * FROM users WHERE id = ?';
    db.get(checkUserQuery, [id], (err, user) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar usuário' });
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

      // Verifica se email já está em uso por outro usuário
      const checkEmailQuery = 'SELECT * FROM users WHERE email = ? AND id != ?';
      db.get(checkEmailQuery, [email, id], (err, row) => {
        if (err) return res.status(500).json({ error: 'Erro ao verificar email' });
        if (row) return res.status(400).json({ error: 'Email já cadastrado' });

        // Atualiza o usuário
        const updateQuery = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.run(updateQuery, [name, email, id], function (err) {
          if (err) return res.status(500).json({ error: 'Erro ao atualizar usuário' });

          return res.status(200).json({
            id: parseInt(id),
            name,
            email,
            created_at: user.created_at
          });
        });
      });
    });
  }

  // Deletar usuário
  static delete(req, res) {
    const { id } = req.params;

    // Verifica se o usuário existe
    const checkUserQuery = 'SELECT * FROM users WHERE id = ?';
    db.get(checkUserQuery, [id], (err, user) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar usuário' });
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

      // Deleta o usuário
      const deleteQuery = 'DELETE FROM users WHERE id = ?';
      db.run(deleteQuery, [id], function (err) {
        if (err) return res.status(500).json({ error: 'Erro ao deletar usuário' });

        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
      });
    });
  }
}

module.exports = UserController;