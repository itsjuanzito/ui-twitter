import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import { useState, FormEvent } from 'react'

import { PaperPlaneRight } from '@phosphor-icons/react'

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
      'Parabéns',
      'Boa noite',
      'I love react',
      'I hate front-end'
    ])
  
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  
  return (
    <main className="status">
      <Header title="Tweet" />
      
      <Tweet content="blá-blá-blá" />
      
      <Separator />
          
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/quiliarca.png" alt="Juan" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>
            
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
        </form>
       
       {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
    </main>
  )
}