const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Detail_Device', {
    id_detail_device: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Report',
        key: 'idReport'
      }
    },
    id_device: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Device',
        key: 'id_device'
      }
    }
  }, {
    sequelize,
    tableName: 'Detail_Device',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detail_device" },
        ]
      },
      {
        name: "id_device-Device",
        using: "BTREE",
        fields: [
          { name: "id_device" },
        ]
      },
      {
        name: "id_report-Report",
        using: "BTREE",
        fields: [
          { name: "id_report" },
        ]
      },
    ]
  });
};
