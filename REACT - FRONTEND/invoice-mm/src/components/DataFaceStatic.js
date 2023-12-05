import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { TablePagination } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@mui/material/colors';
import Delete from './modal/Delete';
import Edit from './modal/Edit';

const columns = [
    { field: 'slNo', headerName: 'SL No', width: 110 },
    { field: 'customerOrderId', headerName: 'Customer Order ID', width: 170 },
    { field: 'salesOrg', headerName: 'Sales Org', width: 130 },
    { field: 'distributionChannel', headerName: 'Distribution Channel', width: 200 },
    { field: 'companyCode', headerName: 'Company Code', width: 130 },
    { field: 'orderCreatingDate', headerName: 'Order Creating Date', width: 180 },
    { field: 'orderAmount', headerName: 'Order Amount', type: 'number', width: 150 },
    { field: 'orderCurrency', headerName: 'Order Currency', width: 150 },
    { field: 'customerNumber', headerName: 'Customer Number', width: 160 },
    { field: 'amountInUSD', headerName: 'Amount in USD', type: 'number', width: 150 },
];

const rows = [
    {
        id: 1,
        slNo: 1,
        customerOrderId: 946851639,
        salesOrg: 3537,
        distributionChannel: 'United States of America',
        companyCode: 3220,
        orderCreatingDate: 1640995200000,
        orderAmount: 954.61,
        orderCurrency: 'EUR',
        customerNumber: 12311807,
        amountInUSD: 1030.9788,
    },
    {
        id: 2,
        slNo: 2,
        customerOrderId: 963432061,
        salesOrg: 3449,
        distributionChannel: 'Martinique',
        companyCode: 3220,
        orderCreatingDate: 1640995200000,
        orderAmount: 787.36,
        orderCurrency: 'EUR',
        customerNumber: 12311807,
        amountInUSD: 850.3488,
    },

];


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        background: orange[500],
    },
    tableContainer: {
        backgroundColor: 'gray',
        '& .MuiDataGrid-cell': {
            color: 'white',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-footerContainer': {
            color: 'white',
        },
        '& .MuiDataGrid-checkboxInput.Mui-checked': {
            color: orange[500],
        },
        '& .MuiDataGrid-cellCheckbox .MuiDataGrid-checkboxInput': {
            color: orange[500],
        },
        '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-checkboxInput': {
            color: orange[500],
        },
    },
}));


export default function DataFaceStatic() {
    const [pageSize, setPageSize] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const classes = useStyles();

    const handleEdit = () => {
        // Perform the edit operation
        // ...
    };

    const handleEditClick = () => {
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    const handleDelete = () => {
        // Perform the delete operation
        // ...
    };

    const handleDeleteClick = () => {
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };


    return (
        <div className={classes.container} style={{ height: 400, width: '100%', }}>
            <div className={classes.tableContainer} style={{ display: 'flex', height: '100%', flexGrow: 1 }}>
                <DataGrid
                    rows={rows.slice(page * pageSize, page * pageSize + pageSize)}
                    columns={columns}
                    pageSize={pageSize}

                    checkboxSelection
                    disableSelectionOnClick
                    pagination
                    
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    components={{
                        Footer: ({ paginationProps }) => (
                            <div className="MuiDataGrid-footerContainer" style={{ background: '#676667' }}>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button}>REFRESH DATA</Button>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleEditClick}>EDIT</Button>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleDeleteClick}>DELETE</Button>
                                    <Button variant="contained" color="primary" className={classes.button}>PREDICT</Button>
                                </div>
                                <div className="MuiTablePagination-root">
                                    <TablePagination
                                        {...paginationProps}
                                        rowsPerPageOptions={[5, 10, 20, 50, 100]}
                                        count={rows.length}
                                        rowsPerPage={pageSize}
                                        page={page}
                                        onPageChange={(e, newPage) => setPage(newPage)}
                                        onRowsPerPageChange={(e) => {
                                            setPageSize(+e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        ),
                    }}
                />
            </div>
            <Edit open={editOpen} onClose={handleEditClose} onEdit={handleEdit} />
            <Delete open={deleteOpen} onClose={handleDeleteClose} onDelete={handleDelete} />
        </div>
    );
}


// class="MuiDataGrid-footerContainer"
// class="MuiTablePagination-root"