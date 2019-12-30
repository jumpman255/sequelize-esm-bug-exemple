export default (sequelize, DataTypes) => {
  const Model1 = sequelize.define('Model1', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  });

  return Model1;
};
