import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {WbSunny} from "@material-ui/icons";
import {Brightness3} from "@material-ui/icons";
import {connect} from "react-redux";
import {setDayOrNight} from "../../store/day_night/actions";

const useStyles = makeStyles((theme) => ({
    lightDay:{
        color:'#4e5159!important',
    },
    nightDay:{
        color:'#dfdfdf!important',
    },
    lightNight:{
        color:'#707378!important',
    },
    nightNight:{
        color:'#ffffff!important',
    },
    nightWrapperNight:{
        backgroundColor: '#292d36',
        borderTopRightRadius: '23px',
        borderBottomRightRadius: '23px',
        paddingBottom: '0.4em',
        paddingTop: '0.4em'


    },
    nightWrapperDay:{
        backgroundColor: '#f9f9f9',
        borderTopRightRadius: '23px',
        borderBottomRightRadius: '23px',
        paddingBottom: '0.4em',
        paddingTop: '0.4em'

    },
    lightWrapperNight:{
        backgroundColor: '#292d36',
        borderTopLeftRadius: '23px',
        borderBottomLeftRadius: '23px',
        paddingBottom: '0.4em',
        paddingTop: '0.4em'
    },
    lightWrapperDay:{
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: '23px',
        borderBottomLeftRadius: '23px',
        paddingBottom: '0.4em',
        paddingTop: '0.4em'
    }

}));

const DisplayButton = ({type, setDayOrNight}) => {
    const classes = useStyles();
    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
        >
            <Grid item xs={6} className={type === 'day'?classes.lightWrapperDay:classes.lightWrapperNight}>
            <IconButton className={type === 'day'?classes.lightDay:classes.lightNight} onClick={() => setDayOrNight('day')}>
                <WbSunny/>
            </IconButton>
            </Grid>
            <Grid item xs={6} className={type === 'day'?classes.nightWrapperDay:classes.nightWrapperNight}>
                <IconButton className={type === 'day'?classes.nightDay:classes.nightNight} onClick={() => setDayOrNight('night')}>
                    <Brightness3/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    setDayOrNight: type => dispatch(setDayOrNight(type)),
});
const mapStateToProps = (state) => {
    return {type: state.dayNight.type}
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayButton)