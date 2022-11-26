import React, { useState, Component, JSXElementConstructor, useEffect} from 'react'
import styles from '@styles/content.module.css'
import Question from './questions/Question'
import {TestData} from './testData'


function Test(): JSX.Element {
  const [questionRender, setQuestionRender] = useState(1);
  const [scores, setScores] = useState([0,0,0]);
  const [results, setResults] = useState({conceptScores: "", resultMessage: ""}); 

  function questionAnswer (value : number, question : number) {
    var newScore = [...scores];
    if(question >= 1 && question <= 4){
      newScore[0] = Number(newScore[0]) + Number(value);
    } 
    else if (question >= 5 && question <= 8){
      newScore[1] = Number(newScore[1]) + Number(value);
    }
    else {
      newScore[2] = Number(newScore[2]) + Number(value);
    }
    setScores(newScore);
  }

  function handleBackBtn () {
    if (questionRender > 1){
      setQuestionRender(questionRender-1);
    }
  }

  function renderResult() {
    let resultMessage; 
    let totalScore = 0;
    let conceptScores = "This test analyzes your social media across three social psychological key concepts. ";

    for (let i = 0; i < scores.length; i += 1) {
      totalScore += scores[i];
      conceptScores += "You scored ";

      if (scores[i] <= 6){
        conceptScores += "low in your ";
      }
      else if (scores[i] >= 7 && scores[i] <= 11){
        conceptScores += "moderately in your ";
      } else {
        conceptScores += "highly in your ";
      }
      conceptScores += TestData.concepts[i] + ". ";  
    }
    
    //compute message
    if (totalScore >= 21 && totalScore <= 33){
      resultMessage = TestData.resultMessags.midRange;
    }
    else if (totalScore > 34){
      resultMessage = TestData.resultMessags.highRange;
    }
    else {
      resultMessage = TestData.resultMessags.lowRange;
    }


    let results = {
      conceptScores: conceptScores, 
      resultMessage: resultMessage
    }

    setResults(results); 
  }
  
  function handleNextBtn () {
    if (questionRender < TestData.numQuestions){
      setQuestionRender(questionRender+1);
    }
    else if (questionRender == TestData.numQuestions){ 
      renderResult(); 
      setQuestionRender(questionRender+1);
    }
  }

  return (
    <>
      <header>
        {"Healthy Social Media Use Test"}
      </header>
      <Question
      handleBackBtn={handleBackBtn}
      handleNextBtn={handleNextBtn}
      callBack={questionAnswer}
      questionContent={TestData.questions[questionRender-1]}
      questionNum={questionRender}
      resultsMessage={results}
    />
    </>
  )
}

export default Test; 
