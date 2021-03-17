/*
 * このファイルは自動生成されますので手動では更新しないでください。
 */

<% _.each(components, (component) => { %>
export * from "./<%= component.typeName %>/<%= component.dirName %>/<%= component.fileName %>";<% }) %>
