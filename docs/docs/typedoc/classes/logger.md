---
id: "logger"
title: "Logger"
sidebar_label: "Logger"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [Logger](logger.md)

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](logger.md#constructor)

### Methods

* [buildPayload](logger.md#private-buildpayload)
* [debug](logger.md#debug)
* [disableConsole](logger.md#private-disableconsole)
* [error](logger.md#error)
* [info](logger.md#info)
* [warn](logger.md#warn)

## Constructors

###  constructor

\+ **new Logger**(): *[Logger](logger.md)*

*Defined in [src/lib/logger.ts:5](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L5)*

**Returns:** *[Logger](logger.md)*

## Methods

### `Private` buildPayload

▸ **buildPayload**(`level`: string, `payload`: [LogObject](../globals.md#logobject)): *[LogObject](../globals.md#logobject)*

*Defined in [src/lib/logger.ts:29](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |
`payload` | [LogObject](../globals.md#logobject) |

**Returns:** *[LogObject](../globals.md#logobject)*

___

###  debug

▸ **debug**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [src/lib/logger.ts:38](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) |  {} |

**Returns:** *void*

___

### `Private` disableConsole

▸ **disableConsole**(): *void*

*Defined in [src/lib/logger.ts:20](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L20)*

**Returns:** *void*

___

###  error

▸ **error**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [src/lib/logger.ts:53](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) |  {} |

**Returns:** *void*

___

###  info

▸ **info**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [src/lib/logger.ts:43](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) |  {} |

**Returns:** *void*

___

###  warn

▸ **warn**(`text`: string, `payload`: [LogObject](../globals.md#logobject)): *void*

*Defined in [src/lib/logger.ts:48](https://github.com/chronark/atlas/blob/3be8226/src/lib/logger.ts#L48)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`payload` | [LogObject](../globals.md#logobject) |  {} |

**Returns:** *void*
