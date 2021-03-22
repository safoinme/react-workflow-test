import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography ,makeStyles} from '@material-ui/core';
import insertimage from './Insertimage';


export default function Header(props) {
    const classes = useStyles();
    return (
<div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              Flask-workflow-mini-project
            </Typography>
            <Link to={"/images"} className={classes.link}>
              <Typography variant="body2">
                Images
              </Typography>
            </Link>
            <Link to={"/insertimage"} className={classes.link}>
              <Typography variant="body2">
                Insert
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>


      </div>
    )
}

const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor: "#343A40",
            height: "50px",
            '& .MuiToolbar-regular': {
                minHeight: "50px"
            }
        },
        name: {
            marginRight: "15px"
        },
        link: {
            textTransform: "unset",
            color: "#a5a5a5",
            margin: "0 20px",
            textDecoration: "unset"
        }
}));