
import {useSelector} from 'react-redux';
import Button from './components/Button';
function App() {
 

  const count =useSelector ((state)=> state.counter.value);

    return (
  <>
<Button/>
    </>
  
    )
}

export default App;
