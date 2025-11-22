import {Layout, Typography, Flex, Button} from "antd";
import styled from "@emotion/styled"
import { InputNumber } from 'antd';
const {Paragraph} = Typography;
const {Header} = Layout;

const StyledInputNumber = styled(InputNumber)({
    padding:"10px 20px",
    boxShadow:"inset 0 0 10px #999",
})

export default function SiteHeader(){
    return(
        <Header style={{height:"min-content"}}>
            <Flex vertical align="center">
                <h1 className="roboto-slab title" style={{marginBottom:"1rem"}}>Malcolm X Ipsum</h1>
                <Paragraph style={{fontStyle:"italic", fontSize:"1.2rem", marginBottom:"1rem"}}>The most radical lorem ipsum in history.</Paragraph>
                <Paragraph className="roboto-slab para" style={{marginBottom:"1rem", textAlign:"center",maxWidth:"45ch"}}>How many paragraphs of revolutionary ideas do you need?</Paragraph>
                <StyledInputNumber style={{marginBottom:"1.5rem"}} min={1} max={5} defaultValue={5} changeOnWheel={true}/>
                <Button type="primary" size="large">By Any Means Necessary</Button>
            </Flex>
        </Header>
    )
}