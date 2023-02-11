// import { HashRouter, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from './redux/store';

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => dispatch.count.increment(1)}>
        +1
      </button>
      <button type="button" onClick={() => dispatch.count.decrement(1)}>
        -1
      </button>
    </div>
  );
}

export default App;
