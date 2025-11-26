import {Layout, Typography} from "antd";
import {useState} from "react";
import Footer from "./components/Footer";
const {Content} = Layout;
import SiteHeader from "./components/Header";
const {Paragraph} = Typography;
import generateIpsum from "./utils";

function App() {
  const [paragraphCount, setParagraphCount] = useState<number>(5);

  function handleGenerateParagraphs(count:number){
      setParagraphCount(count);
  }
  return (
    <div id="container" style={{width:"800px", margin:"auto"}}>
      <Layout style={{background:"none", padding:"1rem"}}>
        <SiteHeader onGenerate={handleGenerateParagraphs}/>
        <Content id="main" style={{padding:"0 50px", marginBottom:"2.5rem", minHeight:"fit-content"}}>
          <div style={{
              flex:1, 
              padding:"1.5rem",
              backgroundColor:"white", 
              borderRadius:"5px", 
              boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12)"
          }}>
            {generateIpsum(paragraphCount).map((paragraph, index) => (
                <Paragraph key={index} style={{lineHeight:"1.75rem"}}>{paragraph}</Paragraph>
            ))}
         </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
