db.movies.aggregate([
  {
    $match: {
      type: 'movie',
      'awards.text': { $regex: /Nominated for \w+ Primetime Emmy./i },
      released: {
        $gte: ISODate('2015-01-01'),
        $lte: ISODate('2015-12-31')
      },
    }
  },
  { $unwind: '$countries' },
  { $addFields: { regexAwards: { $regexFind: { input: "$awards.text", regex: /Nominated for (\w+) Primetime Emmy./ } } } },
  {
    $group: {
      _id: '$countries',
      nominations: { $sum: { $toInt: '$regexAwards.captures' } }
    },
  },
  { $project: { _id: false, country: '$_id', nominations: '$nominations' } }
]);