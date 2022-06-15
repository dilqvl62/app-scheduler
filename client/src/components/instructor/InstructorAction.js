import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TabActionForm from '../TabActionForms';                                                                                                                                                                                                                                                                                                                                                                                                                                    

const InstructorAction = (props) => {
    const { addInstructor, deleteInstructor, selected, values, setters } = props;
    const { setFirstName, setLastName, setMinNum, setMaxNum } = setters;
    const { firstName, lastName, minNum, maxNum } = values;

    const textFields = (
        [
            <TextField
                label="First Name"
                fullWidth
                onChange={e => setFirstName(e.target.value)}
                margin="normal"
            />,
            <TextField
                label="Last Name"
                fullWidth
                onChange={e => setLastName(e.target.value)}
                margin="normal"
            />,
            <TextField
                label="Minimum Classes"
                fullWidth
                onChange={e => setMinNum(e.target.value)}
                margin="normal"
                type="number"
            />,
            <TextField
                label="Maximum Classes"
                fullWidth
                onChange={e => setMaxNum(e.target.value)}
                margin="normal"
                type="number"
            />,

        ]

    )


    const addButton =
        <Button type="back" variant="outlined" onClick={addInstructor} disabled={!(firstName && lastName && maxNum && minNum)}>
            Add Instructor
        </Button>

    const deleteButton =
        <Button type="submit" variant="outlined" onClick={deleteInstructor} disabled={!selected}>
            Delete Instuctor
        </Button>

    return (
        <TabActionForm textFields={textFields} addButton={addButton} deleteButton={deleteButton} />
    );

}
export default InstructorAction