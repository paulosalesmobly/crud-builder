const sqlCreate = `INSERT INTO ...`

const sqlUpdate = `UPDATE VALUES ...`

const sqlDelete = `DELETE WHERE ID ...`

const sqlById = `SELECT WHERE ID ...`

const sqlByContains = `SELECT WHERE query ...`

module.exports = {
    sqlById,
    sqlByContains,
    sqlCreate,
    sqlUpdate,
    sqlDelete
}