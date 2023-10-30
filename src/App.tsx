import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfName from './components/ProfName';
import Helloworld from './components/HelloWorld';

function App() {
    return (
        <div>
            <ProfName />
            <ProfName />
            <Helloworld />
        </div>
    );
};

export default App;