
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DatatableActionOptionType, IBook } from '../../models/types';
import DatatableActionButton from '../DatatableActionButton';
import './BooksDataTable.scss';

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
            flex: 2,
        },
        { field: 'author', headerName: 'Author', flex: 2 },
        { field: 'genre', headerName: 'Genre', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 4 },
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
        <div className='DataTableContainer'>
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