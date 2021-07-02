import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/counter";
import { decrement } from "./redux/counter";
const ReduxCounter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="redux-counter">
            <h1>Redux Toolkit</h1>
            <div className="count">{count}</div>
            {count ? <button onClick={() => dispatch(decrement())}>Decrement</button> : <button disabled>Decrement</button>}
            <button onClick={() => dispatch(increment())}>Increment</button>
            
        </div>
    );
}
 
export default ReduxCounter;