import React, { useState } from 'react'
import { ReactComponent as SvgLogo} from './logo.svg'
import { Mega } from '@tolu/common/src/components/Mega'
import './App.css'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <SvgLogo className="App-logo" />
        <Mega></Mega>
        <p>Hello Vite + React!</p>
        <p className="Info-Box">This example was made to accompany this article<br/><a className="App-link" href="https://dev.to/tolu/vitejs-replacing-create-react-app-in-a-monorepo-31nd">ViteJs - replacing create-react-app in a monorepo</a> </p>
        <code>{JSON.stringify(pkgJson)}</code>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
