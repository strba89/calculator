import React from "react";
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DisplayButton from "./button/DisplayButton.component";
import Result from "./display/Result.component";

const useStyles = makeStyles((theme) => ({
    displayWrapperButton:{
        marginTop:'2.5em',
        marginBottom: '3.5em'
    },
    displayWrapperResult:{
        paddingRight: '1.5em',
        wordBreak: 'break-all'
},
    currentInputNight:{
        color: '#ffffff',
        textAlign: "right",

    },
    currentInputDay:{
        color: '#292d36',
        textAlign: "right",
    }
}));

const Display = ({prop, type}) => {
    const classes = useStyles();
    return(
            <Grid item xs={12}>
                <Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                    >
                        <Grid className={classes.displayWrapperButton} item xs={2}>
                            <DisplayButton/>
                        </Grid>
                        <Grid className={classes.displayWrapperResult} item xs={12}>
                            <Result/>
                        </Grid>
                        <Grid className={classes.displayWrapperResult} id='display' item xs={12}>
                            <h1 className={type === 'day'?classes.currentInputDay:classes.currentInputNight}>{prop.currentInput?prop.currentInput:0}</h1>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}
const mapStateToProps = (state) => {
    return {
        prop: state.currentInput,
        type: state.dayNight.type
    }
};
export default connect(
    mapStateToProps,
    null
)(Display)