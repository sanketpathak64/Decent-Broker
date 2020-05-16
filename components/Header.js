import React,{Component} from 'react';
import {Menu,Button} from 'semantic-ui-react';
import {Link} from '../routes';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
import { Helmet } from 'react-helmet';
class Header extends Component{
  clickMeToView=async event=> {
    var accounts;
    var add;
    Promise.all(
      accounts= await web3.eth.getAccounts(),
      add=accounts[0]
    );
    Router.pushRoute(`/AssignedToMe/${add}`);
  }
  clickMe=async event=> {
    var accounts;
    var add;
    Promise.all(
      accounts= await web3.eth.getAccounts(),
      add=accounts[0]
    );
    Router.pushRoute(`/${add}`);
  }
  clickAll=async event=> {
    var accounts;
    var add;
    Promise.all(
      accounts= await web3.eth.getAccounts(),
      add=accounts[0]
    );
    Router.pushRoute(`/All/${add}`);
  }
  clickViewProfile=async event=> {
    var accounts;
    var add;
    Promise.all(
      accounts= await web3.eth.getAccounts(),
      add=accounts[0]
    );
    Router.pushRoute(`/showProfiles/${add}`);
  }
  render(){
  return (
    <Menu style={{marginTop:'10px'}}>
      <Helmet>
          <title>Contracts Management</title>
          <link rel = "icon" href = "https://img.icons8.com/nolan/64/data-protection.png" 
        type = "image/x-icon" /> 
      </Helmet>
    <Link route="/">
    <a className="item">
    Contracts Management
    </a>
    </Link>
    <Menu.Menu position="right">
    <Button className="item" onClick={this.clickMeToView}
    content="Assigned"
    primary
    />
    <Button className="item" onClick={this.clickMe}
    content="Created"
    primary
    />
    <Button className="item" onClick={this.clickAll}
    content="All"
    primary
    />
    <Button className="item" onClick={this.clickViewProfile}
    content="View Profiles"
    primary
    />
    <Link route="/">
    <a className="item">
    Global Contracts
    </a>
    </Link>
    <Link route="/contracts/new">
    <a className="item">
    +
    </a>
    </Link>
    </Menu.Menu>
    </Menu>
  )}
}
export default Header;
