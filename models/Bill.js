const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bill', {
    id_bill: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    elaboration: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_employee: {
      type: DataTypes.STRING(13),
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'identification'
      }
    },
    id_client: {
      type: DataTypes.STRING(13),
      allowNull: false,
      references: {
        model: 'Client',
        key: 'identification_ruc'
      }
    }
  }, {
    sequelize,
    tableName: 'Bill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bill" },
        ]
      },
      {
        name: "id_employee-Employee",
        using: "BTREE",
        fields: [
          { name: "id_employee" },
        ]
      },
      {
        name: "id_client-Client",
        using: "BTREE",
        fields: [
          { name: "id_client" },
        ]
      },
    ]
  });
};
