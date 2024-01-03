const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Replacement', {
    id_replacement: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    warranty: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'Replacement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_replacement" },
        ]
      },
      {
        name: "id_solution-Solution",
        using: "BTREE",
        fields: [
          { name: "id_solution" },
        ]
      },
    ]
  });
};
