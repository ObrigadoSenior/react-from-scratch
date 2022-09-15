import { decrement, increment } from './store/slices/template';
import { useAppDispatch, useAppSelector } from './store/store';

export const App = () => {
  const disaptch = useAppDispatch();
  const { value } = useAppSelector(({ template }) => template);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => disaptch(decrement())}>Decreament</button>
        <span>{value}</span>
        <button onClick={() => disaptch(increment())}>Increament</button>
      </header>
    </div>
  );
};
