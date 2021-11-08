import {
  Segment,
  List,
  Grid,
  Container,
  Header,
  Image
} from "semantic-ui-react";

export const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "0em 0em" }}>
      <Container>
        <Grid>
          <Grid.Row>
       
            <Grid.Column width={4}>
            
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4" inverted style={{textAlign: 'center', paddingRight: 30}}>
               Powered By
               <Image src='https://www.emed.com/hubfs/White-logo.svg'size="large"></Image>
              </Header>
              <Grid.Row>
                
              </Grid.Row>
            </Grid.Column>
           
          </Grid.Row>
          
        </Grid>
      </Container>
    </Segment>
  );
};



