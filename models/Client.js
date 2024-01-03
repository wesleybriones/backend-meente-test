const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Client', {
    identification_ruc: {
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
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(13),
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
    state: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Client',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identification_ruc" },
        ]
      },
    ]
  });
};
