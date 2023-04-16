import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import { FormEvent, useState, KeyBoardEvent } from 'react'

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
      'Meu primeiro tweet',
      'Gosto de comer',
      '#ILovePrograming',
      'Bom dia'
    ])
  
  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  
  function handleHotkeySubmit(event: KeyBoardEvent) {
    if (event.key == 'Enter' && (event.crtlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  
  return (
    <main className="timeline">
      <Header title="Home" />
          
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/quiliarca.png" alt="Juan" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            onKeyDown={handleHotkeySubmit}
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>
            
        <button type="submit">
              Tweet
        </button>
        </form>
          
        <Separator />
          
        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}
    </main>
  )
}