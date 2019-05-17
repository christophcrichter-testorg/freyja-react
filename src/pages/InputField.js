import React, { useState } from 'react';
import { FjInputField } from 'freyja/InputField';
import Highlight from 'react-highlight';

function InputFieldPage() {
  const [inputValue, setInputValue] = useState('');
  return (
    <section>
      <h3>Input Field</h3>
      <FjInputField
        id="input" type="text" label="Label" value={inputValue} placeholder="placeholder"
        onChange={e => setInputValue(e.target.value)} error={!inputValue ? 'Value required' : ''} required="true" />
      <Highlight language="javascript">
{`
<FjInputField
  id="input"
  type="text"
  label="Label"
  value={inputValue}
  placeholder="placeholder"
  onChange={e => setInputValue(e.target.value)}
  error={!inputValue ? 'Value required' : ''}
  required="true" />
`}
      </Highlight>
    </section>
  )
}

export default InputFieldPage;