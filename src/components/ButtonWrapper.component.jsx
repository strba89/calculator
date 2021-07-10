import React from "react";
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonItem from "./button/ButtonItem.component";
const useStyles = makeStyles((theme) => ({
    rootDay: {
        borderRadius: '23px',
        backgroundColor:'#f9f9f9'
    },
    rootNight: {
        borderRadius: '23px',
        backgroundColor:'#292d36'
    },
}));

const ButtonWrapper = ({store, type}) => {
    const classes = useStyles();
    return(
        <Grid className={type === "day"?classes.rootDay:classes.rootNight} item xs={12}>
            <Grid container
                  direction="row"
            >
                {store.keyItems.map((e,index) =>
                    <ButtonItem key={index} name={e.value} id={e.ID}/>
                )}
            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    return {
        store: state,
        type: state.dayNight.type
    }
};

export default connect(
    mapStateToProps,
    null
)(ButtonWrapper)