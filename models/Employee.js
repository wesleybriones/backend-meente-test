const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    identification: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    names: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    surnames: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identification" },
        ]
      },
    ]
  });
};
