import {FaStar, FaRegStar} from 'react-icons/fa'

const reviews = [
  {
    name: "Mauno Maukas",
    feedback: "Your sites are amazing",
    rating: 5
 },
 {
    name: "Teemu Testaaja",
    feedback: "I love the UI",
    rating: 4
 },
 {
    name: "Risto Reipas",
    feedback: "Customer service works well",
    rating: 4
 }   
]

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>What Our Users Say</h2>
      <div className="content-container">
        {reviews.map((review, index) => (
          <div key={index} className="content-card">
            <p className="review-feedback">"{review.feedback}"</p>
            <h4 className="review-name">- {review.name}</h4>
            <div className="review-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                i < review.rating ? <FaStar key={i} color="#ffb400" /> : <FaRegStar key={i} color="#ffb400" />
        ))}
        </div>
      </div>
        ))}
    </div>
  </section>
  );
};

export default Reviews;