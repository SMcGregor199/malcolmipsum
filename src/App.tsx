import {Layout, Typography} from "antd";
import Footer from "./components/Footer";
const {Content} = Layout;
import SiteHeader from "./components/Header";
const {Paragraph} = Typography;
import data from "./data";

function App() {

  return (
    <div id="container" style={{width:"800px", margin:"auto"}}>
      <Layout style={{background:"none", padding:"1rem", height:"100vh"}}>
        <SiteHeader />
        <Content id="main" style={{padding:"0 50px", marginBottom:"2.5rem"}}>
          <div style={{
              flex:1, 
              padding:"1.5rem",
              backgroundColor:"white", 
              borderRadius:"5px", 
              boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12)"
          }}>

         </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
