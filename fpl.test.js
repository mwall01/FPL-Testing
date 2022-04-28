const fpl = require('./data/fpl');


describe('My test suite', () => {
  test('Testing JSON feed properties', () => {
    expect(fpl).not.toBe(null);
    expect(fpl).toBeDefined();
    expect(fpl).not.toBeUndefined();
    expect(fpl).toEqual(expect.any(Array));
    expect(typeof fpl).toBe("object");
    expect(fpl).toHaveLength(19);
  });
});

describe('Filter function', () => {
  test('Tests we can filter by search term (link)', () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toBeDefined();
    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});

function filterByTerm(inputArr, searchTerm) {
  const caseInsensitive = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(caseInsensitive);
  });
}


describe('FPL Table', () => {
  test('Tests users league position', () => {
    const input = [
      { id: 1, player: "Lawrence Redmond" },
      { id: 2, player: "Jonny Kinlan" },
      { id: 3, player: "Michael Wall" },
    ];

    const output = [{ id: 3, player: "Michael Wall" }];

    expect(filterByName(input, "Michael Wall")).toEqual(output);
  });
});

function filterByName(inputArr, searchTerm) {
  const caseInsensitive = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.player.match(caseInsensitive);
  });
}


// test("Testing fpl data", () => 
//   {
//     for(let [k, v] of Object.entries(fpl))
//     {
//       for(let [k1, v1] of Object.entries(v))
//       {
//         if(k1 == "HomeTeam" || k1 == "AwayTeam" || k1 == "Location")
//         {
//           expect(v1).not.toBeUndefined();
//           expect(v1).toBeDefined();
//           expect(v1).toBeTruthy(); 
//           expect(typeof v1).toBe("string"); // .toBe method tests for exact (===) equality
//           expect(v1).not.toMatch("Derby");
//         }
//         else if((k1 == "HomeTeamScore" && v1 != null) || (k1 == "AwayTeamScore" && v1 != null))
//         {
//           expect(v1).toEqual(expect.any(Number))
//           expect(typeof v1).toBe("number"); 
//           expect(v1).toBeGreaterThan(-1)
//           expect(v1).toBeGreaterThanOrEqual(0);
//           expect(v1).toBeLessThan(39);
//           expect(v1).toBeLessThanOrEqual(38)
//           expect(0.2 + 0.1).toBeCloseTo(0.3, 5) // Still need to understand this better 
//         }
//         else if(k1 == "RoundNumber")
//         {
//           expect(v1).toBeTruthy();
//           expect(typeof v1).toBe("number");
//           expect(v1).toBeGreaterThanOrEqual(1);
//           expect(v1).toBeLessThan(39);
//         }
//         else if(k1 == "MatchNumber")
//         {
//           expect(v1).toBeTruthy();
//           expect(typeof v1).toBe("number");
//           expect(v1).toBeGreaterThanOrEqual(0);
//           expect(v1).toBeLessThan(381);
//         }
//         else if(k1 == "Group")
//         {
//           expect(v1).toBeFalsy();
//           expect(v1).toBeNull();
//         }
//         else if(k1 == "DateUtc")
//         {
//           expect(v1).toMatch(/\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/);
//         }
//       }
//     }
// })