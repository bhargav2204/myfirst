import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {tabeldata} from "./tabeldata";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}



function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {/* <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow> */}
          <TableRow>
              {["Name","Calories","Fat (g)","Carbs (g)","Protein (g)","Total"].map(row=>
              {
                  return (<TableCell>{row}</TableCell>)
              })
                
              }
          </TableRow>
         
        </TableHead>
        <TableBody>
          {tabeldata.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
               {row.Tital}
              </TableCell>
              <TableCell align="right"> {row.Calories}</TableCell>
              <TableCell align="right"> {row.Fat }</TableCell>
              <TableCell align="right"> {row. Carbs}</TableCell>
              <TableCell align="right"> {row.Protein}</TableCell>
            </TableRow>
          ))}
           <TableRow>
              {tabeldata.reduce((acc,cur)=>{
              return acc+cur.Calories 
              },0)

              }
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);