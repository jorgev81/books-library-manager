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
import { generateUniqueId } from '../../utils/generateUniqueId';

const CreateBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  genre: Yup.string().required('Required'),
  description: Yup.string().max(500, 'Description must be less than 500 character'),
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

    const newId = generateUniqueId();

    props.onCreateFormSubmit?.({
      ...props.initialData,
      id: props.initialData?.id ?? newId,
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
              onSubmit={(values: {
                title: string; author: string; genre: string; description: string;
              }) => onSubmit(values)}
            >
              <Form>
                <Grid container spacing={2}>
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
                      name="description"
                      type="text"
                      multiline
                      rows={4}
                      variant="standard"
                    />
                  </Grid>
                  <Stack
                    direction='row'
                    mt={5}
                    pl={2}
                    flex={1}
                    spacing={3}
                    justifyContent='space-between'
                  >
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


