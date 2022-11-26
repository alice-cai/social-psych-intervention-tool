import React from 'react'
import styles from '@styles/content.module.css'
import QuestionInput from '../questionInput';
import Button from '@mui/material/Button';

type resultMessage = {
  conceptScores: string,
  resultMessage: string
}

type Props = {
    callBack: Function,
    handleBackBtn: Function,
    handleNextBtn: Function,
    questionNum: number,
    questionContent: string,
    resultsMessage: resultMessage
};
function Question ({callBack, handleBackBtn, handleNextBtn, questionNum, questionContent, resultsMessage}: Props) {

    function handleCallBack (newValue: number) {
      callBack(newValue, questionNum); 
    }

    if (questionNum < 13){
      return(
          <>
            <h2>Question {questionNum}</h2>
            <div>{questionContent}</div>
            <QuestionInput callBack={handleCallBack} number={questionNum}/>
            <div className={styles.btnRow}>
              <Button variant="contained" onClick={event => handleBackBtn()}>Back</Button>
              <Button variant="contained" onClick={event => handleNextBtn()}>Next</Button>
            </div>
          </>
      )
    }
    else {
      return (
        <>
          <h2>Results</h2>
          <div>{resultsMessage.conceptScores}</div>
          <br/>
          <div>{resultsMessage.resultMessage}</div>
        </>
      )
    }
}

export default Question; 