// models/airtimeRecharge.js
export default (sequelize, DataTypes) => {
  const AirtimeRecharge = sequelize.define(
    "AirtimeRecharge",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      applicationType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airtimeType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      expiryStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      expiryEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Add other attributes as needed
    },
    {}
  );

  AirtimeRecharge.associate = function (models) {
    // associations go here
    // AirtimeRecharge.belongsTo(models.Application);
    // AirtimeRecharge.belongsTo(models.AirtimeType);
  };

  return AirtimeRecharge;
};
