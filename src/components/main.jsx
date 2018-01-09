import React, {Component} from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import uuid from 'uuid/v4';

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: 'Work Sans',
      src: 'url("/assets/fonts/WorkSans-Light.ttf") format("truetype")',
      fontWeight: 300
    },
    {
      fontFamily: 'Work Sans',
      src: 'url("/assets/fonts/WorkSans-Regular.ttf") format("truetype")',
      fontWeight: 400
    },
    {
      fontFamily: 'Work Sans',
      src: 'url("/assets/fonts/WorkSans-Medium.ttf") format("truetype")',
      fontWeight: 500
    },
  ],
  div: {
    color: theme.colorText,
    fontFamily: 'Work Sans',
    padding: [10,40],
    fontWeight: 300,
    minHeight: 400,
  },
  table: {
    width: '100%',
    "& .table__row": {
      "& td": {
        padding: 5,
        background: theme.colorSecondary
      },
      "&:nth-child(even) td": {
        background: theme.colorTertiary
      }
    }
  }


})

class Main extends Component {

  constructor( props ) {

    super( props );
    this.state = {
      cryptos: []
    }

  }

  componentDidMount() {
    axios
      .get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,IOTA,REQ,VEN&tsyms=USD')
      .then( res => {

        const cryptos = res.data.DISPLAY;
        this.setState({ cryptos: cryptos });


      })
  }

  render() {
    return(
      <div className={this.props.classes.div}>
        <table className={this.props.classes.table} cellPadding="0" cellSpacing="0">
          <thead></thead>
          <tbody>
            {Object.keys(this.state.cryptos).map( (key) => (
              <tr key={uuid()} className="table__row">
                <td className={this.props.classes.td}>{key}</td>
                <td className={this.props.classes.td}>{this.state.cryptos[key].USD.PRICE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
} // Main Component

export default injectSheet(styles)(Main)
