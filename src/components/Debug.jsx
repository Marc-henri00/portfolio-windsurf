import { useEffect } from 'react';

export default function Debug() {
  useEffect(() => {
    console.log('Debug component mounted');
    return () => console.log('Debug component unmounted');
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '14px',
      fontFamily: 'monospace'
    }}>
      <div>React is working!</div>
      <div>Mode: {process.env.NODE_ENV}</div>
    </div>
  );
}
