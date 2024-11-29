import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router, Route, and Switch from react-router-dom
import Navbar from './components/Layout/Navbar'; // Import Navbar component
import Register from './components/Auth/Register'; // Import Register component
import Login from './components/Auth/Login'; // Import Login component
import AdminDashboard from './components/Dashboard/AdminDashboard'; // Import AdminDashboard component
import DoctorDashboard from './components/Dashboard/DoctorDashboard'; // Import DoctorDashboard component
import NurseDashboard from './components/Dashboard/NurseDashboard'; // Import NurseDashboard component
import PatientDashboard from './components/Dashboard/PatientDashboard'; // Import PatientDashboard component
import UserList from './components/Users/UserList'; // Import UserList component

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Render Navbar component */}
            <Switch>
                <Route path="/register" component={Register} /> {/* Route for Register component */}
                <Route path="/login" component={Login} /> {/* Route for Login component */}
                <Route path="/dashboard/admin" component={AdminDashboard} /> {/* Route for AdminDashboard component */}
                <Route path="/dashboard/doctor" component={DoctorDashboard} /> {/* Route for DoctorDashboard component */}
                <Route path="/dashboard/nurse" component={NurseDashboard} /> {/* Route for NurseDashboard component */}
                <Route path="/dashboard/patient" component={PatientDashboard} /> {/* Route for PatientDashboard component */}
                <Route path="/users" component={UserList} /> {/* Route for UserList component */}
            </Switch>
        </Router>
    );
};

export default App;
