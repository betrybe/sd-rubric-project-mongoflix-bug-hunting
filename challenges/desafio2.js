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
  {
    $group: {
      _id: '$_id',
      total: { $sum: 1 },
      mediaIMDB: { $avg: 'imdb.rating' },
      votosIMDB: { $sum: 'imdb.votes' }
    }
  },
  { $project: { total: '$total', mediaIMDB: { $ceil: '$mediaIMDB' }, votosIMDB: '$votosIMDB' } }
]);