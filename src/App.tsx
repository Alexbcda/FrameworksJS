import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfName from './components/ProfName';
import Helloworld from './components/HelloWorld';
import Counter from './components/Counter'; 
import List from './components/List';

function App() {
    return (
        <div>
            <ProfName />
            <ProfName />
            <Helloworld />
            <Counter /> 
            <List />
        </div>
    );
};

export default App;