db.comments.aggregate([
  {
    $match: {
      name: 'Petyr Baelish'
    }
  },
  {
    $lookup: {
      from: 'movies',
      localField: 'movie_id',
      foreignField: '_id',
      as: 'movie'
    }
  },
  { $unwind: '$movie' },
  { $unwind: '$movie.genres' },
  {
    $group: {
      _id: '$movie.genres',
      qtdFilmes: { $sum: 1 }
    }
  },
  { $sort: { qtdFilmes: -1 } },
  { $limit: 1 },
  { $project: { _id: false, genero: '$_id', total: '$qtdFilmes' } },
]);
