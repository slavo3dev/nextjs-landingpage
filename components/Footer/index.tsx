import {
  Segment,
  List,
  Grid,
  Container,
  Header,
} from "semantic-ui-react";

export const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Ceremonies</List.Item>
                <List.Item as="a">Contact </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>x
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Pre-Order</List.Item>
                <List.Item as="a">FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Vaccination</List.Item>
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
  );
};
