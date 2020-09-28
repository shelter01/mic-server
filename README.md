# @gdyfe/mic-server

中传数据大屏

- [x] 微服务结构

## 安装

- npm 安装

```bash
npm install @gdyfe/mic-server
```

- yarn 安装

```bash
yarn add @gdyfe/mic-server
```

## 引入

```javascript
// 将自动注册所有组件为全局组件
import micServer from '@gdyfe/mic-server';
Vue.use(micServer);
```

## 按需引入

```javascript
// 将自动注册所有组件为全局组件
import { micServer } from '@gdyfe/mic-server';
Vue.use(micServer);
```

## 使用

```html
<gdy-mic-server :title="title" :url="url"/>
```

### title 属性

类型`String`

| 属性 |    说明    |   类型   |    默认值    |
| :--:  | :--------: | :------: | :----------: |
| title | 左上角名称 | `String` | `微服务结构` |

### url 属性

类型`String`

|  属性   |  说明  |   类型   | 默认值 |
| :-----: | :----: | :------:| :----: |
| url  | 初始请求地址| `String` | `http://ops.aodianyun.cn/admin/dbMonitor/getCenterMediaMonitor` |
