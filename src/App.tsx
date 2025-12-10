import {Layout, Typography,Button, Flex} from "antd";
import { CopyFilled } from "@ant-design/icons";
import {useState, useMemo} from "react";
import type {JSX} from "react";
import SiteHeader from "./components/Header";
import Footer from "./components/Footer";
import generateIpsum from "./utils";
const {Content} = Layout;
const {Paragraph} = Typography;


function App(): JSX.Element {
  const [paragraphCount, setParagraphCount] = useState<number>(5);
  const [copyText, setCopyText] = useState<string>("Copy");

  function handleGenerateParagraphs(count:number){
      setParagraphCount(count);
  }
  const ipsumTextArray : string[] = useMemo(()=>{
    return generateIpsum(paragraphCount);
  },[paragraphCount]);
  const ipsum: JSX.Element[] = useMemo(() => ipsumTextArray.map((paragraph:string, index:number):JSX.Element => (
    <Paragraph key={index} style={{lineHeight:"1.75rem"}}>{paragraph}</Paragraph>
  )), [ipsumTextArray]);

  async function handleCopy():Promise<void>{
    const text = ipsumTextArray.join("\n\n");
    await navigator.clipboard.writeText(text);
    setCopyText("Copied!");
    setTimeout((): void => {
      setCopyText("Copy");
    }, 1000);
  }
  return (
    <div id="container" style={{maxWidth: "800px",width: "100%",margin: "0 auto"}}>
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
            <Flex align="center" justify="end" gap="1rem">
              <Button type="text" onClick={handleCopy} icon={<CopyFilled />} style={{marginBottom:"1rem"}}>{copyText}</Button>
            </Flex>
            {ipsum}
         </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
