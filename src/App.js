import logo from './logo.svg';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <form className={styles.input}>
      <label for="fname">First name:</label>
<input type="text" id="fname" name="fname">

</input>
      

        
      </form>
    </div>
  );
}

export default App;
