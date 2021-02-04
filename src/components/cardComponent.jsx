import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import WarningIcon from '@material-ui/icons/Warning';
const newLocal = '1px solid #33333';

const useStyles = makeStyles((theme) => ({
    cardmain: {
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        paddingBottom: '18px',
        paddingTop: '18px',


    },
    cancelSection: {
        textAlign: 'left'
    },
    mainCardcontianer: {
        marginTop: '15px',
        marginBottom: '18px'
    },
    authorize: {
        borderRadius: '0',
        color: 'white',
        backgroundColor: '#1b5b58'
    },
    reject: {
        borderRadius: '0',
        marginRight: '10px',
        border: '1px solid #767676'
    },
    print: {

        padding: '5px 20px 5px 20px',
        color: '#767676',
    },
    pdf: {
        padding: '5px 20px 5px 20px',
        color: '#767676',
        borderRight: '2px solid #767676'
    },
    reqHeader: {
        fontSize: '11px'
       
    },
    Requestdiv: {
        color: 'darkgray',
        marginTop:'20px',
       

    },
    requestCol: {
        borderLeft: '1px solid #767676'
    }
}));
export default function Card() {

    const classes = useStyles();
    return (
        <Grid className={classes.mainCardcontianer} container spacing={0}>
            <Grid item lg={4}>

            </Grid>
            <Grid className={classes.cardmain} container item lg={8} md={12} sm={12} xs={12} alignContent="center" alignItems="center" >
                <Grid container className={classes.cancelSection} item lg={8} md={6} sm={12} >
                    <Grid lg={12} md={12} sm={12} >
                        <Typography variant="h6">Cancel / recall payment, GBP 1,000.00</Typography>
                    </Grid>
                    <Grid lg={12} md={12} sm={12}>
                        <Typography variant="caption" >1234567890123456()GB, KUML Business Company</Typography>
                    </Grid>


                </Grid>
                <Grid container lg={4} md={12} sm={12} justify="flex-end">
                    <PictureAsPdfIcon className={classes.pdf} />
                    <PrintIcon className={classes.print} />
                    <Button className={classes.reject}>Reject</Button>
                    <Button className={classes.authorize}>Authorise</Button>
                </Grid>
                {/* <Grid container lg={1} md={1} sm={12}><PrintIcon /></Grid>
                <Grid container lg={2} md={2} sm={12}> <Button>Reject</Button></Grid>
                <Grid container lg={2} md={2} sm={12}><Button>Authorise</Button></Grid> */}
                <Grid container className={classes.Requestdiv} lg={12} md={12} sm={12}>
                    <Grid className= {classes.requestCol} item lg={2} md={12} sm={12}>
                        <Typography className={classes.reqHeader}>Requst reference</Typography>
                        <Typography variant="caption">SET1234567CH</Typography>
                    </Grid>
                    <Grid className= {classes.requestCol} item lg={2} md={12} sm={12}>
                        <Typography  className={classes.reqHeader}>Category</Typography>
                        <Typography variant="caption">Payment</Typography>
                    </Grid>
                    <Grid className= {classes.requestCol} item lg={2} md={12} sm={12}>
                        <Typography  className={classes.reqHeader}>Request status</Typography>

                        <Typography variant="caption"><WarningIcon />Pendin authorization</Typography>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12}></Grid>
                    <Grid item lg={2} md={12} sm={12}>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}