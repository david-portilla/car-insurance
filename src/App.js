import Header from './components/Header';
import styled from '@emotion/styled'

const Wrapper = styled.div`
 max-width:600px;
 margin: 0 auto;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding:3rem;
`;

function App () {

  return (
    <Wrapper>
      <Header
        title='Car insurance quotes'
      />
      <FormWrapper>
        add form here
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
