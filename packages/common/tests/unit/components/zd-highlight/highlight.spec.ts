import { Highlight } from '../../../../src';

describe('Highlight', () => {
  describe('constructor()', () => {
    it('should create new highlight with default value', () => {
      const instance = new Highlight({ name: 'highlight', component: 'Highlight' });
      expect(instance.code).toBe('');
      expect(instance.readonly).toBeFalsy();
      expect(instance.lineNumbers).toBeFalsy();
      expect(instance.autoStyleLineNumbers).toBeTruthy();
      expect(instance.tabSize).toBe(2);
      expect(instance.insertSpaces).toBeTruthy();
      expect(instance.ignoreTabKey).toBeFalsy();
      expect(instance.language).toBe('ts');
    });

    it('should create new highlight replacing default values', () => {
      const instance = new Highlight({
        name: 'highlight',
        component: 'Highlight',
        code: 'console.log("oi")',
        language: 'js',
        lineNumbers: true,
        readonly: true,
        autoStyleLineNumbers: false,
        insertSpaces: false,
        ignoreTabKey: true,
        tabSize: '4',
      });
      expect(instance.code).toBe('console.log("oi")');
      expect(instance.readonly).toBeTruthy();
      expect(instance.lineNumbers).toBeTruthy();
      expect(instance.autoStyleLineNumbers).toBeTruthy();
      expect(instance.tabSize).toBe('4');
      expect(instance.insertSpaces).toBeFalsy();
      expect(instance.ignoreTabKey).toBeTruthy();
      expect(instance.language).toBe('js');
      expect(instance.getHighlightedCode()).toBe('console<span class="token punctuation">.</span>'
      + '<span class="token function">log</span><span class="token punctuation">('
      + '</span><span class="token string">"oi"</span><span class="token punctuation">)</span>');
    });
  });
});
