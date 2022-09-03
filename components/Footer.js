import styled from 'styled-components'

const FooterSection = styled.div`
    backgroud: #000;
    color: #fff;
    height: 60px;
    justify-content: center;
    align-items: center;
    `

export const Footer = () => {
  return (
    <FooterSection>
        <p>Next 2022 All Rights Reserved</p>
    </FooterSection>
  )
}
