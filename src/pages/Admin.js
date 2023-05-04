import React, { useState } from 'react';
import AddMovie from '../components/modals/AddMovie';
import DeleteMovie from '../components/modals/DeleteMovie';

const Admin = () => {
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalDeleteActive, setModalDeleteActive] = useState(false);
    return (
        <div className='admin'>
            <div className='container'>
                <div className='admin-content'>
                    <button className='admin-content__buttons' onClick={() => setModalAddActive(true)}>Add movie</button>
                    <button className='admin-content__buttons' onClick={() => setModalDeleteActive(true)}>Delete movie</button>
                    <AddMovie active={modalAddActive} setActive={setModalAddActive}/>
                    <DeleteMovie active={modalDeleteActive} setActive={setModalDeleteActive}/>
                </div>
            </div>
        </div>
    );
}

export default Admin;