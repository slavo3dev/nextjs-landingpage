import {
  Segment,
  Container,
  Header,
  Button,
  Divider,
} from "semantic-ui-react";

export const StudiesSegment = () => {
  return (
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
  );
};
