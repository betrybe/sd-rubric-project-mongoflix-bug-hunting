db.comments.aggregate([
  {
    $match: {
      total: { $gt: 150 }
    }
  },
  {
    $group: {
      _id: '$movie_id',
      totalComentarios: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: 'movies',
      localField: 'movie_id',
      foreignField: '_id'
    }
  },
  { $sort: { totalComentarios: -1, 'movie.title': 1 } },
  { $project: { _id: false, 'filme': '$movie.title', totalComentarios: '$totalComentarios' } }
]);