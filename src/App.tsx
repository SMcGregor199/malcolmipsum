import {Layout} from "antd";
import Footer from "./components/Footer";
const {Content} = Layout;
import SiteHeader from "./components/Header";

function App() {

  return (
    <Layout style={{background:"none", padding:"3rem", height:"100vh"}}>
      <SiteHeader />
      <Content id="main" style={{flex:1}}>

      </Content>
      <Footer />
    </Layout>
  )
}

export default App
