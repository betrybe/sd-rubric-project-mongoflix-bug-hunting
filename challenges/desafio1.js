db.movies.aggregate([
  { $unwind: '$directors' },
  {
    $group: {
      _id: '$directors',
      filmes: { $sum: 1 }
    }
  },
  { $project: { _id: false, diretor: '$_id', filmes: '$filmes' } },
  { $sort: { filmes: -1 } },
  { $limit: 10 }
]);