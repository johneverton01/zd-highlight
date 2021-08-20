<template>
  <prism-editor
    class="zd-highlight"
    v-model="instance.code"
    :highlight="() => instance.getHighlightedCode()"
    :readonly="instance.readonly"
    :lineNumbers="instance.lineNumbers"
    :autoStyleLineNumbers="instance.autoStyleLineNumbers"
    :tabSize="instance.tabSize"
    :insertSpaces="instance.insertSpaces"
    :ignoreTabKey="instance.ignoreTabKey"
    :language="instance.language"
  >
  </prism-editor>
</template>

<style lang="scss">
  .zd-highlight {
    background-color: #fafafa;
    max-height: 400px;
    font-family: Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px 10px;

    .prism-editor__textarea {
      outline: none;
    }
  }
</style>

<script lang="ts" src="./Highlight.ts"></script>