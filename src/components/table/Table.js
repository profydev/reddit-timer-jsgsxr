import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import table from '../../assets/images/table.png';

const TableDiv = styled.div`
  margin-top: 37px;
`;

export default function Table() {
  return (
    <TableDiv>
      <Link to="/search">
        <img src={table} alt="Timer Table" />
      </Link>
    </TableDiv>
  );
}
