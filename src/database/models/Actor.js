module.exports = (sequelize, dataTypes) => {

    const alias = "Actor"; // Nombre a usar en consutar en db, db.ejemplo

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
        },
        favorite_movie_id: dataTypes.BIGINT(10).UNSIGNED
    }

    const config = {
        tableName: 'actors',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: 'actor_movie',
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false,
        })
    }

    return Actor;
}