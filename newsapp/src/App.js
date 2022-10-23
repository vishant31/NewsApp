import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const [progress, setProgress] = useState(0);

    return ( 
      <div>
        <Router>
         <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            />
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/> }>
            </Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country="in" category="business"/> }>
            </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/> }>
            </Route>
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/> }>
            </Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} country="in" category="health"/> }>
            </Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="science"/> }>
            </Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports"/> }>
            </Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology"/> }>
            </Route>
          </Routes>
        </Router>
      </div>
    )
}