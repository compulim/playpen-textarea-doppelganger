import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import './AutoResizeTextArea.css';

function App({ className }) {
  const [value, setValue] = useState(
    'Est minim tempor nulla officia nisi ex officia incididunt veniam do cillum tempor. Magna pariatur consectetur in non nisi dolor culpa deserunt sint proident fugiat reprehenderit. Commodo amet sunt aliquip nisi anim anim eu velit qui anim adipisicing quis ex. Nisi tempor velit magna mollit cillum culpa.'
  );
  const handleTextAreaChange = useCallback(({ target: { value } }) => setValue(value), [setValue]);

  return (
    <div className={classNames('auto-resize-textarea', className)}>
      {/* We need to add a space here, so blank lines will be counted in the doppelganger. */}
      <div aria-hidden={true} className="auto-resize-textarea__doppelganger">
        {value}&nbsp;
      </div>
      <textarea className="auto-resize-textarea__textarea" onChange={handleTextAreaChange} value={value} />
    </div>
  );
}

export default App;
