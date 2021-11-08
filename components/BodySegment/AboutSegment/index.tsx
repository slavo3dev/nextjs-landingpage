import {
  Segment,
  Grid,
  Header,
  Image,
  List,
} from "semantic-ui-react";

export const AboutSegment = () => {
  return (
    <Segment id="about" style={{ padding: "0em" }} vertical>
      <Grid columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{ paddingBottom: "5em", paddingTop: "5em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              RESOURCES
            </Header>
            <List
              bulleted
              style={{
                fontSize: "2em",
                textAlign: "left",
                marginLeft: 320,
              }}
            >
              <List.Item>
                {" "}
                <a>OSHA Interim Final Rule Text </a>
              </List.Item>
              <List.Item>
                <a>OSHA ETS Summary</a>
              </List.Item>
              <List.Item>
                <a>OSHA Fact Sheet</a>
              </List.Item>
              <List.Item>
                <a>OSHA ETS FAQ</a>
              </List.Item>
              <List.Item>
                <a>OSHA recorded webinar</a>
              </List.Item>
              <List.Item>
                <a>White House Fact Sheet</a>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column
            style={{ paddingBottom: "5em", paddingTop: "5em" }}
          >
            <Image
              src="/images/colleagues-in-a-workspace-working-together-2021-08-27-00-06-11-utc.jpg"
              size="large"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
