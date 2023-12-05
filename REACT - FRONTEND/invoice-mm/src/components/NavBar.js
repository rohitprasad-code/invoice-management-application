import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddForm from './AddForm';
import AnalyticsView from './AnalyticsView';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import DataFaceDynamic from './DataFaceDynamic';
import SearchedData from './SearchedData';
import { green } from '@mui/material/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#676667',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 10,
        marginTop: 8,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);
    const [searchedData, setSearchedData] = useState('');
    const [isDataSearched, setIsDataSearched] = useState(false);
    const searchInputRef = useRef(null);

    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
            setCurrentTab(3);
            setSearchedData(event.target.value);
            setIsDataSearched(true);
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', background: '#343534' }}>
                <div className="menu">
                    <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)} aria-label="simple tabs example">
                        <Tab label="HOME PAGE" {...a11yProps(0)} />
                        <Tab label="ADD DATA" {...a11yProps(1)} />
                        <Tab label="ANALYTICS VIEW" {...a11yProps(2)} />
                        <Tab label="SEARCHED DATA" on {...a11yProps(3)} />
                    </Tabs>
                </div>
                <div className="menu" style={{ display: 'flex', alignItems: 'baseline' }}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            ref={searchInputRef}
                            placeholder="Search Customer ID"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={handleSearchKeyDown}
                        />
                    </div>
                    <div>
                        <Button variant="contained" style={{
                            width: '220px',
                            height: '35px',
                            margin: '4px 6px 5px 4px',
                            background: green[500],
                            '&:hover': {
                                background: green[700],
                            },
                        }}>ADVANCED SEARCH</Button>
                    </div>
                </div>
            </AppBar>
            <TabPanel value={currentTab} index={0}>
                <DataFaceDynamic />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <AddForm />
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
                <AnalyticsView />
            </TabPanel>
            <TabPanel value={currentTab} index={3}>
                <SearchedData searchedData={searchedData} />
            </TabPanel>
        </div>
    );
}