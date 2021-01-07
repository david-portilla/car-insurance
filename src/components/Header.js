import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HeaderWrapper = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: 900;
  color: #ffff;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({title}) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
