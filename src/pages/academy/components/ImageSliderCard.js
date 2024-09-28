import React from 'react';

import {
  ArrowDownward,
  ContentCopy,
  VisibilityOff,
  Delete,
  Visibility,
} from '@mui/icons-material';
import { Grid, IconButton, Card, Typography, Tooltip } from '@mui/material';
import { useField } from 'formik';
import update from 'immutability-helper';
import { PropTypes } from 'prop-types';

import { uuid } from '../../../components/common/CommonFunction';
import UploadImage from './../../../assets/upload_image.svg';
import ImageCard from './ImageCard';

function ImageSliderCard(props) {
  const [field, meta, helpers] = useField(props);
  const [isShow, setIsShow] = React.useState(true);
  const [itemsImage, setItemsImage] = React.useState(field.value);


  /*
  React.useEffect(() => {
    console.log('field.value', field.value);
    setItemsImage(field.value);
  }, [field, itemsImage]);

  React.useEffect(() => {
    setItemsImage(itemsImage);
  }, [itemsImage]);
*/
  // console.log('props.item', props.item, itemsImage);
  const moveCard = React.useCallback((dragIndex, hoverIndex) => {
    setItemsImage((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const removeImageItem = React.useCallback(
    (deletingImageId) => {
      if (itemsImage) {
        const index = itemsImage.findIndex(
          (value) => value.id === deletingImageId
        );
        itemsImage.splice(index, 1);
        helpers.setValue(itemsImage);
      }
    },
    [helpers, itemsImage]
  );

  const renderCard = React.useCallback(
    (item, itemIndex) => {
      let i = {...item};
      i.itemIndex = itemIndex;
      return (
        <ImageCard
          key={i.id}
          item={i}
          itemIndex={i.itemIndex}
          id={i.id}
          removeImageItem={removeImageItem}
          moveCard={moveCard}
        />
      );
    },
    [moveCard, removeImageItem]
  );

  return (
    <>
      <Grid container justifyContent={'end'} mt={2}>
        <Tooltip placement="top" arrow={true} title={'Download content'}>
          <IconButton>
            <ArrowDownward
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
        {isShow ? (
          <Tooltip placement="top" arrow={true} title={'Hide content'}>
            <IconButton
              onClick={() => {
                setIsShow(false);
              }}
            >
              <VisibilityOff
                sx={{
                  color: '#C4C4C4',
                  height: '20px',
                  width: '20px',
                }}
              />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip placement="top" arrow={true} title={'Show content'}>
            <IconButton
              onClick={() => {
                setIsShow(true);
              }}
            >
              <Visibility
                sx={{
                  color: '#C4C4C4',
                  height: '20px',
                  width: '20px',
                }}
              />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip placement="top" arrow={true} title={'Copy content'}>
          <IconButton
            onClick={() => {
              props.insert(props.sliderIndex, {
                ...props.item,
                id: uuid(),
              });
            }}
          >
            <ContentCopy
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip placement="top" arrow={true} title={'Delete content'}>
          <IconButton
            onClick={() => {
              props.remove(props.sliderIndex);
            }}
          >
            <Delete
              sx={{
                color: '#C4C4C4',
                height: '20px',
                width: '20px',
              }}
            />
          </IconButton>
        </Tooltip>
      </Grid>

      {isShow ? (
        <Card
          elevation={0}
          className="dottedBorder"
          sx={{
            mt: 1,
            display: 'flex',
          }}
        >
          <Grid display={'flex'} sx={{ overflowX: 'auto' }}>
            {itemsImage?.map((image, index) => renderCard(image, index))}
            <label htmlFor={props.name} style={{ marginTop: 5 }}>
              <Card
                elevation={0}
                sx={{
                  height: '150px',
                  width: '150px',
                  py: 3.6,
                  textAlign: 'center',
                  cursor: 'pointer  ',
                }}
                className="dottedBorder"
              >
                <img src={UploadImage} alt="" height="45px" width="42px" />
                <Typography variant="subtitle2" mt={1.5}>
                  Upload image
                </Typography>
              </Card>
            </label>
          </Grid>

          <input
            id={props.name}
            type="file"
            accept="image/*"
            hidden
            multiple
            onChange={(e) => {
              // const files = Array.isArray(field.value) ? [...field.value] : [];
              let file = [];
              // helpers.setValue(files);

              Object.keys(e.target.files).map((key) => {
                // console.log('urlllll', URL.createObjectURL(e.target.files[key]));
                // Object.assign(e.target.files[key], { id: uuid() });
                // files.push(e.target.files[key]);
                file.push({
                  id: uuid(),
                  name: URL.createObjectURL(e.target.files[key]),
                });
                // files.push(file);
              });

              helpers.setValue(file);
              // console.log('fileeeeeeeeeeeeee', file);
            }}
          />
        </Card>
      ) : (
        <></>
      )}

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

ImageSliderCard.propTypes = {
  name: PropTypes.string,
  sliderIndex: PropTypes.number,
  remove: PropTypes.func,
  insert: PropTypes.func,
  item: PropTypes.object,
};

export default ImageSliderCard;
