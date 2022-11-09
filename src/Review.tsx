import { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  // check if carousel/pagination reaches end i.e
  // when clicked next at last review show the first one
  // when clicked prev at first review show the last one
  const checkIndex = (i: number) => {
    if (i > reviews.length - 1) {
      return 0
    }
    if (i < 0) {
      return reviews.length - 1
    }
    return i
  }

  const nextReview = () => {
    setIndex((prevState) => checkIndex(prevState + 1))
  }

  const prevReview = () => {
    setIndex((prevState) => checkIndex(prevState - 1))
  }

  // show random review based on array index
  // if random number is same as the current index add 1 to show the next
  const randomReview = () => {
    let randomNumber = Math.ceil(Math.random() * reviews.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkIndex(randomNumber))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
