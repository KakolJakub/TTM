const mongoose = require('mongoose');

const MatchResult = require('../models/match-result');

exports.matchResults_get_all = (req, res, next) => {
    MatchResult.find().then((docs) => {
        res.status(200).json({
            wiadomość: 'Lista wszystkich rozgrywek',
            info: docs,
        });
    })
    .catch((err) => res.status(500).json({wiadomość: err}));
};

exports.matchResults_new = (req, res, next) => {
  var current = new Date();  
  const matchResult = new MatchResult({
      _id: new mongoose.Types.ObjectId(),
      winner: req.body.winner,
      date: current.toLocaleString(),
    });
    matchResult
      .save()
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Dodano nowy wynik',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.matchResults_get_by_id = (req, res, next) => {
    const id = req.params.matchResultId;
    MatchResult.findById(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Szczegóły rozgrywki o nr ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.matchResults_change = (req, res, next) => {
    var current = new Date();  
    const id = req.params.matchResultId;
    MatchResult.findByIdAndUpdate(
      id,
      {
        winner: req.body.winner,
        date: current.toLocaleString(),
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Zmieniono rozgrywkę o nr ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.matchResults_delete = (req, res, next) => {
    const id = req.params.matchResultId;
    MatchResult.findByIdAndDelete(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Usunięto rozgrywkę o nr ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };