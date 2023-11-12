class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  };

  static filterByStars(starRating, ...reviews) {
    return reviews.filter(review => {
      return review.starRating === starRating;
    });
  };

  addReview() {
    this.vehicle.reviews.push(this);
    this.tester.reviews.push(this);
  };
};

module.exports = Review;