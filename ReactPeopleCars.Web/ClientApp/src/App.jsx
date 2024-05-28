import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PeopleTable from './PeopleTable';
import AddCar from './AddCar';
import AddPerson from './AddPerson';
import DeleteCar from './DeleteCar';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<PeopleTable />} />
                <Route path='/addperson/' element={<AddPerson />} />
                <Route path='/addcar/:id' element={<AddCar />} />
                <Route path='/deletecar/:id' element={<DeleteCar />} />
            </Routes>
        </Layout>
    );
}

export default App;