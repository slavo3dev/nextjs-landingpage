import {
  Segment,
  Grid,
  Header,
  Image,
  Button,
} from "semantic-ui-react";

export const InfoSegment = () => {
  return (
    <Segment id="infoSegment" style={{ padding: "8em 0em" }} vertical>
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
  );
};
