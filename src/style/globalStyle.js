import styled from 'styled-components'

export const BackgroundStyle = styled.div`
height:100vh;
width:640px;
background-color: white;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
`
export const BackgroundOverlay = styled.div`
display:flex;
justify-content:center;
background-color:#f6f6f6;
`

export const ButtonStyle = styled.button`
cursor: pointer;
width:${props => {
    switch (props.type) {
      case 'move':
        return '60px';
      case 'save':
        return '20px';
      default:
        return '100px';
    }
  }};
height:${props => (props.type === 'save' ? '20px' : '40px')};
text-align:center;
background-color:transparent;
border: 1px solid #ccc;
border-radius:15px;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

font-size:17px;
font-weight:700;
&:hover {
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
    transition: 0.2;
  }
`