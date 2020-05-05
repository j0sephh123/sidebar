import { Transition } from 'react-transition-group';
import { useState } from 'react'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

function Transitions() {
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <Transition in={inProp} timeout={500}>

        {state => {
          console.log(state);
          return (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition!
            </div>
          )
        }}
      </Transition>

      <button onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}

export default Transitions;