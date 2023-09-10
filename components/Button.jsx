import { primary } from '@/lib/colors';
import { styled, css } from 'styled-components';

export const ButtonStyle = css`
  border: 0;
  color: #000;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `};

  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    `};
  /* white button */
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `};

  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `};
  /* black button */
  ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `};

  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `};

  ${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1rem;
      padding: 10px 20px;

      svg {
        height: 16px;
      }
    `};

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function PrimaryBtn({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
