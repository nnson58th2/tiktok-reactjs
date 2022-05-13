import { useEffect, useState } from "react";

function App() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div className="App" style={{ padding: 32 }}>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
