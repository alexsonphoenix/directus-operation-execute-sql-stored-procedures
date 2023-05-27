export default {
	id: 'sql-stored-procedure',
	handler: ({ stored_procedure_name }, { database, exceptions }) => {
		console.log(stored_procedure_name);

		const { ServiceUnavailableException } = exceptions;
		
		database.raw(`EXEC ${stored_procedure_name};`)
			.then((results) => res.json(results))
			.catch((error) => {
				throw new ServiceUnavailableException(error.message);
			});
	},
	
};
