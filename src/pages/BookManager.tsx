
import { useState } from "react";
import BooksDataTable from "../components/BooksDataTable/BooksDataTable";
import Button from "../components/Button";
import { fetchBooks, addBook, removeBook, updateBook, API_URL } from "../api/api";
import { Add } from "@mui/icons-material";
import { IBook } from "../models/types";
import ActionConfirmationAlert from "../components/ActionConfirmationAlert";
import CreateBookModal from "../components/CreateBookModal";
import Box from "@mui/material/Box";
import useSWR from "swr";

import { toast } from "react-toastify";

const BookManager = () => {

    const { isLoading, error, data: books, mutate } = useSWR(API_URL, fetchBooks, {});

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

    const handleCreateUpdateModalSubmit = (data: IBook) => {
        setManageBookModal(false);
        if (editMode) {
            setSelectedRow(null);
            handleUpdateBook(data);
        } else {
            handleAddBook(data);
        }
    };


    const handleDeleteBook = async () => {
        if (selectedRow?.id) {
            try {
                await removeBook(selectedRow.id);
                mutate();
                setDeleteAlertOpen(false);
                setSelectedRow(null);
                toast.success(`Book deleted successfully: ${selectedRow.title}`);
            } catch (error) {
                toast.error(`Error removing book: ${selectedRow.title}`);
            }
        }
    };


    const handleAddBook = async (newBook: IBook) => {
        try {
            await addBook(newBook);
            mutate();
            toast.success(`Book added successfully: ${newBook.title}`);
        } catch (error) {
            toast.error(`Error adding book: ${newBook.title}`);
        }
    };

    const handleUpdateBook = async (book: IBook) => {
        try {
            await updateBook(book);
            mutate();
            toast.success(`Book updated successfully: ${book.title}`);
        } catch (error) {
            toast.error(`Error updating book: ${book.title}`);
        }
    };

    return (
        <Box className="BookManagerContainer">
            <Button
                startIcon={<Add />}
                onClick={() => setManageBookModal(true)}>
                Add a book
            </Button>

            {books && <BooksDataTable
                data={books}
                isLoading={isLoading}
                onSelectedRowChange={handleOnSelectAction}
            />}

            {openManageBookModal && <CreateBookModal
                editMode={editMode}
                initialData={editMode ? selectedRow ?? undefined : undefined}
                loading={isLoading}
                open={openManageBookModal}
                onClose={() => setManageBookModal(false)}
                onCreateFormSubmit={handleCreateUpdateModalSubmit}
            />}

            {deleteAlertOpen && <ActionConfirmationAlert
                content={`Are you sure you want to delete the book: ${selectedRow?.title}`}
                open={deleteAlertOpen}
                onCancel={() => setDeleteAlertOpen(false)}
                onConfirm={handleDeleteBook}
            />}
        </Box>
    );
};

export default BookManager;