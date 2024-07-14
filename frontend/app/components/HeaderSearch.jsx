
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default function HeaderSearch() {

  // const onSearch = (value) => console.log(value);

  return (
    <Search
      placeholder="input search text"
      // onSearch={onSearch}
      enterButton
    />
  );
}
