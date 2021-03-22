import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles ,makeStyles} from '@material-ui/core';

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
                Tutorials
              </Typography>
            </Link>
            <Link to={"/insert"} className={classes.link}>
              <Typography variant="body2">
                Add
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