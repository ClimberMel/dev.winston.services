import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { Link, Typography, Grid, Paper } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Badge } from './../../../assets/badge_icon.svg';

function AcademyCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <Grid sx={{ position: 'relative' }}>
        <img
          src={item.image}
          style={{
            width: '100%',
            height: '260px',
            borderRadius: '20px',
            objectFit: 'cover',
          }}
        />
        <Grid
          sx={{
            width: '100%',
            position: 'absolute',
            top: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Paper
            elevation={0}
            sx={{ borderRadius: '5px', backgroundColor: '#271D5A' }}
          >
            <Grid container alignItems={'center'} sx={{ mx: 1, my: 0.8 }}>
              <img
                src={item.difficultyLevelIcon}
                alt="img"
                height="14px"
                width="14px"
              />
              <Typography ml={0.7} fontSize="12px">
                {item.difficultyLevel}
              </Typography>
            </Grid>
          </Paper>
          {item.priceLevel ? (
            <Grid>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: '#FFD215',
                  color: '#271D5A',
                  px: 1,
                  py: 0.5,
                  borderRadius: '5px',
                }}
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  {'$' + item.priceLevel}
                </Typography>
              </Paper>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      {item.rewardPoint ? (
        <Grid
          container
          my={2}
          alignItems="center"
          justifyContent={'space-between'}
        >
          <Typography fontSize="20px">Total reward points</Typography>
          <Grid display={'flex'} alignItems="center">
            <Badge />
            <Typography variant="h5" fontWeight={700} ml={1}>
              {item.rewardPoint}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
      <Grid mt={item.rewardPoint ? 0 : 2.5}>
        <Link
          onClick={() => {
            navigate('/academy/details');
          }}
          variant="h6"
        >
          {item.title}
        </Link>
      </Grid>
      {item.description ? (
        <Typography variant="subtitle2" mt={1}>
          {item.description}
        </Typography>
      ) : (
        <></>
      )}

      {item.duration ? (
        <Grid display={'flex'} justifyContent={'space-between'} mt={3.75}>
          <Grid display={'flex'} alignItems={'center'}>
            <AccessTimeIcon sx={{ mr: 1.25 }} />
            <Typography variant="subtitle1">{item.duration}</Typography>
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <StarIcon sx={{ mr: 1.25, color: '#FFD215' }} />
            <Typography variant="subtitle1">{item.rating} review</Typography>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}
AcademyCard.propTypes = {
  item: PropTypes.object,
};

export default AcademyCard;
