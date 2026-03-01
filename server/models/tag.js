module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "tag",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    { underscored: true },
  );
};
