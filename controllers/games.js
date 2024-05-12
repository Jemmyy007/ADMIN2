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


//   const deleteGame = async (req, res) => {
//     await writeData("./data/games.json", req.games);
//     res.send({
//     games: req.games,
//     updated: req.game //game
//   });
// }

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