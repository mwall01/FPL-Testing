// const { player } = require('./player');

const { getTotalScore } = require('./player')
const player = {
	username: "Michael Wall",
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
		},
		{
			week: 31,
			points: 50,
			rank: 3,
			gameweek: 6
		},
		{
			week: 30,
			points: 49,
			rank: 3,
			gameweek: 4
		},
		{
			week: 29,
			points: 124,
			rank: 3,
			gameweek: 1
		},
		{
			week: 28,
			points: 79,
			rank: 4,
			gameweek: 10
		},
		{
			week: 27,
			points: 53,
			rank: 3,
			gameweek: 7
		},
		{
			week: 26,
			points: 119,
			rank: 4,
			gameweek: 4
		},
		{
			week: 25,
			points: 58,
			rank: 4,
			gameweek: 10
		},
		{
			week: 24,
			points: 58,
			rank: 4,
			gameweek: 9
		},
		{
			week: 23,
			points: 31,
			rank: 5,
			gameweek: 14
		},
		{
			week: 22,
			points: 53,
			rank: 4,
			gameweek: 10
		},
		{
			week: 21,
			points: 53,
			rank: 4,
			gameweek: 4
		},
		{
			week: 20,
			points: 34,
			rank: 5,
			gameweek: 6
		},
		{
			week: 19,
			points: 79,
			rank: 5,
			gameweek: 1
		},
		{
			week: 18,
			points: 51,
			rank: 6,
			gameweek: 9
		},
		{
			week: 17,
			points: 67,
			rank: 6,
			gameweek: 2
		},
		{
			week: 16,
			points: 72,
			rank: 6,
			gameweek: 1
		},
		{
			week: 15,
			points: 43,
			rank: 10,
			gameweek: 8
		},
		{
			week: 14,
			points: 45,
			rank: 8,
			gameweek: 18
		},
		{
			week: 13,
			points: 40,
			rank: 6,
			gameweek: 15
		},
		{
			week: 12,
			points: 62,
			rank: 7,
			gameweek: 6
		},
		{
			week: 11,
			points: 53,
			rank: 6,
			gameweek: 6
		},
		{
			week: 10,
			points: 43,
			rank: 7,
			gameweek: 8
		},
		{
			week: 9,
			points: 78,
			rank: 8,
			gameweek: 9
		},
		{
			week: 8,
			points: 52,
			rank: 7,
			gameweek: 9
		},
		{
			week: 7,
			points: 42,
			rank: 7,
			gameweek: 7
		},
		{
			week: 6,
			points: 54,
			rank: 9,
			gameweek: 4
		},
		{
			week: 5,
			points: 55,
			rank: 9,
			gameweek: 13
		},
		{
			week: 4,
			points: 53,
			rank: 6,
			gameweek: 14
		},
		{
			week: 3,
			points: 72,
			rank: 6,
			gameweek: 3
		},
		{
			week: 2,
			points: 60,
			rank: 6,
			gameweek: 10
		},
		{
			week: 1,
			points: 75,
			rank: 5,
			gameweek: 5
		}
	]
}

describe('getTotalScore', () => {
  test('Should return total user score', () => {
    expect( getTotalScore(player) ).toBe(2054)
  })
})

function getBestScore( player ){
  // Iterate through user scores, and update the tracking object to
  // continually have the index of the score with most points, and the 
  // number of points for comparison
  const maxScore = player.scores.reduce( (max, score, index) => {
      if (score.points > max.points) {
        return {
          index: index, 
          points: score.points
        }
      } else {
        return max
      }
  }, {index: undefined, points: 0} )

  // Select get the score object by looking up the index stored in the tracker
  const topScore = player.scores[ maxScore.index ]
  return topScore
}

module.exports = { getBestScore }

describe('getBestScore', () => {
  test('Should return the best score of a player', () => {
    const output = {
			week: 29,
			points: 124,
			rank: 3,
			gameweek: 1
    }
    expect( getBestScore(player) ).toEqual(output)
  })
})
