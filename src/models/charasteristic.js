const charasteristic = (sequelize, DataTypes) => {
  const Charasteristic = sequelize.define('charasteristic', {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
      allowNull: false,
    },
  });
  Charasteristic.associate = (models) => {
    Charasteristic.hasMany(models.Evaluation, { onDelete: 'CASCADE' });
  };
  return Charasteristic;
};

module.exports = charasteristic;
