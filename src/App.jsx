import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Login from './pages/login/Login'
import Employee from './pages/employee/Employee'
import Admin from './pages/admin/Admin';
import UnAuthorizd from './pages/unAuthorized/unAuthorized'
import PrivateRoutes from './utils/privateRoutes'
import ProtectedRoutes from './utils/protectedRoutes'
import AdminSummary from './components/summary/AdminSummary';
import Leaves from './components/leaves/Leaves';
import EmployeesList from './components/employeesList/EmployeesList';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin-dashboard'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin-dashboard' element={
        <PrivateRoutes>
        <ProtectedRoutes requiredId={[5]}>
        <Admin/>
        </ProtectedRoutes>  
        </PrivateRoutes>
        }>
          <Route index element={<AdminSummary/>}/>
          <Route path='/admin-dashboard/leaves' element={<Leaves/>}/>
          <Route path='/admin-dashboard/employees' element={<EmployeesList/>}/>
        </Route>
        <Route path='/employee-dashboard' element={<Employee/>}/>
        <Route path='/unauthorised' element={<UnAuthorizd/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
