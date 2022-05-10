import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  const handleAddJob = (event) => {
    event.preventDefault();

    setJobs((prevJob) => {
      const newJobs = [...prevJob, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      <form noValidate>
        <input
          type="text"
          value={job}
          onChange={(event) => setJob(event.target.value)}
        />
        <button type="submit" onClick={(event) => handleAddJob(event)}>
          Add
        </button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
