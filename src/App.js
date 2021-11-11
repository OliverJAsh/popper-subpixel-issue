import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export default function App() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const popper = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 4] } },
    ],
  });

  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div
        ref={setPopperElement}
        style={popper.styles.popper}
        {...popper.attributes.popper}
        className="popper"
      >
        Popper element
        <div ref={setArrowElement} style={popper.styles.arrow} />
      </div>
    </>
  );
}
