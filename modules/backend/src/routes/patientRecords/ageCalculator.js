const ageCalculator = (dateOfBirth) => {
  const age = new Date() - new Date(dateOfBirth)
  return Math.floor(age / (24 * 3600 * 365.25 * 1000) * 12 ) //
}

export default ageCalculator