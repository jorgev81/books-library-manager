import { PropsWithChildren } from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import './MainLayout.scss';

const MainLayout = (props: PropsWithChildren) => {

    const { children } = props;

    return (
        <Box className="MainLayout pretty-scrollbar" data-testid="MainLayout">
            <Grid
                className="MainLayoutGrid"
                justifyContent='center'
                alignItems='center'
                container
                spacing={2}
            >
                <Grid
                    className='HeaderContainer'
                    item
                    component='header'
                    xl={9}
                    xs={11}
                    mt={4}
                >
                    <Typography
                        variant='h4'
                        align='center'
                        color='primary'>
                        Book Manager
                    </Typography>
                </Grid>
                <Grid
                    className='PageContainer'
                    item
                    component='main'
                    xl={9}
                    xs={11}
                >
                    <Box className='PageContainerChildren'>{children}</Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainLayout;