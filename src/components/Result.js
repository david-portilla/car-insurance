import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`

const QuoteResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

const TextQuote = styled.div`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;
`

const Result = ({quote}) => {
  return (
    (quote === 0)
      ? <Message>Choose brand, year and plan</Message>
      :
      (
        <QuoteResult>
          <TransitionGroup
            component="p"
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={quote}
              timeout={{enter: 500, exit: 500}}
            >
              <TextQuote>Total amount: ${quote}</TextQuote>
            </CSSTransition>
          </TransitionGroup>
        </QuoteResult >
      )
  )
}

export default Result
