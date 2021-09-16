import { IComponentRender } from '@zeedhi/common';

export interface IHighlight extends IComponentRender {
  code?: string;
  maxHeight?: string;
  readonly?: boolean;
  lineNumbers?: boolean;
  autoStyleLineNumbers?: boolean;
  tabSize?: number | string;
  insertSpaces?: boolean;
  ignoreTabKey?: boolean;
  language?: string;
  loadExtraLanguages?: string | Function;
}
