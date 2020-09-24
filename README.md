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
<gdy-mic-server :runIns="runIns" :destroyedIns="destroyedIns" :closedIns="closedIns" :serviceNum="serviceNum" :resourceOccupation="resourceOccupation"/>
```

### title 属性

类型`String`

| 属性 |    说明    |   类型   |    默认值    |
| :--  | :--------: | :------: | :----------: |
| name | 左上角名称 | `String` | `微服务结构` |

### runIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `Number` | `-` |

### destroyedIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `Number` | `-` |

### closedIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `Number` | `-` |

### serviceIns 属性

类型`Array`

|  属性   |  说明  |   类型   | 默认值 |
| :----- | :----: | :------:| :----: |
| Object  | | | |
| &nbsp;&nbsp; name | 实例名称 | `String` | `-` |
| &nbsp;&nbsp; type | 实例类型 | `Number` | `-` |

### resourceOccupation 属性

类型`Array`

| 属性  | 说明 |   类型   | 默认值 |
| :--- | :--: | :------: | :----: |
| Array  | | | |
| &nbsp;&nbsp;  used  | 使用占比 | `Number` | `-` |
| &nbsp;&nbsp;  free  | 空闲占比 | `Number` | `-` |

### perNum 属性

类型`Array`

| 属性 |    说明    |   类型   |   默认值    |
| :--: | :--------: | :------: | :--: |
| workingNum | 运行实例数量 | `Number` | `-` |
| closeNum | 关闭实例数量 | `Number` | `-` |
| destroyNum | 销毁实例数量 | `Number` | `-` |
| serviceNum | 服务实例数量 | `Number` | `-` |