import { useState } from 'react';
import './App.css'
import ChildComponent from './ChildComponent';

function App() {
  // point 1
  const arryList = [
    {
      id: "1",
      name: "prasun",
      email: "prasun@gmail.com",
    },
    {
      id: "2",
      name: "suva",
      email: "suva@gmail.com",
    },
    {
      id: "3",
      name: "pritam",
      email: "pritam@gmail.com",
    }
  ];

  // point 3
  const [show, setShow] = useState(true);
  const [text, setText] = useState("Hide");

  const toggleBtn = () => {
    setShow(!show);
    if (text == "Hide") {
      setText("Show")
    } else {
      setText("Hide");
    }
  }

  // point 4

  const [en, setEn] = useState(true);
  const [db, setDb] = useState(false);
  const enableButton = () => {
    let clicked = false;

    if (!clicked) {
      setEn(!en)
      setDb(!db)
    } else {
      setDb(!db)
    }
  }
  const disableBtn = () => {
    let clicked = false;

    if (!clicked) {
      setDb(!db)
      setEn(!en)
    } else {
      setDb(!db)
    }
  }

  // point 5

  const [changeState, setChangeState] = useState('');

  const handleChange = (e) => {
    setChangeState(e.target.value);
  }

  // point 6

  const [childIndices, setChildIndices] = useState([0, 1]);

  const addChildComponent = () => {
    setChildIndices([...childIndices, childIndices.length]);
  };

  // point 7

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const calculateSum = () => {
    const result = Number(num1) + Number(num2);
    setSum(result);
  };


  return (
    <>
      <div className="wrapper" style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <h1>REACT TASK 1</h1>
        <h3>This is a simple jsx text </h3>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
          <h3>This is Record List</h3>
          <ul>
            {arryList.map(records => (
              <li key={records.id} style={{ display: "flex", gap: "2rem" }}>
                <p>{records.id} </p>
                <p>{records.name}</p>
                <p>{records.email} </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <ul style={{ display: "flex", flexDirection: "column", listStyle: 'none' }}>
            <li>

              <button onClick={toggleBtn}>{text}</button>
            </li>
            <li>

              {show && <p>this element should be hide after button click</p>}
            </li>
          </ul>
        </div>

        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3><b>ENABLE / DISABLE BUTTONS</b> </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
            <button onClick={enableButton} style={{ width: '10rem' }} disabled={!en}>{en ? 'Enabled' : 'Disabled'} </button>
            <button onClick={disableBtn} style={{ width: '10rem' }} disabled={!db}>{db ? 'Enabled' : 'Disabled'} </button>

          </div>
        </div>

        <div className="container">
          <input
            type="text"
            placeholder='Type here'
            onChange={handleChange}
            style={{
              marginTop: '1rem',
              width: '22rem',
              height: '3rem',
              border: 'none',
              padding: '5px',
              outline: 'none',
            }}
          />
          <p> {changeState} </p>
        </div>

        <div className="container">
          <button onClick={addChildComponent}>Add Child Component</button>
          {childIndices.map((index) => (
            <ChildComponent key={index} index={index} />
          ))}
        </div>

        <div className="container">
          <h3>Sum calculator</h3>
          <label>
            Number 1:
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
          </label>

          <label>
            Number 2:
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
          </label>
          <button onClick={calculateSum}>Calculate Sum</button>
          <p>Sum: {sum}</p>
        </div>
      </div>


    </>
  )
}

export default App
