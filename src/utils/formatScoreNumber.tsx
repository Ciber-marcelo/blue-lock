export function formatScoreNumber(score: number) {
  if (score >= 90) {
    return "S";
  }
  else if (score >= 80) {
    return "A"
  }
  else if (score >= 70) {
    return "B"
  }
  else if (score >= 60) {
    return "C"
  }
  else if (score >= 50) {
    return "D"
  }
  else if (score >= 40) {
    return "E"
  }
  else if (score >= 30) {
    return "F"
  }
  else {
    return "G"
  }
}
