export default {
	id: 'sql-stored-procedure',
	name: 'Execute SQL Stored Procedure',
	icon: 'box',
	description: 'Custom operation to execute SQL Stored Procedure ',
	overview: ({ stored_procedure_name }) => [
		{
			label: 'Stored Procedure Name',
			stored_procedure_name: stored_procedure_name,
		},
	],
	options: [
		{
			field: 'stored_procedure_name',
			name: 'Stored Procedure Name',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
};
