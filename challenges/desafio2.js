db.movies.aggregate([
  {
    $match: {
      released: {
        $gte: ISODate('1984-01-01'),
        $lte: ISODate('1984-12-31')
      },
      genres: 'Drama'
    }
  },
  { $unwind: '$genres' },
  {
    $group: {
      _id: '$genres',
      total: { $sum: 1 },
      mediaIMDB: { $avg: '$imdb.rating' },
      votosIMDB: { $sum: '$imdb.votes' }
    }
  },
  { $project: { _id: false, total: '$total', genres: true, mediaIMDB: { $round: ['$mediaIMDB', 1] }, votosIMDB: '$votosIMDB' } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
