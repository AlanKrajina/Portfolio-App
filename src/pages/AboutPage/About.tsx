import React, { useContext } from "react";
import Layout from "../../layouts/Layout";
import { styles } from "./aboutStyles";
import DownloadPDF from "../../components/DownloadPDF/DownloadPDF";
import { MediaQueryContext } from "../../App";

const reactPdf = require("react-pdf/dist/esm/entry.webpack5");
const { Document, Page } = reactPdf;

const About: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <Layout
      headerStyle={styles.Title}
      headerId="aboutTitle"
      headerTitle="About and CV"
    >
      <div style={styles.MainDiv}>
        <div style={styles.ParagraphDownloadDiv}>
          <p>
            Born and raised in Zagreb Croatia where I finished school of
            Electrical Engineering and college for Occupational Safety and
            Health. In 2015 I relocated to Cork Ireland where I worked for HCL
            Technologies that conducted bussines with a national
            telecommunnication company Eir-Meteor. After working there for a
            couple of years I got a job offer from Apple where I started working
            first as iOS technical support and later got promoted to iOS and
            MacOS next level support.
          </p>
          <p>
            In 2019 I decided that I wanted to change careers and found an
            interest in software development. I moved back to Croatia and
            started learning. During that one year in Croatia I finished
            multiple courses and a New York US based coding bootcamp Flatiron
            School. This is where I knew that this is what I want to do
            permanently so I started making plans on how to get in to the
            industry. After finishing Flatiron School and coding for one year I
            decided to take my chances and in 2020 moved to London to find a
            Junior Dev role.
          </p>
          <p>
            In my second month in London I recieved a job offer to work as a
            Fullstack Dev in a London based company Agent3 and that is when my
            new career started. While working there I have learnt a whole lot
            about development and at one point found my career path, Frontend
            development. Because of COVID from day one of my employement I was
            "stuck" in a flat in London for more than a year. I reached an
            understanding with my seniors and was given a green light to
            continue working for them from Croatia. I moved back and worked
            remotely for a year and a half. After almost two and a half years in
            Agent3 I decided to make the next step in my career. I resigned and
            started working on my own app to upgrade my Frontend skills with the
            latest and greatest technologies available and to be ready for the
            next level of my development career.
          </p>
          <p>
            Thank you for your patience and for reading this About section. I
            added an option to download my current CV so feel free to so and to
            get in contact with me so we can discuss any future opportunities.
          </p>
          <DownloadPDF />
        </div>

        <div>
          <Document file="CV.pdf">
            <Page pageNumber={1} width={isDesktop ? 570 : 300} />
          </Document>
        </div>
      </div>
    </Layout>
  );
};

export default About;
