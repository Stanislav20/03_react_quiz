import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Result from './components/Result';
import questions from './components/questions';

function App() {
	const [step, setStep] = useState(0);
	const [correctVariant, setCorrectVariant] = useState(0)

	const question = questions[step];

	const onClickVariant = (index) => {
		setStep(step + 1)
		if (index === question.correct) {
			setCorrectVariant(correctVariant +1) 
		}
	}

  return (
    <div className="App">
			{
				(step !== questions.length) 
					? <Game 
						questions={questions}
						question={question}
						onClickVariant={onClickVariant}
						step={step} 
					/>
					: <Result
						questions={questions}
						correctVariant={correctVariant}
					/>
			}
    </div>
  );
}

export default App;
