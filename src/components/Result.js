import './Result.css';

function Result({questions, correctVariant, onClickRrepeatTest}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="finish" />
      <h2>{`Вы отгадали ${correctVariant} ответа из ${questions.length}`}</h2>
      {/* <a href="/03_react_quiz"><button>Попробовать снова</button></a> */}
			<button onClick={onClickRrepeatTest} >Попробовать снова</button>
    </div>
  );
}

export default Result