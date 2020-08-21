import React from 'react';

import { Breadcrumb } from 'antd';

function BreadcrumbContent() {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbContent;
