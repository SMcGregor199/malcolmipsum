import {Layout, Flex} from "antd";
import Footer from "./components/Footer";
const {Header,Content} = Layout;

function App() {

  return (
    <Layout style={{background:"none", padding:"3rem"}}>
      <Header>
        <Flex vertical align="center">
          <h1 className="roboto-slab">Malcolm X Ipsum</h1>
        </Flex>
      </Header>
      <Content id="main">

      </Content>
      <Footer />
    </Layout>
  )
}

export default App
