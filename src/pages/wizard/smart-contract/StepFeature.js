import React, { useEffect } from 'react';
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Container,
  Button,
  Card,
  ListItem,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ethereumBlue from './../../../assets/ethereumBlue.svg';
import WizardSteppers from '../WizardSteppers';
import { PropTypes } from 'prop-types';

function StepFeature({ wizardData }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
  }, []);

  return (
    <Container>
      {/* {wizardData.workshop === 'Smart Contract' && ( */}
      <Typography variant="h3">Smart Contract Workshop</Typography>
      {/* )} */}
      {wizardData.workshop === 'Custom' && (
        <Grid>
          <Typography variant="h3">
            <span>1. Coin Workshop</span>
          </Typography>

          <Typography variant="h3">2. Smart Contract Workshop</Typography>
        </Grid>
      )}
      <Grid container>
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={2} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <ListItem>
              <ListItemAvatar>
                <img width={'60%'} src={ethereumBlue} alt="icon" />
              </ListItemAvatar>
              <Typography variant={'h5'}>
                {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                {wizardData.typeOfContact}
              </Typography>
            </ListItem>
            <Grid mb={3}>
              <Divider />
            </Grid>
            <Grid>
              <FormGroup>
                <Grid container>
                  <Grid item container sm={4} xs={12} lg={4}>
                    <Grid item sm={12} xs={12} lg={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Mintable"
                      />
                    </Grid>
                    <Grid item sm={12} xs={12} lg={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Burnable"
                      />
                    </Grid>
                    <Grid item sm={12} xs={12} lg={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Pausable"
                      />
                    </Grid>
                  </Grid>
                  {wizardData.typeOfContact === '20' && (
                    <>
                      <Grid item sm={4} xs={12} lg={4}>
                        <Grid item sm={12} xs={12} lg={12}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Premit"
                          />
                        </Grid>
                        <Grid item sm={12} xs={12} lg={12}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Votes"
                          />
                        </Grid>
                        <Grid item sm={12} xs={12} lg={12}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Flash Minting"
                          />
                        </Grid>
                      </Grid>
                      <Grid item sm={4} xs={12} lg={4}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Snapshots"
                        />
                      </Grid>
                    </>
                  )}
                  {wizardData.typeOfContact === '721' && (
                    <Grid item sm={4} xs={12} lg={4}>
                      <Grid item sm={12} xs={12} lg={12}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Enumerable "
                        />
                      </Grid>
                      <Grid item sm={12} xs={12} lg={12}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="URI Storage"
                        />
                      </Grid>
                    </Grid>
                  )}
                  {wizardData.typeOfContact === '1155' && (
                    <Grid item sm={4} xs={12} lg={4}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Supply Tracking "
                      />
                    </Grid>
                  )}
                </Grid>
              </FormGroup>
            </Grid>
          </Card>
        </Grid>

        <Grid
          container
          spacing={2}
          mt={4}
          display="flex"
          justifyContent="flex-end"
        >
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => navigate('/wizard/step-setting')}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-access-upgrade')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

StepFeature.propTypes = {
  wizardData: PropTypes.object,
};

export default StepFeature;
