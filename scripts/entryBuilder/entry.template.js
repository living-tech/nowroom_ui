/*
 * このファイルは自動生成されますので手動では更新しないでください。
 */

<% _.each(components, (component) => { %>
export * from "./components/<%= component.typeName %>/<%= component.dirName %>/<%= component.fileName %>";<% }) %>
