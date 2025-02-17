import {
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider}
 from 'react-router-dom';
 import MainLayout from './Layout/MainLayout';
 import HomePage from './Pages/HomePage';
 import JobPage from './Pages/JobPage';
 import NotFoundPage from './Pages/NotFoundPage';
 import JobsPage,{jobLoader} from './Pages/JobsPage';

const router = createBrowserRouter( 
    createRoutesFromElements(
        // creating a parent route to the rest of the route 
      <Route path='/' element = {<MainLayout/>}>
         <Route index element={<HomePage />}/>
         <Route path='/jobs' element={<JobPage />}/>
         <Route path='/jobs:id' element={<JobsPage />} loader ={jobLoader}/>
         <Route path='/*' element={<NotFoundPage />}/>
      </Route>
  )
);

const App = () => {
  return <RouterProvider router ={router}/>
}

export default App
