import Table from 'rsuite/Table';

import { renderHeaderTable } from './helpers';
import { IWTable } from './types';

const WTable = (props: IWTable) => {
  if (!props) {
    return null;
  }

  return <Table {...props}>{renderHeaderTable(props.columns)}</Table>;
};

export default WTable;
