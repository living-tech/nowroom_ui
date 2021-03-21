/*
 * このファイルは自動生成されますので手動では更新しないでください。
 * $ ts-node ./scripts/entryBuilder
 */
<% _.each(components, (component) => { %>
export <%= component.importName %> from "./<%= component.typeName %>/<%= component.dirName %>/<%= component.fileName %>";<% }) %>
