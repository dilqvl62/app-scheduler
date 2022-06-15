import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const TabDataGrid = (props) => {
    const { rows, setSelected, columns, keyField } = props;

    return (
        <div style={{ margin: 'auto', width: '85%' }}>
            <DataGrid
                autoHeight
                rows={rows ? rows : []}
                getRowId={(row) => row[keyField]}
                columns={columns ? columns : []}
                onRowSelected={(selection) => setSelected(selection)}
                pageSize={10} />
        </div>
    )

}
export default TabDataGrid;