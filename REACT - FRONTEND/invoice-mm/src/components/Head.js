import React from 'react';
import logo from './Img/hrclogo.svg';
import logo2 from './Img/logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        height: '90px',
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.heading} >
            <div>
                <div>
                    <img src={logo2} alt="logo" />
                </div>
                <div>
                    <text style={{ fontWeight: 'bold', color: 'red', marginLeft: '5px' }}>INVOICE LIST</text>
                </div>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                {/* BLANK */}
            </div>
        </div>
    );
};