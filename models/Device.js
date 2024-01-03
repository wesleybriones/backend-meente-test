const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Device', {
    id_device: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serial: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    input_day: {
      type: Sequelize.DATE,
      allowNull: true
    },
    output_day: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Device',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_device" },
        ]
      },
    ]
  });
};
