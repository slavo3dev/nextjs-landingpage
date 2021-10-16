import {
  Visibility,
  Segment,
  Menu,
  Container,
} from "semantic-ui-react";
import { Component } from "react";
import { Media } from "@lib";
import { HomepageHeading } from "@components/Layout";
import { MenuItems } from "../MenuItems";

export default class DesktopContainer extends Component {
  state = {
    fixed: null,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <MenuItems />
              </Container>
            </Menu>
            <HomepageHeading mobile={false} />
          </Segment>
        </Visibility>
        {children}
      </Media>
    );
  }
}
