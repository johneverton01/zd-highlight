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
      expect(instance.maxHeight).toBe('none');
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
        maxHeight: '150',
      });
      expect(instance.code).toBe('console.log("oi")');
      expect(instance.readonly).toBeTruthy();
      expect(instance.lineNumbers).toBeTruthy();
      expect(instance.autoStyleLineNumbers).toBeTruthy();
      expect(instance.tabSize).toBe('4');
      expect(instance.insertSpaces).toBeFalsy();
      expect(instance.ignoreTabKey).toBeTruthy();
      expect(instance.language).toBe('js');
      expect(instance.maxHeight).toBe('150');
      expect(instance.getHighlightedCode()).toBe('console<span class="token punctuation">.</span>'
      + '<span class="token function">log</span><span class="token punctuation">('
      + '</span><span class="token string">"oi"</span><span class="token punctuation">)</span>');
    });

    it('should overwrite getHighlightedCode', () => {
      const instance = new Highlight({
        name: 'highlight',
        component: 'Highlight',
      });
      instance.loadExtraLanguages = () => true;

      if (typeof instance.loadExtraLanguages === 'function') {
        instance.getHighlightedCode();
        expect(instance.getHighlightedCode).toBeTruthy();
      }
    });
  });
});
