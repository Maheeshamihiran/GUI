// ProgressMonitoring.jsx
import React, { useState } from 'react';
import './Progress.css';

const Progress = () => {
  const [weight, setWeight] = useState('');
  const [measurements, setMeasurements] = useState('');
  const [notes, setNotes] = useState('');
  const [progressLog, setProgressLog] = useState([]);

  const handleRecordProgress = () => {
    if (weight || measurements) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        weight: weight || 'Not recorded',
        measurements: measurements || 'Not recorded',
        notes: notes || 'None'
      };
      
      setProgressLog([newEntry, ...progressLog]);
      
      // Clear form fields
      setWeight('');
      setMeasurements('');
      setNotes('');
    }
  };

  return (
    <div className="progress-monitoring">
      <h2>3. Progress Monitoring</h2>
      
      <div className="form-group">
        <label>Weight (kg):</label>
        <input 
          type="text" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      
      <div className="form-group">
        <label>Body Measurements (cm):</label>
        <input 
          type="text" 
          value={measurements}
          onChange={(e) => setMeasurements(e.target.value)}
          placeholder="e.g., chest: 90, waist: 75, hips: 100"
        />
      </div>
      
      <div className="form-group">
        <label>Additional Notes:</label>
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter any additional notes"
        />
      </div>
      
      <button 
        className="record-button"
        onClick={handleRecordProgress}
      >
        Record Progress
      </button>
      
      <div className="progress-log">
        <h3>Progress Log</h3>
        {progressLog.length > 0 ? (
          <div className="log-entries">
            {progressLog.map(entry => (
              <div key={entry.id} className="log-entry">
                <div className="log-date">{entry.date}</div>
                <div className="log-details">
                  <p><strong>Weight:</strong> {entry.weight}</p>
                  <p><strong>Measurements:</strong> {entry.measurements}</p>
                  <p><strong>Notes:</strong> {entry.notes}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-entries">No progress entries recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Progress;
