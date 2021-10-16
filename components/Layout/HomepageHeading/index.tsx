import { Header, Container, Button, Icon } from "semantic-ui-react";

export const HomepageHeading = ({ mobile }: any) => (
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
