'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceHs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InvoiceHs.init({
    userId: DataTypes.INTEGER,
    invoiceNo: DataTypes.STRING(20),
    totalPrice: DataTypes.FLOAT(12,2)
  }, {
    sequelize,
    modelName: 'InvoiceHs',
  });
  return InvoiceHs;
};