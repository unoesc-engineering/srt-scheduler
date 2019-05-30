import React, { useState } from 'react';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';
import useRunner from './utils/runner';

function App() {
  const [running, setRunning] = useState(false);
  const [pixelsPerUnit, setPixelsPerUnit] = useState(30);
  const [quantum, setQuantum] = useState(1000);
  const [processes] = useState([]);

  const runner = useRunner(running, quantum);

  return (
    <div className="app">
      <div className="controls">
        <ScaleRange
          value={pixelsPerUnit}
          onChange={event => setPixelsPerUnit(event.target.value)}
        />
        <TimeRange
          value={quantum}
          onChange={event => setQuantum(event.target.value)}
        />
        <RunControl
          status={running}
          onStart={() => setRunning(true)}
          onStop={() => setRunning(false)}
        />
      </div>
      <Timeline processes={processes} pixelsPerUnit={pixelsPerUnit} />
    </div>
  );
}

export default App;
