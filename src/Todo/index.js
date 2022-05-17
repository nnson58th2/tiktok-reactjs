import { useRef, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import { addJob, deleteJob, setJob } from './actions';
import logger from './logger';

// useReducer
// 1. Init state

// 2. Actions
// 3. Reducer
// 4. Dispatch

function App() {
  const [jobState, dispatchJob] = useReducer(logger(reducer), initialState);
  const inputRef = useRef();

  const { job, jobs } = jobState;

  const handleChangeInput = (event) => {
    dispatchJob(setJob(event.target.value));
  };

  const handleRemove = (index) => {
    dispatchJob(deleteJob(index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatchJob(addJob(job));
    dispatchJob(setJob(''));
    inputRef.current.focus();
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      <h3>Todo</h3>
      <form noValidate>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter todo..."
          value={job}
          onChange={handleChangeInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{' '}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => handleRemove(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
