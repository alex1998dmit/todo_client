export interface GridProps {
  type: 'item' | 'container';
  children?: React.ReactChild | React.ReactChildren | React.ReactNode;
  // breakpoints
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  hidden?: any;
  spacing?: number;
  // flex properties
  direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
  justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  alignContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  // padding spaces
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  className?: string;
  dataTestId?: string;
}
