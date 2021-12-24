# 使い方

## install

```bash
$ yarn add git+ssh://git@github.com:living-tech/nowroom_components.git
```

### tailwind.config.js

```js
const { tailwindCssConfig } = require("nowroom-components/lib/utils");

module.exports = {
  ...tailwindCssConfig,
  // your custom
};
```

## import

```tsx
// _app.tsxや.storybook/preview.jsなどで
import "nowroom-components/lib/styles/globals.css";
```

```tsx
// コンポーネント
import { ButtonPurple, TextBlack } from "nowroom-components";
// 色を使う場合（tailwindで設定しているので極力使わないほうがベター）
import { purple500 } from "nowroom-components";
// widthの固定幅など
import { iPhoneMockWidth } from "nowroom-components";
```

# 開発方法

## storybook 立ち上げ

```bash
$ yarn storybook
```

## build

```bash
$ yarn build
```
