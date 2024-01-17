// models/application.js
export default (sequelize, DataTypes) => {
  const Application = sequelize.define(
    'Application',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Add other attributes as needed
    },
    {}
  );

  Application.associate = function(models) {
    // associations go here
  };

  return Application;
};
