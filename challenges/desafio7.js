db.movies.aggregate([
  {
    $match: {
      'awards.text': { $regex: /Won \w+ oscar/i },
      released: {
        $gte: ISODate('2003-01-01'),
        $lte: ISODate('2003-12-31')

      },
    }
  },
  { $addFields: { regexAwards: { $regexFind: { input: "$awards.text", regex: /Won (\w+) oscar/i } } } },
  { $unwind: '$regexAwards.captures' },
  { $addFields: { oscarWins: { $toInt: '$regexAwards.captures' } } },
  { $project: { _id: false, title: true, oscarWins: true } },
  { $sort: { oscarWins: -1 } },
  { $limit: 1 }
]);
