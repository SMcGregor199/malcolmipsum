export default function Content(){
    return(
        <Content id="main" style={{padding:"0 50px", marginBottom:"2.5rem", minHeight:"fit-content"}}>
          <div style={{
              flex:1, 
              padding:"1.5rem",
              backgroundColor:"white", 
              borderRadius:"5px", 
              boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12)"
          }}>
            <Flex align="center" justify="end" gap="1rem">
              <Button type="text" onClick={handleCopy} icon={<CopyFilled />} style={{marginBottom:"1rem"}}>Copy</Button>
            </Flex>
            {generateIpsum(paragraphCount).map((paragraph, index) => (
                <Paragraph key={index} style={{lineHeight:"1.75rem"}}>{paragraph}</Paragraph>
            ))}
         </div>
        </Content>
    )
}