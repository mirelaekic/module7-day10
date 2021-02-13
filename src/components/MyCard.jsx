import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    width:"350px",
    paddingTop: '30.25%', // 16:9
  },
}));

export default function FolderList({info, celsiusT, feelsLike, image,sunrise,sunset}) {
  const classes = useStyles();

  return (
    <>
    <CardMedia
        className={classes.media}
        image={image}
        title={info.name}
      />
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WbSunnyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={info.weather[0].main} secondary={info.weather[0].description} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArrowUpwardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Temp" secondary={celsiusT} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArrowUpwardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Feels like" secondary={feelsLike} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BrightnessHighIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sunrise at" secondary={sunrise} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Brightness3Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sunset at" secondary={sunset} />
      </ListItem>
    </List>
    </>
  );
}
