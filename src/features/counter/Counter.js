import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount
} from './counterSlice';


export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const incrementValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0)
  }

  return (
    <section>
      <p>{count}</p>
      <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text"
      value={incrementAmount}
      onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add amount</button>
      <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
}
export default Counter;
