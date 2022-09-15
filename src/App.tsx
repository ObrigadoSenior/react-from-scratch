import styled from 'styled-components';
import { decrement, increment } from './store/slices/template';
import { useAppDispatch, useAppSelector } from './store/store';
import GlobalStyle from './globalStyle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button`
  color: white;
  background-color: #5288c6;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
`;

const Value = styled.span`
  margin: 0 2rem;
  min-width: 2rem;
  text-align: center;
`;

export const App = () => {
  const disaptch = useAppDispatch();
  const { value } = useAppSelector(({ template }) => template);
  return (
    <Container>
      <GlobalStyle />
      <Button onClick={() => disaptch(decrement())}>Decrement</Button>
      <Value>{value}</Value>
      <Button onClick={() => disaptch(increment())}>Increment</Button>
    </Container>
  );
};
