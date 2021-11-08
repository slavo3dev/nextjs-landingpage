import { Segment, Grid, Header } from "semantic-ui-react";

export const InfoSegment = () => {
  return (
    <Segment id="infoSegment" style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              BACKGROUND{" "}
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              On November 5, 2021, the Occupational Safety and Health
              Administration (OSHA) issued an Emergency Temporary
              Standard (ETS) to minimize the risk of COVID-19
              transmission in the workplace.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              The ETS establishes binding requirements to protect
              unvaccinated employees of employers with 100 or more
              employees from the risk of contracting COVID-19 in the
              workplace.
            </p>

            <p style={{ fontSize: "1.33em" }}>
              Under this standard, covered employers must develop,
              implement and enforce a mandatory COVID-19 vaccination
              policy, unless they adopt a policy requiring employees
              to choose to either be vaccinated or undergo regular
              COVID-19 testing and wear a face covering at work.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
