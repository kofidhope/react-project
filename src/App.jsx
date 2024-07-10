import {
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider}
 from 'react-router-dom';
 import MainLayout from './Layout/MainLayout';
 import HomePage from './Pages/HomePage';


const router = createBrowserRouter( 
    createRoutesFromElements(
        // creating a parent route to the rest of the route 
      <Route path='/' element = {<MainLayout/>}>
         <Route index element={<HomePage />}/>
      </Route>
  )
);

const App = () => {
  return <RouterProvider router ={router}/>
}

export default App
