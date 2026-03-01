module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { underscored: true },
  );
};
