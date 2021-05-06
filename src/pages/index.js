import * as React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import Coursecart from "../components/Cart/Coursecart"


const IndexPage = ({data}) => (
  <Layout>
  <Seo title="Home"/>
  
  
  <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="i write code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background"   
    />
  
  <InfoBlock heading="About us"/>
  
  <Coursecart courses={data.courses}/>

  <DualInfoBlock 
  img="https://web.learncodeonline.in/static/g1-ab1d75af935ef6d6aa92891c1b4cb51b.jpg"
  heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
		edges{
			node{
				id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width:200, height:120){
						...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default IndexPage ;
 