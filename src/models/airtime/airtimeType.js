// models/airtimeType.js
export default (sequelize, DataTypes) => {
  const AirtimeType = sequelize.define(
    "AirtimeType",
    {
      type: {
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
      // Add other attributes as needed
    },
    {}
  );

  AirtimeType.associate = function (models) {
    // associations go here
  };

  return AirtimeType;
};
