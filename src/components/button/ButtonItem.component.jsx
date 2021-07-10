import React from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import {setCurrentNumber, setCurrentOperation, removeCurrentInput} from "../../store/currentInput/actions";
import {changeOperation, getAllInput, removeAllInput} from '../../store/allInput/actions'

import {setResult} from "../../store/result/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0.5em',
        height: '100px'
    },
    itemDay:{
        backgroundColor: '#f7f7f7',
        borderRadius: '23px',
        width: '100%',
        height: '100%',
        fontSize: '2em',
        "&:hover": {
            backgroundColor: '#f7f7f7',
        }
    },
    itemNight:{
        backgroundColor: '#282b33',
        borderRadius: '23px',
        width: '100%',
        height: '100%',
        fontSize: '2em',
        "&:hover": {
            backgroundColor: '#282b33',
        }
    }
}));

const color = (arg, type) => {
    switch (arg) {
        case "AC":
            return '#27e0c0'
        case "/":
        case "-":
        case "x":
        case "+":
            return "#d96061"
        case "=":
            return "#27e0c0"
        default:
            return type === 'day'?"#353942":"#e2e3e4"
    }
}
const ButtonItem = ({
                        type,
                        name,
                        id,
                        prop,
                        allInput,
                        result,
                        haveResult,
                        setCurrentOperation,
                        setCurrentNumber,
                        removeCurrentInput,
                        getAllInput,
                        removeAllInput,
                        changeOperation,
                        setResult,
                    }) => {


    const handleClick = (val) => {
            if (!prop.currentInput && val === '-') {
                setCurrentNumber(val)
                getAllInput(val)
            }
        if (typeof val == 'number' || val === 0) {
            if(prop.currentInput === "NAN" || haveResult){
                removeCurrentInput()
                removeAllInput()
                if(haveResult)
                setResult({haveResult:false, result:''})
            }
            if (prop.currentInput && isNaN(prop.currentInput)) {
                removeCurrentInput()
            }
            setCurrentNumber(val)
            getAllInput(val)

        } else if (val === "AC") {
            removeCurrentInput()
            removeAllInput()
            setResult({haveResult:false,result:''})
        } else if (val === ".") {
            let haveDot = typeof prop.currentInput === 'string' ? prop.currentInput.indexOf('.') > -1 : ''
            if(haveResult){
                removeAllInput()
                removeCurrentInput()
            }
            if (typeof prop.currentInput === 'number' && prop.currentInput) {
                if(result && result % 1 === 0){
                    setCurrentNumber(result+val)
                    getAllInput(result+val)
                    setResult({haveResult:false, result: ''})
                }else if( result && result % 1 !== 0){
                    setCurrentNumber(`0.`)
                    getAllInput(`0.`)
                    setResult({haveResult:false, result: ''})
                }else{
                    setCurrentNumber(val)
                    getAllInput(val)
                }
            } else if (prop.currentInput && !haveDot && typeof prop.currentInput === 'string') {
                setCurrentNumber(val)
                getAllInput(val)
            }else if(!prop.currentInput){
                setCurrentNumber(`0.`)
                getAllInput('0.')
            }
        }else if (val === "=" ) {
            if(!haveResult) {
                if (prop.currentInput === null) {
                    setCurrentNumber("NAN")
                    getAllInput(" = NAN")
                    setResult({haveResult:true, result: 'NAN'})
                }
                else if(typeof allInput === 'number'){
                    getAllInput(` = ${ prop.currentInput}`)
                    setCurrentOperation(prop.currentInput)
                    setResult({haveResult:true, result: prop.currentInput})
                } else if (prop.currentInput && prop.currentInput !== "NAN") {
                    allInput = allInput.replaceAll('x','*')
                    allInput = allInput.replaceAll('--','+')
                    // eslint-disable-next-line
                    let resultEval = eval(allInput)
                    getAllInput(` = ${ resultEval}`)
                    setCurrentOperation(resultEval)
                    setResult({haveResult:true, result: resultEval})
                }
            }

        }
        else {
            if(prop.currentInput === "NAN"){
                removeCurrentInput()
                removeAllInput()
            }
            if (typeof prop.currentInput === 'number') {
                if(result){
                    setCurrentOperation(val)
                    removeAllInput()
                    getAllInput(result+val)
                    setResult({haveResult:false, result: ''})
                }else{
                    setCurrentNumber(val)
                    getAllInput(val)
                }
            } else if (typeof prop.currentInput === 'string'  && allInput.slice(-1) !== '.') {
                removeCurrentInput()
                switch (allInput.slice(-1)) {
                    case '-':
                    case '+':
                    case '/':
                    case 'x':
                        if(val === '-' && allInput.charAt(allInput.length -2) !== allInput.slice(-1) && allInput !== '-'){
                            setCurrentNumber(val)
                            getAllInput(val)
                        }else{
                            changeOperation(val)
                            setCurrentOperation(val)
                        }

                        break
                    default:
                        getAllInput(val)
                        setCurrentOperation(val)
                        break
                }
            }
        }

    }
    const classes = useStyles();
    return (
        <Grid className={classes.root} item xs={name === "AC" || name === 0 ? 6 : 3}>
            <Button style={{color: color(name,type)}} className={type === "day"?classes.itemDay:classes.itemNight} variant="contained" size="large" id={id}
                    onClick={(e) => handleClick(name)}>
                {name}
            </Button>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    return {
        prop: state.currentInput,
        allInput: state.allInput.allInput,
        result: state.result.result,
        haveResult: state.result.haveResult,
        type: state.dayNight.type
    }
};
const mapDispatchToProps = dispatch => ({
    setCurrentOperation: input => dispatch(setCurrentOperation(input)),
    setCurrentNumber: input => dispatch(setCurrentNumber(input)),
    removeCurrentInput: () => dispatch(removeCurrentInput()),
    getAllInput: input => dispatch(getAllInput(input)),
    removeAllInput: () => dispatch(removeAllInput()),
    changeOperation: input => dispatch(changeOperation(input)),
    setResult: result => dispatch(setResult(result)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonItem)