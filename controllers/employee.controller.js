const Employee = require('../models/employee.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.employee_create = function (req, res) {
  let employee = new Employee(
    {
      id: req.body.id,
      name: req.body.name,
      team: req.body.team,
      age: req.body.age
    }
  );

  employee.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Employee Created successfully');
  });
};
