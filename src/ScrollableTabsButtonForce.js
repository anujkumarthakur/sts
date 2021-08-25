import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import StickyHeadTable from './StickyHeadTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="One Minute" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Five Minute" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Fiften Minute" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Thirty Minute" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Fourty-five Minute" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Sixty Minute" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Two Hours" icon={<ThumbUp />} {...a11yProps(6)} />
          <Tab label="Seven Hours" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Twlve Hours" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="One day" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Seven Days" icon={<ThumbUp />} {...a11yProps(6)} />
          <Tab label="Fiften Days" icon={<ThumbUp />} {...a11yProps(6)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <StickyHeadTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <StickyHeadTable/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
