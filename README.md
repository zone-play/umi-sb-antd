# umi-sb-demo
umi.js + storybook + antd 构建的 React 应用

### 一、创建 umi 项目

```base
mkdir my-app && cd my-app

yarn create @umijs/umi-app

yarn

yarn start  // 开发

yarn build  // 构建

yarn global add serve // 发布前验证

serve ./dist
```

### 二、安装 Storybook

> cd my-app

```base
npx sb init

yarn storybook
```

### 三、安装 antd

```base
yarn add antd
```

### 四、给 Storybook 配置 antd 主题

> .storybook/preview.js

```base
import 'antd/dist/antd.css';
```

> [文档 docs](https://github.com/zone-play/umi-sb-antd/wiki/1.-%E6%A6%82%E8%A7%88#%E6%96%87%E6%A1%A3%E4%BB%8B%E7%BB%8D)


