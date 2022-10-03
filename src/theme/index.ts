import { Theme } from '@emotion/react';
import { BreakpointNames, BreakpointSizes } from '../models/theme';

export const breakpointsList: Array<BreakpointNames> = ['xs', 'sm', 'md', 'lg', 'xl'];

export const breakpoints: BreakpointSizes = {
  xs: 400,
  sm: 1200,
  md: 1440,
  lg: 1920,
};

export const theme: Theme = {
  color: {
    lightBlack: 'rgba(39, 42, 53, 0.5)',
    lightOrange: 'rgba(255, 111, 0, 0.5)',
    snow: '#d9d9d9',
    lightSnow: 'rgba(217, 217, 217, 0.5)',
    yellow: '#ffd25f',
    blue: '#7c72ed',
    white: '#ffffff',
    black: '#272a35',
    blackOpacity: 'rgba(39, 42, 53, 0.5)',
    bg: '#f9f9f9',
    darkGray: '#7e7f85',
    lightGray: '#d9d9d9',
    lightGreen: '#dbf5b9',
    lightRed: '#fdebeb',
    green: '#87df17',
    red: '#ea3737',
    orange: '#ff6f00',
    gray: '#d9d9d9',
  },
  breakpoint: {
    min: {
      xs: `@media (min-width: ${breakpoints.xs}px)`,
      sm: `@media (min-width: ${breakpoints.sm}px)`,
      md: `@media (min-width: ${breakpoints.md}px)`,
      lg: `@media (min-width: ${breakpoints.lg}px)`,
      xl: `@media (min-width: ${breakpoints.lg}px)`,
    },
    max: {
      xs: `@media (max-width: ${breakpoints.xs}px)`,
      sm: `@media (max-width: ${breakpoints.sm}px)`,
      md: `@media (max-width: ${breakpoints.md}px)`,
      lg: `@media (max-width: ${breakpoints.lg}px)`,
      xl: `@media (max-width: ${breakpoints.lg}px)`,
    },
    resolutions: {
      xs: `@media (max-width: ${breakpoints.xs}px)`,
      sm: `@media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px)`,
      md: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`,
      lg: `@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
      xl: `@media (min-width: ${breakpoints.lg}px)`,
    },
  },
  shadow: {
    default: '0px -4px 24px rgba(0, 0, 0, 0.08)',
  },
};