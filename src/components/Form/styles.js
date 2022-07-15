import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    margin-left: auto;
    margin-right: auto;
    width: 70vw;
    height: 50vh;
    margin-top: 10vh;
`;

const Card = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    width: 50%;
    height: 45vh;
    background-color:white;
    border-radius:1rem;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
display: flex;
flex-direction: column;
padding-top: 1vh;
font-family: 'Antonio';
`;

const Titel = styled.h3`
display:flex;
justify-content: center;
font-size: 2rem;
color: #424448;
font-family: 'Antonio';
`;

const Email = styled.input`
padding-bottom: 10px;
width: 28vw;
height: 5vh;
margin-left: auto;
margin-right: auto;
border: 3px solid #C4C7CC;
border-radius: .5rem;
font-size: 2rem;
color: black;
font-family: 'Antonio';
margin-bottom:3vh;
padding-left:10px;
&:focus{
    outline:none;
}
&::placeholder{
   padding-left:10px;
}
`;

const Password = styled.input`
padding-bottom: 10px;
width: 28vw;
height: 5vh;
margin-left: auto;
margin-right: auto;
border: 3px solid #C4C7CC;
border-radius: .5rem;
font-size: 2rem;
color: black;
font-family: 'Antonio';
margin-bottom:1vh;
padding-left:10px;
&:focus{
    outline:none;
}
&::placeholder{
    padding-left:10px;
 }
`;

const Label = styled.label`
font-size: 1rem;
color: black;
font-family: 'Antonio';
margin-left: 3.5vw;
margin-bottom:1vh;
`;

const LabelError = styled.label`
font-size: 1rem;
color: black;
font-family: 'Antonio';
margin-left: 3.5vw;
position: absolute;
top: 49vh;
left: 59vw;
opacity:${(props) => !props.isValidEmail ? '1' : '0'}
`;

const Submit = styled.button`
height: 6vh;
width: 14vw;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
font-size: 1.5vw;
cursor: pointer;
border: none;
font-family: 'Antonio';
background-color:#15C043;
color:white;
margin-top:1vh;
display:flex;
justify-content:${(props) => props.isLoading ? 'space-around' : 'center'};
align-items:center;
&:focus{
    outline:none
}

`;

const Alert = styled.div`
display: flex;
justify-content: center;
margin-top: 5px;
`
export default { Container, Card, Form, Email, Password, Label, Titel, Submit, Alert, LabelError };