// calculate difference between years
export function getDifYear (year) {
  return new Date().getFullYear() - year
}

// calculate total to pay based on brand
export function totalToPay (brand) {
  let increment

  switch (brand) {
    case 'european':
      increment = 1.30
      break;

    case 'american':
      increment = 1.15
      break;

    case 'asian':
      increment = 1.05
      break;

    default:
      break;
  }

  return increment

}