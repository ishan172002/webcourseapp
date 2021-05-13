import * as React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import Teamphotosection from "../components/About/Teamphotosection"


const AboutPage = ({data}) => (
  <Layout>
  <Seo title="Home"/>  
  <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="About LearnCodeOnline.in"
    subtitle=""
    heroclass="about-background"   
    />
  <DualInfoBlock 
    img="https://web.learncodeonline.in/static/g1-ab1d75af935ef6d6aa92891c1b4cb51b.jpg"
    heading="A message from CEO"/>
  <Teamphotosection />  
  <InfoBlock heading="About our vision"/>
  
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-2137854737828188"
       data-ad-slot="8237762020"
       data-ad-format="auto"
       data-full-width-responsive="true" />
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default AboutPage ;
 
