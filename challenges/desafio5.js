db.comments.aggregate([
  {
    $match: {
      name: 'Petyr Baelish'
    }
  },
  {
    $lookup: {
      from: 'movies',
      localField: '_id',
      foreignField: 'movie_id',
      as: 'movie'
    }
  },
  { $unwind: '$movie.genres' },
  { $unwind: '$movie' },
  {
    $group: {
      _id: '$movie.genres',
      qtdFilmes: { $sum: 1 }
    }
  },
  { $limit: 1 },
  { $project: { genero: '$movie.genres', total: '$qtdFilmes' } }
  { $sort: { qtdFilmes: -1 } },
]);