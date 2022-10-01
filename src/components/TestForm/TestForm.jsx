import FormControl from '@mui/material/FormControl';
import Icon from 'components/Icon';
import TestQuestion from 'components/TestQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnswer } from 'redux/answers/answersSlice';
import s from './TestForm.module.css';
import routes from '../../utils/router';
import useLocalStorage from 'hooks/useLocalStorage';
import { answersSelector } from 'redux/answers/answersSelectors';

export default function TestForm({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    'currentQIndex',
    0
  );
  const [chosenAnswer, setChosenAnswer] = useLocalStorage('chosenAnswer', null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allGivenAnswers = useSelector(answersSelector);

  function decrementIndex() {
    if (currentQuestionIndex === 0) {
      return;
    }
    const newIndex = currentQuestionIndex - 1;
    findAnswerAtStore(newIndex);
    setCurrentQuestionIndex(newIndex);
    addNewAnswer();
  }

  function incrementIndex() {
    if (currentQuestionIndex === 11) {
      return;
    }
    const newIndex = currentQuestionIndex + 1;
    findAnswerAtStore(newIndex);
    setCurrentQuestionIndex(newIndex);
    addNewAnswer();
  }

  function addNewAnswer() {
    if (chosenAnswer) {
      dispatch(addAnswer(chosenAnswer));
    }
  }

  function findAnswerAtStore(index) {
    const id = questions[index].questionId;

    for (const answer of allGivenAnswers) {
      if (answer?.id === id) {
        setChosenAnswer({ id: id, option: answer?.option });
        return;
      }
    }
    setChosenAnswer(null);
  }

  function handleSubmitAnswers() {
    addNewAnswer();
    localStorage.setItem('questions', null);
    localStorage.setItem('chosenAnswer', null);
    localStorage.setItem('currentQIndex', 0);
    navigate(routes.results, { replace: true });
  }

  return (
    <>
      <div className={s.questionCard}>
        <p className={s.questionNumber}>
          Question{' '}
          <span className={s.currentQuestionNumber}>
            {currentQuestionIndex + 1}
          </span>{' '}
          / 12
        </p>
        <FormControl className={s.form}>
          {questions && (
            <TestQuestion
              question={questions[currentQuestionIndex]}
              chosenAnswer={chosenAnswer}
              setChosenAnswer={setChosenAnswer}
            />
          )}
        </FormControl>
      </div>

      <div className={s.btnController}>
        <button
          type="button"
          className={
            currentQuestionIndex === 0 ? s.btnPrevDisabled : s.btnPrevEnabled
          }
          onClick={decrementIndex}
          disabled={currentQuestionIndex === 0 ? true : false}
        >
          <Icon iconId={'icon-arrow-left'} width={24} height={24} />
        </button>

        {currentQuestionIndex < 11 ? (
          <button
            type="button"
            className={!chosenAnswer ? s.btnNextDisabled : s.btnNext}
            onClick={incrementIndex}
            disabled={!chosenAnswer ? true : false}
          >
            <Icon iconId={'icon-arrow'} width={24} height={24} />
          </button>
        ) : null}

        {currentQuestionIndex === 11 ? (
          <button
            type="submit"
            className={!chosenAnswer ? s.btnSubmitDisabled : s.btnSubmit}
            disabled={!chosenAnswer ? true : false}
            onClick={handleSubmitAnswers}
          >
            Send Answers
          </button>
        ) : null}
      </div>
    </>
  );
}
