import { useState } from "react";
import { sculptureList } from "./data.js";
import Form from "./Form";
import FeedbackForm from "./FeedbackForm";
import QueueOfStates from "./QueueOfStates";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex((index - 1) % sculptureList.length);
    } else {
      setIndex(index + sculptureList.length - 1);
    }
    console.log(index);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />

      <Form />
      <FeedbackForm />
      <QueueOfStates />
    </>
  );
}
