const database = require('./contexts_db_connection');

export async function Select(queryText: any) {
	return new Promise((resolve, reject) => {
		let query = database.db.query(queryText, function (err: any, rows: any, fields: any) {
			if (err) {
				reject(err);
				console.log(err);
			} else if (rows.length === 0) {
				reject(new Error('Data not found'));
			} else {
				resolve(rows);
			}
		});
	});
}
export async function sqlParserId(responseData: any) {
	return responseData.reduce((el: any) => ({ ...el }));
}

export function deleteContextByIdLastQueryInContexts() {
	return `DELETE FROM contexts WHERE id = (SELECT id FROM contexts ORDER BY id DESC LIMIT 1)`;
}

export function deleteLanguageByIdLastQueryInLanguages() {
	return `DELETE FROM languages WHERE id = (SELECT id FROM languages ORDER BY id DESC LIMIT 1)`;
}
