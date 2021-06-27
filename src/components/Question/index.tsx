import { ReactNode } from 'react';

import './styles.scss';

type QuestionsPropos = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlight?: boolean;
}

export function Question({ 
  content, 
  author, 
  isAnswered = false,
  isHighlight = false,
  children,
}: QuestionsPropos){
  return (
    <div className={`question ${isAnswered ? 'answered' : ''} 
    ${isHighlight && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>
          {children}
        </div>
        
      </footer>
    </div>
  );  
}