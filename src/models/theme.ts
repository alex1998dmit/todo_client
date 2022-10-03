export type BreakpointNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointSizes = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  
  export interface ThemeScreenSize {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  
  export interface ThemeBreakpoint {
    min: ThemeScreenSize;
    max: ThemeScreenSize;
    resolutions: ResolutionsSizes;
  }
  
  export interface ResolutionsSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }

declare module '@emotion/react' {
    export interface Theme {
        // TODO 
        color: any;
        breakpoint: ThemeBreakpoint;
        // TODO
        shadow: any
    }
}