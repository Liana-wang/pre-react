import React from 'react';
// import SetStatePage from './pages/SetStatePage';
import FunctionComponent from './pages/FunctionComponent';
import './App.css';
import HomePage from './pages/HomePage';
import ReduxPage from './pages/ReduxPage';
import ReactReduxPage from './pages/ReactReduxPage';
import RouterPage from './pages/RouterPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';

function App() {
    return (
        <div className="App">
            {/* <SetStatePage /> */}
            <FunctionComponent />
            <HomePage />
            <ReduxPage />
            <ReactReduxPage />
            <RouterPage />
            <UseMemoPage />
            <UseCallbackPage />
        </div>
    );
}

export default App;
