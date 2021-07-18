import React from 'react';
import styled from 'styled-components';
import table from '../../assets/images/table.png';

const TableDiv = styled.div`
  margin-top: 37px;
`;

export default function Table() {
  return (
    <TableDiv>
      <img src={table} alt="Timer Table" />
    </TableDiv>
  );
}
