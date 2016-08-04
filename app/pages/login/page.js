import React from 'react';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }


  render() {
    const iconStyles = {
      display: 'block',
      margin: 'auto',
      width: 100,
      height: 100,
      color: '#00bcd4'
    };

    const actionsStyles = {
      textAlign: 'center'
    };

    const titleStyles = {
      position: 'relative'
    };

    const bodyStyles = {
      paddingTop: 0
    };

    return (
      <div className={styles.content}>
        <div className={styles.loginform}>
          <Card>
            <CardText style={titleStyles}>
              <AccountCircle style={iconStyles} />
            </CardText>
            <CardText style={bodyStyles}>
              <p>
                You cannot use Pokemon GO and Pokemap with the same account at the same time or
                you may be blocked by the Pokemon GO.
              </p>
              <h3>Use your Pokemon Trainer Account</h3>
              <p>
                Sign up for a <a href="https://www.pokemon.com/us/pokemon-trainer-club/sign-up" target="_blank">Pokemon Trainer Account</a>.
                You can use your Google Account, but using a PTC may be more private.
              </p>
            </CardText>
            <Divider />
            <CardText>
              <form>
                <TextField
                  floatingLabelText="Username"
                  hintText="Username"
                  fullWidth={true}
                />
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  fullWidth={true}
                />
              </form>
            </CardText>
            <CardActions style={actionsStyles}>
              <RaisedButton label="Login" fullWidth={true} primary={true}  />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}
