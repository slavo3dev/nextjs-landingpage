import {
  Segment,
  Container,
  Header,
  Button,
  Divider,
} from "semantic-ui-react";

export const StudiesSegment = () => {
  return (
    <Segment id="caseStudies" style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header
          as="h3"
          style={{ fontSize: "4em", textAlign: "center" }}
        >
          NEWS
        </Header>
        <Header as="h3" style={{ fontSize: "2em" }}>
          OSHA's vaccine ETS: First impressions{" "}
        </Header>

        <p>JD Supra, November 5, 2021</p>
        <p style={{ fontSize: "1.33em" }}>
          Employers who are covered by the ETS will be required to
          issue a policy, which doesn’t sound so bad, until you read
          all the stuff that has to be in it. Unvaccinated employees
          will not be allowed to self-test and read their own results
          and report them to their employers -- instead, someone will
          have to monitor the test. That could be a telehealth
          provider or the employer....
        </p>
        <Button as="a" size="large">
          <a href="https://www.jdsupra.com/legalnews/osha-s-vaccine-ets-first-impressions-6366742/">
            Read More
          </a>
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        ></Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          OSHA Issues COVID-19 Vaccination And Testing ETS For Certain
          Employers
        </Header>
        <p>National Law Review, November 4, 2021</p>
        <p style={{ fontSize: "1.33em" }}>
          A big question for employers has been: Who will be required
          to pay for the testing? The federal OSHA ETS does not
          require the employer to pay for testing. However, this may
          be required under applicable state laws and/or collective
          bargaining obligations in a union setting. Given the
          difficulty in finding tests that could be a result of this
          mandate – and the relatively high cost for non-diagnostic
          tests – employers should carefully consider whether they
          might run afoul of expense reimbursements requirements or
          minimum wage laws. According to the ETS, self-administered
          COVID-19 tests may only be used if observed by the employer
          or a telehealth proctor.
        </p>
        <Button as="a" size="large">
          <a href="https://www.natlawreview.com/article/osha-issues-covid-19-vaccination-and-testing-ets-certain-employers">
            Learn More...
          </a>
        </Button>
        <Header as="h3" style={{ fontSize: "2em" }}>
          OSHA sets Jan. 4 deadline for employers to mandate COVID-19
          vaccines
        </Header>
        <p>HR Dive, November 4, 2021</p>
        <p style={{ fontSize: "1.33em" }}>
          Employers with 100 or more employees will need to implement
          a COVID-19 vaccination requirement for their employees — and
          offer a weekly testing alternative to those who refuse or
          are unable to receive a vaccine — by Jan. 4, 2022, according
          to an emergency temporary standard issued Thursday by the
          Occupational Safety and Health Administration.
        </p>
        <Button as="a" size="large">
          <a href="https://www.hrdive.com/news/osha-employers-have-60-days-to-mandate-covid-19-vaccines/608249/">
            Learn More...
          </a>
        </Button>
      </Container>
    </Segment>
  );
};
