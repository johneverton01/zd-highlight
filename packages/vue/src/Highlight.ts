import { Component, Prop } from 'vue-property-decorator';
import { Highlight } from 'zd-highlight-common';
import { ZdComponentRender } from '@zeedhi/vuetify';

@Component
export default class ZdHighlight extends ZdComponentRender {
  @Prop({ type: String, default: '' }) public code!:string;

  @Prop({ type: Boolean, default: false }) public readonly!:boolean;

  @Prop({ type: Boolean, default: false }) public lineNumbers!:boolean;

  @Prop({ type: Boolean, default: true }) public autoStyleLineNumbers!:boolean;

  @Prop({ type: [Number, String], default: 2 }) public tabSize!: number | string;

  @Prop({ type: Boolean, default: true }) public insertSpaces!:boolean;

  @Prop({ type: Boolean, default: false }) public ignoreTabKey!:boolean;

  @Prop({ type: String, default: 'ts' }) public language!:string;

  public instance!: Highlight;

  public instanceType: typeof Highlight = Highlight;
}
