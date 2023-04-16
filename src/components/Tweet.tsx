import './Tweet.css'

import { Link } from 'react-router-dom'

import { Heart, ArrowsClockwise, ChatCircle } from '@phosphor-icons/react'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/quiliarca.png" alt="Juan" />
      
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Quiliarca</strong>
          <span>@quiliarc4</span>
        </div>
        
        <p>
          {props.content}
        </p>
        
        <div className="tweet-content-footer">
          <button type="submit">
            <ChatCircle />
            20
          </button>
          
          <button type="submit">
            <ArrowsClockwise />
            16
          </button>
          
          <button type="submit">
            <Heart />
            10
          </button>
        </div>
      </div>
    </Link>
  )
}