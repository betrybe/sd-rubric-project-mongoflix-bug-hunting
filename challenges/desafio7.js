db.movies.aggregate([
  {
    $match: {
      'awards.text': { $regex: /Won \w+ oscar/i },
      released: {
        $lte: ISODate('2003-12-31')
      },
    }
  },
  { $addFields: { regexAwards: { $regexFind: { input: "$awards.text", regex: /Won (\w+) oscar/i } } } },
  { $unwind: '$regexAwards.captures' },
  { $addFields: { oscarWins: '$regexAwards.captures' } },
  { $project: { _id:false, title: true, oscarWins: true} }
]);