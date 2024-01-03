var DataTypes = require("sequelize").DataTypes;
var _Bill = require("./Bill");
var _Client = require("./Client");
var _Detail_Bill = require("./Detail_Bill");
var _Detail_Device = require("./Detail_Device");
var _Device = require("./Device");
var _Employee = require("./Employee");
var _ExternalService = require("./ExternalService");
var _Problem = require("./Problem");
var _Replacement = require("./Replacement");
var _Report = require("./Report");
var _Solution = require("./Solution");

function initModels(sequelize) {
  var Bill = _Bill(sequelize, DataTypes);
  var Client = _Client(sequelize, DataTypes);
  var Detail_Bill = _Detail_Bill(sequelize, DataTypes);
  var Detail_Device = _Detail_Device(sequelize, DataTypes);
  var Device = _Device(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var ExternalService = _ExternalService(sequelize, DataTypes);
  var Problem = _Problem(sequelize, DataTypes);
  var Replacement = _Replacement(sequelize, DataTypes);
  var Report = _Report(sequelize, DataTypes);
  var Solution = _Solution(sequelize, DataTypes);

  Bill.belongsTo(Client, { as: "id_client_Client", foreignKey: "id_client"});
  Client.hasMany(Bill, { as: "Bills", foreignKey: "id_client"});
  Report.belongsTo(Client, { as: "id_client_Client", foreignKey: "id_client"});
  Client.hasMany(Report, { as: "Reports", foreignKey: "id_client"});
  Detail_Device.belongsTo(Device, { as: "id_device_Device", foreignKey: "id_device"});
  Device.hasMany(Detail_Device, { as: "Detail_Devices", foreignKey: "id_device"});
  Problem.belongsTo(Device, { as: "id_device_Device", foreignKey: "id_device"});
  Device.hasMany(Problem, { as: "Problems", foreignKey: "id_device"});
  Bill.belongsTo(Employee, { as: "id_employee_Employee", foreignKey: "id_employee"});
  Employee.hasMany(Bill, { as: "Bills", foreignKey: "id_employee"});
  Report.belongsTo(Employee, { as: "id_employee_Employee", foreignKey: "id_employee"});
  Employee.hasMany(Report, { as: "Reports", foreignKey: "id_employee"});
  Solution.belongsTo(Problem, { as: "id_problem_Problem", foreignKey: "id_problem"});
  Problem.hasMany(Solution, { as: "Solutions", foreignKey: "id_problem"});
  Detail_Device.belongsTo(Report, { as: "id_report_Report", foreignKey: "id_report"});
  Report.hasMany(Detail_Device, { as: "Detail_Devices", foreignKey: "id_report"});
  Detail_Bill.belongsTo(Solution, { as: "id_solution_Solution", foreignKey: "id_solution"});
  Solution.hasMany(Detail_Bill, { as: "Detail_Bills", foreignKey: "id_solution"});
  ExternalService.belongsTo(Solution, { as: "id_solution_Solution", foreignKey: "id_solution"});
  Solution.hasMany(ExternalService, { as: "ExternalServices", foreignKey: "id_solution"});
  Replacement.belongsTo(Solution, { as: "id_solution_Solution", foreignKey: "id_solution"});
  Solution.hasMany(Replacement, { as: "Replacements", foreignKey: "id_solution"});

  return {
    Bill,
    Client,
    Detail_Bill,
    Detail_Device,
    Device,
    Employee,
    ExternalService,
    Problem,
    Replacement,
    Report,
    Solution,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
