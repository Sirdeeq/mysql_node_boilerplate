// models/report.js

export default (sequelize, DataTypes) => {
  const Report = sequelize.define(
    "Report",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      attachments: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  Report.associate = function (models) {
    // associations go here
  };

  return Report;
};
