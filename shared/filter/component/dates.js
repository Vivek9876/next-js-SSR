import React from "react";
import FilterStyle from "../filter.style";
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { months } from '../common/data';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const Dates = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div>
                <div className="v136_8">
                    <span className="v135_969" onClick={handleClick}>Dates</span>
                    <div className="name"></div>
                </div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>{months.map((item) => {
                        return(
                        <>{item}{"    "}</>
                        )
                    } )}</Typography>
                </Popover>
            </div>
            <style jsx>{FilterStyle}</style>
        </>
    )
}

export default Dates;