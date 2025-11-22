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
        <Header>
            <Flex vertical align="center">
                <h1 className="roboto-slab title">Malcolm X Ipsum</h1>
                <Paragraph style={{fontStyle:"italic", fontSize:"1.2rem"}}>The most radical lorem ipsum in history.</Paragraph>
                <Paragraph className="roboto-slab para">How many paragraphs of revolutionary ideas do you need?</Paragraph>
                <StyledInputNumber style={{marginBottom:"1em"}} min={1} max={5} defaultValue={5} changeOnWheel={true}/>
                <Button type="primary" size="large">By Any Means Necessary</Button>
            </Flex>
        </Header>
    )
}