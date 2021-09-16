import { ComponentRender } from '@zeedhi/common';
import { IHighlight } from './interfaces';
import { Prism } from './prism';

export class Highlight extends ComponentRender implements IHighlight {
  /**
   * Max height in pixels. 'none' means no limit.
   */
  public maxHeight: string = 'none';

  /* Callback which will receive text to highlight.
  *You'll need to return an HTML string with syntax
  *highlighting using a library such as prismjs.
  */
  public language: string = 'ts';

  /* Readonly */
  public readonly: boolean = false;

  /* Whether to show line numbers. */
  public lineNumbers: boolean = false;

  /* Match line numbers text color to the theme. */
  public autoStyleLineNumbers: boolean = true;

  /* The number of characters to insert when pressing tab key. */
  public tabSize: number | string = 2;

  /* Whether to use spaces for indentation */
  public insertSpaces: boolean = true;

  public code: string = '';

  public loadExtraLanguages?: string | Function;

  /* Whether the editor should ignore tab key presses so
  *that keyboard users can tab past the editor
  */
  public ignoreTabKey: boolean = false;

  constructor(props: IHighlight) {
    super(props);
    this.code = this.getInitValue('code', props.code, this.code);
    this.readonly = this.getInitValue('readonly', props.readonly, this.readonly);
    this.lineNumbers = this.getInitValue('lineNumbers', props.lineNumbers, this.lineNumbers);
    this.maxHeight = this.getInitValue('maxHeight', props.maxHeight, this.maxHeight);
    this.tabSize = this.getInitValue('tabSize', props.tabSize, this.tabSize);
    this.insertSpaces = this.getInitValue('insertSpaces', props.insertSpaces, this.insertSpaces);
    this.ignoreTabKey = this.getInitValue('ignoreTabKey', props.ignoreTabKey, this.ignoreTabKey);
    this.language = this.getInitValue('language', props.language, this.language);
    this.loadExtraLanguages = this.getInitValue('loadExtraLanguages', props.loadExtraLanguages, this.loadExtraLanguages);
    this.createAccessors();
  }

  /**
   * Get the code highlighted
   */
  public getHighlightedCode() {
    if (typeof this.loadExtraLanguages === 'function') {
      return this.loadExtraLanguages();
    }
    return Prism.highlight(this.code, Prism.languages[this.language], this.language);
  }
}
