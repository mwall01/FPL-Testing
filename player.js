const player = {
  name: "Michael Wall",
  scores: [
    {
      week: 34,
      points: 73,
      rank: 2,
      gameweek: 2
    },
    {
      week: 33,
      points: 75,
      rank: 3,
      gameweek: 8
    },
    {
      week: 32,
      points: 49,
      rank: 3,
      gameweek: 6
    }
  ]
}

function getTotalScore( player ){
  // iterate through the blog entries and sum the like values
  const totalLikes = player.scores.reduce( (total, score) => {
    return total += score.points
  }, 0)

  return totalLikes
}

module.exports = { getTotalScore };