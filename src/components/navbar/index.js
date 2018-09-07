import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from 'reactstrap';

export class CustomNavbar extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        config: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => this.setState({
    isOpen: !this.state.isOpen,
  })

  render() {
    return (
      <Navbar expand="lg" dark className="bg-primary">
        <Container>
          <NavbarBrand to="/" tag={Link}>{this.props.data.site.config.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about" className="nav-link">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          ...ConfigSiteTitle
        }
      }
    `}
    render={data => <CustomNavbar data={data} {...props} />}
  />
);
