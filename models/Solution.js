const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Solution', {
    id_solution: {
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
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_problem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Problem',
        key: 'id_problem'
      }
    }
  }, {
    sequelize,
    tableName: 'Solution',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_solution" },
        ]
      },
      {
        name: "id_problem-Problem",
        using: "BTREE",
        fields: [
          { name: "id_problem" },
        ]
      },
    ]
  });
};
