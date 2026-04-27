import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading backend...');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => setBackendMessage('Backend offline'));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Experiment WS3</h1>
        </div>
        <div className="content">
          <div className="student-info">
            <p><strong>Name:</strong> Shantnu</p>
            <p><strong>UID:</strong> 23bda70057</p>
          </div>
          
          <div className="experiment-details">
            <h2>Performing the experiment</h2>
            <p className="task-desc">
              write test (pytest,vitest) and configure GitHub actions
            </p>
            <div className="requirements">
              <h3>Requirements:</h3>
              <ul>
                <li>Backend test</li>
                <li>Frontend test</li>
                <li>CI/CD workflow actions</li>
              </ul>
            </div>
          </div>
          
          <div className="backend-status">
            <span className="status-dot"></span>
            Backend Status: {backendMessage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
