const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Detail_Bill', {
    id_detail_bill: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iva: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    id_bill: {
      type: DataTypes.INTEGER,
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
    tableName: 'Detail_Bill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detail_bill" },
        ]
      },
      {
        name: "id_bill-Bill",
        using: "BTREE",
        fields: [
          { name: "id_bill" },
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
