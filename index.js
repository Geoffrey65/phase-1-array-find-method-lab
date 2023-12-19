function superbowlWin(record) {
    // **Search for the first year the Denver Broncos won the Super Bowl.**
    // **If no win is found, return undefined.**
  
    // Use `find` to locate the first object in the record with a "W" result.
    const winningYear = record.find(game => game.result === "W");
  
    // If a winning year was found, extract and return it.
    if (winningYear) {
      return winningYear.year;
    }
  
    // No win found, return undefined.
    return undefined;
  }
  