import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;
    height: 80vh;
    margin-top: 2.5vh;
`;
const UserInfo = styled.div`
display:flex;
flex:20%;
flex-direction:column;
`;
const Card = styled.div`
display: flex;
border: 1px solid;
flex-direction: column;
align-items: center;
margin-bottom: 3vh;
margin-top: 8vh;
height: 20vh;
border: 3px solid #C4C7CC;
`
const Info = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 27vw;
`

const InfoSection = styled.div`

display: flex;
    font-size: 1rem;
    font-family: Antonio;
    text-align: center;

`

const Title = styled.div`
font-size:2rem;
font-family: 'Antonio';
display:flex;
justify-content:center;
margin-bottom:2vh;
margin-top:1vh;
background-color:white;
border: 3px solid #C4C7CC;
letter-spacing:5px;
border-radius: .2rem;
`;
const UserStats = styled.div`
display:flex;
flex:80%;
flex-direction:column;
`;

const Box = styled.div`
   display: flex;
    margin-bottom: 1vh;
`
const Filter = styled.input`
padding: 10px;
    width: 80%;
    height: 2vh;
    margin-left: auto;
    border: 3px solid #C4C7CC;
    border-radius: 0.2rem;
    font-size: 1rem;
    color: black;
    font-family: 'Antonio';
    margin-top: 1vh;
    margin-left: 43px;
    padding-left: 10px;
&:focus{
    outline:none;
}
&::placeholder{
   padding-left:10px;
}
`;

const Select = styled.select`
width: 54%;
    height: 4.7vh;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #C4C7CC;
    border-radius: 0.2rem;
    font-size: 1.3rem;
    color: black;
    font-family: 'Antonio';
    margin-top: 1vh;
    padding-left: 10px;
    margin-right: 46px;
    margin-left: 10px;
&:focus{
    outline:none;
}
&::placeholder{
   padding-left:10px;
}
`;


const Alert = styled.div`
display: flex;
justify-content: center;
margin-top: 5px;
`

export default { Container, UserInfo, UserStats, Filter, Select, Box, Title, Card, Info, InfoSection, Alert };