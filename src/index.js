import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App_container from './App_container'

const store = createStore(reducer)
const HocProvider = props => (
	<Provider store={store}>
		<App_container>
			<App />
		</App_container>
	</Provider>
)

ReactDOM.render(<HocProvider />, document.getElementById('root'))
registerServiceWorker()
