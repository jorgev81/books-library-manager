
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DatatableActionOptionType, IBook } from '../../models/types';
import DatatableActionButton from '../DatatableActionButton';

interface IBooksDataTable {
    data: IBook[];
    isLoading?: boolean;
    onSelectedRowChange?: (row: IBook, action: 'delete' | 'edit') => void;
};

const BooksDataTable = (props: IBooksDataTable) => {

    const { data, isLoading, onSelectedRowChange } = props;

    const rowActions: DatatableActionOptionType<IBook>[] = [
        {
            key: 'edit',
            text: 'Edit',
            onClick: (key, row) => {
                onSelectedRowChange?.(row, 'edit');
            }
        },
        {
            key: 'delete',
            text: 'Delete',
            onClick: (key, row) => {
                onSelectedRowChange?.(row, 'delete');
            }
        }
    ];

    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'Title',
            flex: 3,
        },
        { field: 'author', headerName: 'Author', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 2 },
        { field: 'description', headerName: 'Description', flex: 2 },
        {
            field: 'actions',
            align: 'right',
            headerAlign: 'right',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => <DatatableActionButton options={rowActions} row={params.row as IBook} />
        }
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row: IBook) => row.id}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}

export default BooksDataTable;