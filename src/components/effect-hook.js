import React, { useEffect, useState } from 'react';

export default function EffectHookComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div style={{
      border: '1px solid red',
      marginBottom: '10px'
    }}>
      <p>effect hook</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}