import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
function TableUserInfo({ HEADER, information }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: 20,
            color: 'white'
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
            color: "black",
        },
    }));
    return (
        <TableContainer component={Container} size="small" sx={{
            border: "1px solid #7E8696", padding: "10px",
            boxShadow: "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25)",
            backgroundColor: 'white',
            borderRadius: "0.5rem",
        }}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead sx={{ background: '#7E8696' }}>
                    <TableRow >
                        {HEADER.map((item, index) => {
                            return <StyledTableCell key={index} align="center">{item}</StyledTableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {information.length > 0 && information.map((info, indexInfo) => {
                        return <TableRow
                            key={indexInfo}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                backgroundColor: indexInfo % 2 !== 0 ? "#C4C7CC" : "#D7ECF7"
                            }}>
                            <StyledTableCell component="th" scope="row" align="center" padding='normal'>{info.name}</StyledTableCell>
                            {info.Team ? <StyledTableCell align="center">{info.Team}</StyledTableCell > :
                                <StyledTableCell align="center" sx={{
                                    width: 100,
                                    backgroundColor: info.score <= 70 ? "#E74454" : info.score >= 90 ? "#46A063" : null,
                                    color: info.score <= 70 ? "white !important" : info.score >= 90 ? "white !important" : null,
                                }}>{info.score}</StyledTableCell>}
                            {info.avatar ? <StyledTableCell align="center"><CardHeader
                                avatar={
                                    <Avatar alt="photo" src={info.avatar} />
                                }
                            /></StyledTableCell> :
                                <StyledTableCell align="center">{info.durationInDays}</StyledTableCell>}
                            {info.joinedAt ? <StyledTableCell align="center">{info.joinedAt}</StyledTableCell> :
                                <StyledTableCell align="center">{info.bugsCount}</StyledTableCell>}
                            {info.hasOwnProperty('madeDadeline') ? info.madeDadeline === false ?
                                <StyledTableCell align="center">{"False"}</StyledTableCell> :
                                <StyledTableCell align="center">{"True"}</StyledTableCell> : null}
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableUserInfo