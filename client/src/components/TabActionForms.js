import React from 'react';
import Grid from '@material-ui/core/Grid';


const TabActionForm = (props) => {
    const { textFields, addButton, deleteButton } = props;

    let fields = (textFields && textFields.map(field =>
        <Grid item>
            {field}
        </Grid>
    ));

    return (
        <div style={{ padding: '1%' }}>
            <Grid containner justify="center" spacing={6}>
                {fields}
            </Grid>
            <Grid containner justify="center" spacing={6}>
                {addButton}
            </Grid>
            <Grid item>
                {deleteButton}
            </Grid>
        </div>

    );

}
export default TabActionForm