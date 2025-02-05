const { Pool } = require('pg');
const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_VrL3dezfwu7W@ep-polished-union-a6983jsx-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require',
});

const getListNotes = async (request, response) => {
    try {
        pool.query('SELECT * FROM notes ORDER BY date ASC', (error, results) => {
            if (error) {
                console.error('Error fetching notes:', error);
                return response.status(500).send({ message: 'Error fetching notes', error });
            }
            if (results && results.rows) {
                console.log(results.rows);
                return response.status(200).send(results.rows);
            } else {
                return response.status(404).send({ message: 'No notes found' });
            }
        });
    } catch (error) {
        console.error('Error in getListNotes:', error);
        return response.status(500).send({ message: 'Error fetching notes', error });
    }
};

const createNotes = async (request, response) => {
    const { date, content } = request.body;
    try {
        pool.query('INSERT INTO notes (date, content) VALUES ($1, $2)', [date, content], (error, results) => {
            if (error) {
                console.error('Error creating note:', error);
                return response.status(500).send({ message: 'Error creating note', error });
            }
            return response.status(201).send({ date, content });
        });
    } catch (error) {
        console.error('Error creating note:', error);
        return response.status(500).send({ message: 'Error creating note', error });
    }
};

const deleteNotes = async (request, response) => {
    const id = parseInt(request.params.id);
    try {
        pool.query('DELETE FROM notes WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.error('Error deleting note:', error);
                return response.status(500).send({ message: 'Error deleting note', error });
            }
            if (results.rowCount > 0) {
                return response.status(200).send({ message: `Note with id ${id} deleted` });
            } else {
                return response.status(404).send({ message: `Note with id ${id} not found` });
            }
        });
    } catch (error) {
        console.error('Error deleting note:', error);
        return response.status(500).send({ message: 'Error deleting note', error });
    }
};

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.get('/getListNotes', getListNotes);
app.delete('/deleteNotes/:id', deleteNotes);
app.post('/createNotes', createNotes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


// setup data base on neon
// connect data base in back end
// create tables
// express for api


// for hosting, database(neon), backend(express), frontend(react)