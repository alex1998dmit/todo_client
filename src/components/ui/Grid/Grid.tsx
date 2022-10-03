/** @jsxImportSource @emotion/react */
// @ts-nocheck
import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import { breakpointsList, theme } from '../../../theme';
import { GridProps } from './Grid.d';

const step = (1 / 12) * 100;

export const Grid: FunctionComponent<GridProps> = (props) => {
  const {
    type,
    children,
    className,
    justifyContent,
    alignContent,
    hidden,
    spacing,
    direction,
    alignItems,
    dataTestId,
    pt,
    pr,
    pl,
    pb,
    mt,
    mr,
    ml,
    mb,
  } = props;

  let target: string;
  const breakpoints: any = breakpointsList.reduce((acc, br) => {
    if (props[br]) {
      target = br;
      return { ...acc, [br]: props[br] };
    }
    if (!target) {
      target = breakpointsList.find((br) => !!props[br]);
    }

    return { ...acc, [br]: props[target] };
  }, {});

  const basicCss = css({
    ...(pt && { paddingTop: `${pt}px` }),
    ...(pr && { paddingRight: `${pr}px` }),
    ...(pl && { paddingLeft: `${pl}px` }),
    ...(pb && { paddingBottom: `${pb}px` }),
    ...(mt && { marginTop: `${mt}px` }),
    ...(mr && { marginRight: `${mr}px` }),
    ...(ml && { marginLeft: `${ml}px` }),
    ...(mb && { marginBottom: `${mb}px` }),
  });

  const containerCss = css({
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: `${spacing * -8}px`,
    marginLeft: `${spacing * -8}px`,
    width: `calc(100% + ${spacing * 8}px)`,
  });

  const itemCss = css({
    boxSizing: 'border-box',
    margin: '0px',
    flexDirection: 'row',
    flexGrow: 0,
    paddingTop: `${spacing * 8}px`,
    paddingLeft: `${spacing * 8}px`,
    [theme.breakpoint.resolutions.xs]: {
      flexBasis: `${step * breakpoints.xs}%`,
      maxWidth: `${step * breakpoints.xs}%`,
      ...(hidden.includes('xs') && { display: 'none' }),
    },
    [theme.breakpoint.resolutions.sm]: {
      flexBasis: `${step * breakpoints.sm}%`,
      maxWidth: `${step * breakpoints.sm}%`,
      ...(hidden.includes('sm') && { display: 'none' }),
    },
    [theme.breakpoint.resolutions.md]: {
      flexBasis: `${step * breakpoints.md}%`,
      maxWidth: `${step * breakpoints.md}%`,
      ...(hidden.includes('md') && { display: 'none' }),
    },
    [theme.breakpoint.resolutions.lg]: {
      flexBasis: `${step * breakpoints.lg}%`,
      maxWidth: `${step * breakpoints.lg}%`,
      ...(hidden.includes('lg') && { display: 'none' }),
    },
    [theme.breakpoint.resolutions.xl]: {
      flexBasis: `${step * breakpoints.xl}%`,
      maxWidth: `${step * breakpoints.xl}%`,
      ...(hidden.includes('xl') && { display: 'none' }),
    },
  });

  const flexCss = css({
    display: 'flex',
    ...(!!justifyContent && { justifyContent }),
    ...(!!alignContent && { alignContent }),
    ...(!!alignItems && { alignItems }),
    ...(!!direction && { flexDirection: direction }),
  });

  const stylesCss = css(
    basicCss,
    type === 'container' ? containerCss : itemCss,
    !!justifyContent || !!alignContent || !!alignItems ? flexCss : {}
  )

  return (
    <div
      css={stylesCss}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  className: '',
  type: 'item',
  spacing: 2,
  hidden: [],
  direction: 'row',
  dataTestId: '',
};