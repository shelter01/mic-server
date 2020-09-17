# @gdyfe/mic-server

中传数据大屏

- [x] 微服务结构

## 安装

- npm 安装

```bash
npm install @gdyfe/mic-server
```

- yarn 安装

```
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
<gdy-mic-server :runIns="runIns" :destroyedIns="destroyedIns" :closedIns="closedIns" :startingIns="startingIns" :resourceOccupation="resourceOccupation"></gdy-mic-server>
```

### title 属性

类型`String`

| 属性 |    说明    |   类型   | 可选值 |    默认值    |
| :--  | :--------: | :------: | :----: | :----------: |
| name | 左上角名称 | `String` |  ---   | `微服务结构` |

### runIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp;  id  |  序号  | `Number` | `-` |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `String` | `-` |

### destroyedIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp;  id  |  序号  | `Number` | `-` |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `String` | `-` |

### closedIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp;  id  |  序号  | `Number` | `-` |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `String` | `-` |

### startingIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp;  id  |  序号  | `Number` | `-` |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `String` | `-` |

### resourceOccupation 属性

类型`Array`

| 属性  | 说明 |   类型   | 默认值 |
| :--- | :--: | :------: | :----: |
| Array  | | | |
| &nbsp;&nbsp;  state  | 使用状态 | `Number` | `-` |
| &nbsp;&nbsp; percent | 状态占比 | `Number` | `-` |