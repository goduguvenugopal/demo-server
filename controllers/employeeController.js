const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
    try {
        const { name, number, address } = req.body;

        // Input validation
        if (!name || !number || !address) {
            return res.status(400).json({ message: 'Name, number, and address are required fields.' });
        }

        const employee = new Employee({
            name,
            number,
            address
        });

        await employee.save();
        res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createEmployee };
