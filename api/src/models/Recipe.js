const { DataTypes } = require("sequelize")
const LoremIpsum = require("lorem-ipsum").LoremIpsum

const lorenIpson = new LoremIpsum({
    sentencesPerParagraph:{
        max: 4,
        min: 1
    },
    wordsPerSentence: {
        max: 10,
        min: 5
    },
   random: Math.random
})

module.exports= (sequelize) => {
    sequelize.define("recipe", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: false,

        },
        imageUrl: {
            type: DataTypes.TEXT,
            unique: false
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: lorenIpson.generator.generateRandomWords(10),
            set(value) {
                const words = Array.from(value).sort()
                this.setDataValue(words)
            }
        },

        cookTimeMinutes: {
            type: DataTypes.INTEGER,
        },
        // tools:{
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        // },
        instructions: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
        },
        prepTimeMinutes: {
            type:DataTypes.INTEGER,
        },
        servings: {
            type:DataTypes.INTEGER
        },
        
        cuisine: {
            type: DataTypes.STRING,
        },
        // Op: {
        //     type: DataTypes.STRING,
           
        // },
        // tips: {
        //     type: DataTypes.ARRAY(DataTypes.TEXT),
        //     allowNull: true

        // },
        stars: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        difficulty: {
            type: DataTypes.STRING
        }
    },{
        timestamp: true,
        createdAt: "postedAt",
        paranoid: true,
        deletedAt: "eliminationDate",
        updatedAt: "ultimaModificación"

    })
}