db.comments.aggregate([
  {
    $group: {
      _id: '$movie_id',
      totalComentarios: { $sum: 1 }
    }
  },
  {
    $match: {
      totalComentarios: { $gt: 150 }
    }
  },
  {
    $lookup: {
      from: 'movies',
      localField: '_id',
      foreignField: '_id',
      as: 'movie'
    }
  },
  { $unwind: '$movie' },
  { $sort: { totalComentarios: -1, 'movie.title': 1 } },
  { $project: { _id: false, 'filme': '$movie.title', totalComentarios: '$totalComentarios' } }
]);
