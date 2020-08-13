firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

function firstRecurringCharacter(num) {
  let result = {};

  for (let i = 0; i < num.length; i++) {
    if (!result[num[i]]) {
      result[num[i]] = num[i];
    } else {
      return result[num[i]];
    }
  }
}
