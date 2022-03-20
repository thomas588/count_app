import './App.css';
import Wrapper from "./component/Wrapper";
import Counter1 from "./component/Counter1";
import Counter2 from "./component/Counter2";

function App() {
    return (
        <div className="App">

            <Wrapper render={(count, incCount) => {
                return <Counter2 count={count} incCount={incCount}/>
            }}/>

        </div>
    );
}

export default App;
