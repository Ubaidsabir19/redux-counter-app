import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount, remove } from "./CounterSlice";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh', 
        textAlign: 'center', 
        flexWrap: 'wrap', 
    }}>
      <hr style={{ width: '100%' }} />

      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        variant="success"
        className="mx-2 my-2"
      >
        Increase
      </Button>

      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        variant="danger"
        className="mx-2 my-2"
      >
        Decrease
      </Button>

      <Button
        aria-label="Increment by 10"
        onClick={() => dispatch(incrementByAmount(10))}
        variant="success"
        className="mx-2 my-2"
      >
        Increment By 10
      </Button>

      <Button
        aria-label="Decrement by 10"
        onClick={() => dispatch(decrementByAmount(10))}
        variant="danger"
        className="mx-2 my-2"
      > Decrement By 10
      </Button>

      <Button
        aria-label="Reset"
        onClick={() => dispatch(remove())}
        variant="danger"
        className="mx-2 my-2"
      > Remove
      </Button>
    </div>
  );
};

export default Counter;
