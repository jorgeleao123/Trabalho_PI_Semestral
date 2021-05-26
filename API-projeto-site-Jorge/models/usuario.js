	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Cliente_Jorge = sequelize.define('Cliente_Jorge',{
		id_cliente: {
			field: 'id_cliente',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		tipo_automovel: {
			field: 'tipo_automovel',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		descricao_mudanca: {
			field: 'descricao_mudanca',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'cliente_Jorge', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Cliente_Jorge;
};
