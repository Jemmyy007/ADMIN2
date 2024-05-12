const { writeData } = require("../utils/data"); // Чтение и запись данных в JSON-файл



const sendAllGames = async (req, res) => {
    res.send(req.games);
  };

  const sendUpdatedGames = (req, res) => {
    res.send({
      games: req.games,
      updated: req.updatedObject
    });
  };



const addGameController = async (req, res) => {
    res.send({
        games: req.games, 
        updated: req.updatedObject 
    });
}



module.exports = {
    sendAllGames,
    addGameController,
    sendUpdatedGames
}