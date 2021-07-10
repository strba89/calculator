import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Display from "../components/Display.component"
import ButtonWrapper from "../components/ButtonWrapper.component";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    wrapperDay: {
        height: '755px',
        backgroundColor: '#ffffff',
        borderRadius: '23px'
    },
    wrapperNight: {
        height: '755px',
        backgroundColor: '#21252d',
        borderRadius: '23px'
    },
    rowDisplay:{
        height: '40%',
    },
    rowButtonWrapper:{
        height:"60%"
    }
}));

const Main = ({type}) => {
    const classes = useStyles();
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.root}
        >
            <Grid className={type === "day"?classes.wrapperDay:classes.wrapperNight} item xs={12} sm={8} md={5} lg={3}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    className={classes.rowDisplay}
                >
                    <Display/>
                </Grid>
                <Grid
                    container
                    direction="row"
                    className={classes.rowButtonWrapper}
                >
                    <ButtonWrapper/>
                </Grid>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state) => {
        return {
            type: state.dayNight.type
        }
    }
;
export default connect(
    mapStateToProps
)(Main)