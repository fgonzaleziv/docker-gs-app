const { Pool } = require('pg')
const fs = require('fs');
const pool = new Pool(credentials)

const credentials = {
    user: "postgres",
    host: "",
    database: "todos",
    password: "yourpassword",
    port: 5432,
  };

async function init() {}


async function getItems() {
    const text = `SELECT * FROM todo_items WHERE id = $1`;
    return new Promise((acc, rej) => {
        pool.query(text, (err, rows) => {
            if (err) return rej(err);
            acc(
                rows.map(item =>
                    Object.assign({}, item, {
                        completed: item.completed === 1,
                    }),
                ),
            );
        });
    });
  }

  async function storeItem(item) {
    const text = `
    INSERT INTO todo_items (id, name, completed)
    VALUES ($1, $2, $3)
  `;
  const values = [item.name, item.completed ? 1 : 0, id];
    return new Promise((acc, rej) => {
        pool.query(
            text,
            values,
            err => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}
