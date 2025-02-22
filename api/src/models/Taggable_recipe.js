const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define(
        'taggable_recipe',
        {
            recipeId: {
                type: DataTypes.UUID
            },
            tagId: {
                type: DataTypes.UUID
            }
        },
        {
            timestamp: false,
            createdAt: false,
            paranoid: false,
            deletedAt: false,
            updatedAt: false
        }
    )
}