const {DataTypes} = require("sequelize")
const {Recipe} = require("./Recipe")


module.exports = (sequelize) => {
    sequelize.define("image", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        url: {
            type: DataTypes.TEXT,
            validate: {
                isUrl: true
            }
        },
        recipeId: {
            type: DataTypes.UUID,
        }
       
    })
}