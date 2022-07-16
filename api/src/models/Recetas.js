const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
/* Exportando la Conexion */
module.exports = (sequelize) => {
  /* Definimos el Models */
  sequelize.define('recetas', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntaje: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    pasos: {
      type: DataTypes.TEXT,
    },
    imagen: {
      type: DataTypes.STRING,
    },
  });
};
