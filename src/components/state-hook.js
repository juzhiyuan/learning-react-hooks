import React, { useState } from 'react';

export default function StateHookComponent() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      border: '1px solid red',
      marginBottom: '10px'
    }}>
      <p>state hook</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}