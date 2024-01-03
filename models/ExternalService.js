const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExternalService', {
    id_externalService: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nameCompany: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    checkIn: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    chekOut: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    warranty: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isRepaired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id_solution: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Solution',
        key: 'id_solution'
      }
    }
  }, {
    sequelize,
    tableName: 'ExternalService',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_externalService" },
        ]
      },
      {
        name: "id_solution",
        using: "BTREE",
        fields: [
          { name: "id_solution" },
        ]
      },
    ]
  });
};
