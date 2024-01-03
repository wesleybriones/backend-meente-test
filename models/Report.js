const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Report', {
    idReport: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dateProduction: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dateExpiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    priceTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    id_employee: {
      type: DataTypes.STRING(13),
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'identification'
      }
    },
    id_client: {
      type: DataTypes.STRING(13),
      allowNull: true,
      references: {
        model: 'Client',
        key: 'identification_ruc'
      }
    }
  }, {
    sequelize,
    tableName: 'Report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReport" },
        ]
      },
      {
        name: "identification/ruc-id_client",
        using: "BTREE",
        fields: [
          { name: "id_client" },
        ]
      },
      {
        name: "identification-id_employee",
        using: "BTREE",
        fields: [
          { name: "id_employee" },
        ]
      },
    ]
  });
};
