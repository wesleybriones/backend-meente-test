const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Problem', {
    id_problem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isSoftware: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isHardware: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    tableName: 'Problem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_problem" },
        ]
      },
      {
        name: "id_device",
        using: "BTREE",
        fields: [
          { name: "id_device" },
        ]
      },
    ]
  });
};
