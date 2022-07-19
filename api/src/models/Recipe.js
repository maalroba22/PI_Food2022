const { DataTypes } = require('sequelize');
/* Exportando la Conexion */
module.exports = (sequelize) => {
  /* Definimos el Models */
  sequelize.define(
    'recipe',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 100,
        },
      },
      /* hace Referencia al paso a paso de la comida */
      stepbyStep: {
        type: DataTypes.TEXT,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      createIndb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
