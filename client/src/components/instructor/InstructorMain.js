import React, { useEffect, useState } from 'react';
import InstructorAction from './InstructorAction';
import TabDataGrid from '../TabDataGrid';

const fetch = require('node-fetch');
const url = 'http://localhost:5000/instructors';

const InstructorMain = () => {
    const [porfs, setProfs] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [minNum, setMinNum] = useState('')
    const [maxNum, setMaxNum] = useState('')
    const [selected, setSelected] = useState('');

    const setters = { setFirstName, setLastName, setMinNum, setMaxNum };
    const values = { firstName, lastName, minNum, maxNum };

    const columns = [
        { field: 'instructor_id', headerName: 'ID', flex: 1 },
        { field: 'instructor_name_first', headerName: 'Instructor First Name', flex: 1 },
        { field: 'instructor_name_last', headerName: 'Instructor Last Name', flex: 1 },
        { field: 'min_course_count', headerName: 'Minimum Classes', type: 'number', flex: 1 },
        { field: 'max_course_count', headerName: 'Maximum classes', type: 'number', flex: 1 },
    ];

    const addInstructor = async () => {
        await fetch('http://localhost:5000/instructors', {
            method: 'POST',
            body: JSON.stringify({
                "instructor_name_first": firstName,
                "instructor_name_last": lastName,
                "max_course_count": maxNum,
                "min_course_count": minNum
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(json => console.log(json));
        await fetchInstructors()
    }
    const deleteInstructor = async () => {
        await fetch('http://localhost:5000/instructors', {
            method: 'DELETE',
            body: JSON.stringify({
                "instructor_id": selected.data.instructor_id

            }),
            headers: { 'Content-Type': 'application/json' }
        })
        await fetchInstructors()
    };
    const fetchInstructors = async () => {
        let response = await fetch(url)
        response = await response.json()

        setProfs(response)
    };

    useEffect(() => {
        fetchInstructors();
    }, []);

    return (
        <div style={{ margin: 'auto', minWidth: '75%' }}>
            <InstructorAction addInstructor={addInstructor} deleteInstructor={deleteInstructor} selected={selected} setters={setters} values={values} />
            <TabDataGrid rows={porfs} setSelected={setSelected} columns={columns} keyField={'instructor_id'} />
        </div>
    );
}

export default InstructorMain;
