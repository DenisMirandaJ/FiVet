'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    rut: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {});
  Persona.associate = function(models) {
    // associations can be defined here
  };
  return Persona;
};