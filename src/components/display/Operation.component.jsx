import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '60%'
    },
}));

const Operation = () => {
    const classes = useStyles();
    return(
        <Grid className={classes.root} item xs={12}>

        </Grid>
    )
}
export default Operation