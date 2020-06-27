import React from 'react';
import Rating from 'react-rating';

const getBubbleRating = (ratingNumber) => (
  <Rating 
    fullSymbol="fa fa-circle"
    emptySymbol="fa fa-circle-o"
    id="bestnearbyrest-review-bubbles" 
    readonly={true}  
    start={0} 
    stop={5} 
    step={1} 
    initialRating={ratingNumber / 2}
  />  
)

export default getBubbleRating;
