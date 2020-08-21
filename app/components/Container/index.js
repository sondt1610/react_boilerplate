import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const Container = styled(Content)`
  padding: 24px;
  margin: 0;
  min-height: calc(100vh - 269px);
`;
