import {Layout} from "antd";
import Footer from "./components/Footer";
const {Content} = Layout;
import SiteHeader from "./components/Header";

function App() {

  return (
    <div id="container" style={{width:"800px", margin:"auto"}}>
      <Layout style={{background:"none", padding:"1rem", height:"100vh"}}>
        <SiteHeader />
        <Content id="main" style={{flex:1, padding:"0.5rem"}}>
          <p>This is the main content</p>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
