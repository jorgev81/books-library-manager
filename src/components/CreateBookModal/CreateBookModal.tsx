import React from 'react';
import './CreateBookModal.scss';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '../Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { IBook } from '../../models/types';
import { Stack } from '@mui/material';
import { BedSharp } from '@mui/icons-material';

const CreateBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  genre: Yup.string().required('Required'),
  description: Yup.string(),
});


export interface ICreateBookModal {
  initialData?: IBook;
  editMode?: boolean;
  loading?: boolean;
  open: boolean;
  onCreateFormSubmit?: (bookData: IBook) => void;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

const CreateBookModal = (props: ICreateBookModal) => {

  const onSubmit = (values: { title: string, author: string, genre: string, description: string }) => {
    props.onCreateFormSubmit?.({
      ...props.initialData,
      id: props.initialData?.id ?? Math.random().toString(36).slice(2, 9),
      title: values.title,
      author: values.author,
      genre: values.genre,
      description: values.description
    });
  };

  const onCancelButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClose?.(event, 'escapeKeyDown');
  };

  return (
    <Modal
      className="CreateBookModal"
      open={props.open}
    >
      <Container className="modal-container">
        {props?.loading && <LinearProgress />}
        <Grid container>
          <Grid item xs={12}>
            <Typography id="modal-modal-title" variant="h5">
              {props.editMode ? 'Edit a book' : 'Add a new book'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-title" mb={3} variant="subtitle1">
              * Indicates required field
            </Typography>
          </Grid>
          <Grid item>
            <Formik
              initialValues={{
                title: props.initialData?.title ?? '',
                author: props.initialData?.author ?? '',
                genre: props.initialData?.genre ?? '',
                description: props.initialData?.description ?? ''
              }}
              validationSchema={CreateBookSchema}
              onSubmit={(values) => onSubmit(values)}
            >
              <Form>
                <Grid container>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      id="bookName"
                      label="Title"
                      margin='dense'
                      name="title"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      id="bookAuthor"
                      label="Author"
                      margin='dense'
                      name="author"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      id="bookGenre"
                      label="Genre"
                      margin='dense'
                      name="genre"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      id="bookDescription"
                      label="Description"
                      margin='dense'
                      name="description"
                      type="text"
                    />
                  </Grid>
                  <Stack direction='row'>
                    <Button
                      disabled={props.loading}
                      color='error'
                      variant="contained"
                      onClick={onCancelButtonClicked}>
                      Cancel
                    </Button>
                    <Button
                      disabled={props.loading}
                      type="submit">
                      {props.editMode ? 'Update' : 'Create Book'}
                    </Button>
                  </Stack>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default CreateBookModal;
