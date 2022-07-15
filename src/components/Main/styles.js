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
border:1px solid red;
display:flex;
flex:20%;
`;

const UserStats = styled.div`
border:1px solid blue;
display:flex;
flex:80%;
`;
const Filter = styled.input`
padding: 10px;
width: 80%;
height: 2vh;
margin-left: auto;
margin-right: auto;
border: 3px solid #C4C7CC;
border-radius: .5rem;
font-size: 1rem;
color: black;
font-family: 'Antonio';
margin-top:1vh;
margin-left:10px;
padding-left:10px;
&:focus{
    outline:none;
}
&::placeholder{
   padding-left:10px;
}
`;

const Select = styled.select`
width: 50%;
height: 4.7vh;
margin-left: auto;
margin-right: auto;
border: 3px solid #C4C7CC;
border-radius: .5rem;
font-size: 1.3rem;
color: black;
font-family: 'Antonio';
margin-top:1vh;
padding-left:10px;
margin-right:10px;
margin-left:10px;
&:focus{
    outline:none;
}
&::placeholder{
   padding-left:10px;
}
`;



export default { Container, UserInfo, UserStats, Filter, Select };