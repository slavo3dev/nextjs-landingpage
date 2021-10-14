import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const HomepageHeading = ({ mobile }: any) => (
  <Container text>
    <Header
      as="h1"
      content="Testing Compliant"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="FREQUENTLY ASKED QUESTIONS"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      Answers
      <Icon name="arrow right" />
    </Button>
  </Container>
);

class DesktopContainer extends Component {
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
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Test</Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">F&Q</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Media>
    );
  }
}

class MobileContainer extends Component {
  state = { sidebarOpened: false };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

const ResponsiveContainer = ({ children }: any) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

export const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies to Test Frequently
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We currently offer the BinaxNOW™ COVID-19 Ag Card Home
              Test for qualified individuals traveling on
              international United Airlines, American Airlines, and
              Delta Air Lines U.S.-bound flights, for reentry into the
              U.S. We recommend traveling with two Home Test kits per
              traveler
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Three Days Before returing to the US, start your test
              session
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              During the three (3) calendar days preceding the day of
              your return flight’s departure, visit eMed.com to start
              your test session virtually guided by an eMed Certified
              Guide. Use your smart mobile device, an internet-enabled
              laptop or desktop computer with either a built-in camera
              or a webcam.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/covid-test.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{ paddingBottom: "5em", paddingTop: "5em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column
            style={{ paddingBottom: "5em", paddingTop: "5em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/covid-test.png" />
              <b>Covid Test</b> Test YourSelf Twice a Week
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          At-home COVID-19 test kits available at Valley libraries
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          If patrons are ill, experiencing COVID-19 symptoms or have
          been exposed to someone who is ill or experiencing COVID-19
          symptoms, a family member or friend should be sent to pick
          up a kit...
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          We Need to Rethink Our COVID Testing Priorities
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Rapid antigen COVID tests are cheap to produce, easy to use,
          and can report results in a matter of minutes. They’re a
          powerful tool for stopping the spread of COVID because they
          allow people to test frequently and, if results are
          positive, quarantine immediately rather than waiting one to
          five days for a PCR test result. So why hasn’t the U.S.
          embraced rapid antigen tests more fully? Michael Mina argues
          that the country has overlooked the power of rapid antigen
          tests because we’ve been consumed by a singular focus:
          vaccines.
        </p>
        <Button as="a" size="large">
          Learn More...
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Ceremonies</List.Item>
                <List.Item as="a">Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Some Information
              </Header>
              <p>
                This product is only authorized for the duration of
                the declaration that circumstances exist justifying
                the authorization of emergency use of in vitro
                diagnostics for detection and/or diagnosis of COVID-19
                under Section 564(b)(1) of the Federal Food, Drug and
                Cosmetic Act, 21 U.S.C. § 360bbb-3(b)(1), unless the
                declaration is terminated or authorization is revoked
                sooner.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
