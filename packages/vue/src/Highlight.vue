<template>
  <div
    :class="['zd-highlight', instance.cssClass ]"
    :style="instance.cssStyle"
  >
    <prism-editor
      class="zd-highlight-container"
      :style="`max-height: ${(instance.maxHeight || 'none')}`"
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
  </div>
</template>

<style lang="scss">
  .zd-highlight {
    .prism-editor-wrapper {
      background-color: #f0f0f0;
      font-family: Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;
      font-size: 14px;
      line-height: 1.5;
      padding: 5px 10px;

      .prism-editor__editor,
        .prism-editor__textarea {
        outline: none;
      }
    }

    &-container {
      position: relative;
      min-height: 45px;
      display: flex;
      overflow: auto;
    }
  }
</style>

<script lang="ts" src="./Highlight.ts"></script>