import { Container, Typography } from '@mui/material';

import CreateForm from '../components/CreateForm/CreateForm';

const CreatePage = () => {
  return (
    <>
      <Container>
        <Typography variant="h3" color="white">
          CREATE
        </Typography>
        <CreateForm />
      </Container>
    </>
  );
};
export default CreatePage;
