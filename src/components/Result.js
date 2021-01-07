import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

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
            component="span"
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={quote}
              timeout={{enter: 500, exit: 500}}
            >
              <TextQuote>Total amount: <span>${quote}</span></TextQuote>
            </CSSTransition>
          </TransitionGroup>
        </QuoteResult >
      )
  )
}

Result.propTypes = {
  quote: PropTypes.number.isRequired
}

export default Result
