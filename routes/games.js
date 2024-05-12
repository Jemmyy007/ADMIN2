// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const {sendAllGames, addGameController, sendUpdatedGames} = require("../controllers/games")
const { getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, findGameById, deleteGame } = require("../middlewares/games")

gamesRouter.get(
    "/games", 
    getAllGames, 
    sendAllGames)

gamesRouter.post(
    "/games", 
    getAllGames, 
    checkIsTitleInArray, 
    updateGamesArray, 
    updateGamesFile, 
    addGameController)

gamesRouter.delete(
    "/games/:id", 
    getAllGames, 
    findGameById,
    deleteGame, 
    updateGamesFile,
    sendUpdatedGames
    );


module.exports = gamesRouter;

