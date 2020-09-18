db.movies.aggregate([
  {
    $match: {
      released:{
        $gte: ISODate('2001-01-01'),
        $lte: ISODate('2001-12-31')  
      },
      countries: 'New Zealand'
    }
  },
  { $sort: { runtime: 1 } },
  { $unwind: 'cast' },
  { $project: { _id: false, nome: 'cast' } }
]);