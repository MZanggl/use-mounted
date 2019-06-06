import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import useMounted from '../use-mounted'

function Status() {
    const [status, setStatus] = useState('initial')

    useMounted(() => setStatus('mounted'))

    return (
      <div>
        <button onClick={() => setStatus('clicked')}>submit</button>
        <p>status: {status}</p>
      </div>
    )
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('mounted only runs one time and not on updates', () => {
    // Test first render and effect
    act(() => {
      ReactDOM.render(<Status />, container);
    });

    const button = container.querySelector('button');
    const p = container.querySelector('p');

    expect(p.textContent).toBe('status: mounted')

    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(p.textContent).toBe('status: clicked')
})