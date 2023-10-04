import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
// import HomePage from './components/HomePage'; // Corrected import
import StudentInformation from './pages/StudentInformation';
import Admission from './components/Admission';
import ProgramsAndFees from './components/ProgramsAndFees';
import AnnualReport from './components/AnnualReport';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          {/* <Route path="/" exact component={HomePage} /> */}
          <Route path="/studentinformation" component={StudentInformation} />
          <Route path="/admission" component={Admission} />
          <Route path="/programsandfees" component={ProgramsAndFees} />
          <Route path="/annualreport" component={AnnualReport} /> </Routes>
        
      </div>
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import { Switch, Route } from 'react-router-dom';
// import NavigationMenu from './components/NavigationMenu';
// import homepage from './components/HomePage';
// import StudentInformation from './pages/StudentInformation';
// import Admission from './components/Admission';
// import ProgramsAndFees from './components/ProgramsAndFees';
// import AnnualReport from './components/AnnualReport';

// function App() {
//   return (
//     <Router>
//       <div>
        
//         <Switch>
//           <Route path="/" exact component={homepage} />
//           <Route path="/studentinformation" component={StudentInformation} />
//           <Route path="/admission" component={Admission} />
//           <Route path="/programsandfees" component={ProgramsAndFees} />
//           <Route path="/annualreport" component={AnnualReport} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;