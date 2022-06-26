'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    brand: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    description: { 
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull:false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};