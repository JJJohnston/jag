import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth: state.auth
})

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/')
  };

  render() {
    const { auth} = this.props;
    const authenticated = auth.authenticated
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/jagLogo.png" alt="logo" width="30" height="35"/>
            JAG
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about" name="About">
          <img src="/assets/aboutLogo.png" alt="aboutlogo" width="30" height="35" />
          About Us
          </Menu.Item>
          <Menu.Item as={NavLink} to="/team" name="Team">
          <img src="/assets/teamLogo.png" alt="teamlogo" width="30" height="35" />
          Team
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Tasks">
          <img src="/assets/taskLogo.png" alt="tasklogo" width="30" height="35" />
          Tasks
          </Menu.Item>
          {authenticated &&
          <Menu.Item as={NavLink} to="/people" name="People" /> }
          {authenticated &&
          <Menu.Item as={NavLink} to="/documents" name="Documents">
           <img src="/assets/docuLogo.png" alt="doculogo" width="30" height="35" />
          Documents
          </Menu.Item>}

          {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Task"
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));
