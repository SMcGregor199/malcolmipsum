import {Layout, Typography, Flex, Button} from "antd";
import { useState } from "react";
import styled from "@emotion/styled"
import { InputNumber } from 'antd';
import type { JSX } from 'react';
const {Paragraph} = Typography;
const {Header} = Layout;

type SiteHeaderProps = {
  onGenerate: (count: number) => void;
};

const StyledInputNumber = styled(InputNumber)({
    padding:"10px 20px",
    boxShadow:"inset 0 0 10px #999",
})
const StyledDiv = styled.div({
    backgroundColor:"white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius:"5px",
    boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12)",
    padding:"1.5rem"
})
export default function SiteHeader(props: SiteHeaderProps): JSX.Element {
    const {onGenerate} = props;
    const [inputValue, setInputValue] = useState<number>(5);
    const handleChange = (value: number | string | null): void => {
        if (typeof value === "number") {
            setInputValue(value);  
        }
    }
    const handleClick = ():void => {
        if (inputValue > 0) {
            onGenerate(inputValue);
        }
    };
    return(
        <Header style={{height:"min-content", marginBottom:"2.5rem"}}>
            <Flex vertical align="center">
                <h1 className="roboto-slab title" style={{marginBottom:"0.5rem"}}>Malcolm X Ipsum</h1>
                <Paragraph style={{fontSize:"1rem", marginBottom:"2.5rem", color:"#4B4F56"}}>"The future belongs to those who prepare for it today."</Paragraph>
                <StyledDiv>
                    <Paragraph className="roboto-slab para" style={{marginBottom:"1rem", textAlign:"center"}}>How many paragraphs of powerful oratory do you need?</Paragraph>
                    <StyledInputNumber onChange={handleChange} onPressEnter={handleClick} style={{marginBottom:"1.5rem", display:"block", backgroundColor:"var(--primary-color)"}} min={1} max={5} defaultValue={5} changeOnWheel={true}/>
                    <Button type="primary" size="large" onClick={handleClick}>GENERATE TEXT</Button>
                </StyledDiv>
            </Flex>
        </Header>
    )
}