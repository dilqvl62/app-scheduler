import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TabActionForm from '../TabActionForms'; 


const CourseAction = (props) => {
    const { addCourse, deleteCourse, selected,values, setters} = props;
    const { setCourseTitle, setCourseCode, setCourseLength } = setters;
    const {courseTitle, courseCode, courseLength } = values;
    const isAddButtonDisabled = !(courseTitle && courseCode && courseLength)

    const textFields = ([]

    )


}