
import { useState } from "react";
import BooksDataTable from "../components/BooksDataTable/BooksDataTable";
import Button from "../components/Button";
import useSWR from "swr";
import { fetchBooks, addBook } from "../api/api";
import { Add } from "@mui/icons-material";
import { IBook } from "../models/types";
import ActionConfirmationAlert from "../components/ActionConfirmationAlert";
import CreateBookModal from "../components/CreateBookModal";
import Box from "@mui/material/Box";

const BookManager = () => {

    const { data: books, error: fetchError, isLoading: isLoadingBooks } = useSWR('/books', fetchBooks);
    const { data: newBook, error: addError, isLoading: isAddingBook } = useSWR('/books', addBook);

    const [editMode, setEditMode] = useState(false);
    const [selectedRow, setSelectedRow] = useState<IBook | null>(null);
    const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
    const [openManageBookModal, setManageBookModal] = useState(false);

    const handleOnSelectAction = (row: IBook, action: 'delete' | 'edit') => {
        if (action === 'edit') {
            setEditMode(true);
            setSelectedRow(row);
            setManageBookModal(true);
        } else if (action === 'delete') {
            setSelectedRow(row);
            setDeleteAlertOpen(true);
        }
    };

    const handleDeleteBook = () => {
        if (!selectedRow) {
            throw new Error('Selected project is null');
        }

        setDeleteAlertOpen(false);
        setSelectedRow(null);
    };

    const handleCreateUpdateModalSubmit = (data: IBook) => {
        setManageBookModal(false);
        if (editMode) {
            setSelectedRow(null);
            console.log('update', data);
        } else {
            console.log('create', data);
        }
    };

    return (
        <Box className="BookManagerContainer">
            <Button startIcon={<Add />} onClick={() => setManageBookModal(true)}>+Add a book</Button>
            <BooksDataTable
                data={[]}
                isLoading={false}
                onSelectedRowChange={handleOnSelectAction}
            />
            {openManageBookModal && <CreateBookModal
                editMode={editMode}
                initialData={editMode ? selectedRow ?? undefined : undefined}
                loading={isAddingBook}
                open={openManageBookModal}
                onClose={() => setManageBookModal(false)}
                onCreateFormSubmit={handleCreateUpdateModalSubmit}
            />}

            {deleteAlertOpen && <ActionConfirmationAlert
                content={`Are you sure you want to delete book ${selectedRow?.title}`}
                open={deleteAlertOpen}
                onCancel={() => setDeleteAlertOpen(false)}
                onConfirm={handleDeleteBook}
            />}
        </Box>
    );
};

export default BookManager;