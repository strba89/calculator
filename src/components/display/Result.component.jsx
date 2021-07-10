import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '60%',

    },
    allInputDay: {
        color: '#292d36',
        textAlign: "right"
    },
    allInputNight: {
        color: '#ffffff',
        textAlign: "right"
    }
}));

const Result = ({prop, type}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} item xs={12}>
            <h2 className={type === "day" ? classes.allInputDay : classes.allInputNight}>{prop.allInput ? prop.allInput : ''}</h2>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    return {
        prop: state.allInput,
        type: state.dayNight.type
    }
}
;
export default connect(
mapStateToProps
)(Result)