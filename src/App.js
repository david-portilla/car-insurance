import Header from './components/Header';
import styled from '@emotion/styled'
import Form from './components/Form';

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
        <Form />
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
