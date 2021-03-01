
function superbowlWin(records) {
  let result = records.find(year => year.result === 'W');
  return !!result ? result.year : undefined
}