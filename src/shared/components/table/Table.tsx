import { Table as TableAntd, TableProps } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = ({ ...props }: TableProps | any) => {
  return <TableAntd {...props} />;
};

export default Table;
