const getWalkingDistance = (parentLoc, attLoc) => {
  // distance measured in degree decimals
  const distance = Math.abs(parentLoc.lat - attLoc.lat);
  // approx. 5 miles
  if (distance >= 0.07) {
    return '45 min';
  // approx. 3.5 miles
  } else if (distance >= 0.05) {
    return '30 min';
  // approx. 2 miles
  } else if (distance >= 0.03) {
    return '15 min';
  // approx. 1 mile
  } else if (distance >= 0.01) {
    return '10 min';
  // less than a mile
  }
  return '5 min';
};

export default getWalkingDistance;