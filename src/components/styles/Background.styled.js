import styled from 'styled-components'

export const StyledBackground = styled.div`
  width: 100%;
  height: 100;
  background: url(${props => props.imgUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: all ease 2s;
`