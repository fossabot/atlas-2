---
id: "olnotification"
title: "OLNotification"
sidebar_label: "OLNotification"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [OLNotification](olnotification.md)

## Hierarchy

* Control

  ↳ **OLNotification**

## Index

### Constructors

* [constructor](olnotification.md#constructor)

### Properties

* [element](olnotification.md#protected-element)
* [listenerKeys](olnotification.md#protected-listenerkeys)

### Methods

* [addEventListener](olnotification.md#addeventlistener)
* [changed](olnotification.md#changed)
* [dispatchEvent](olnotification.md#dispatchevent)
* [dispose](olnotification.md#dispose)
* [disposeInternal](olnotification.md#protected-disposeinternal)
* [get](olnotification.md#get)
* [getKeys](olnotification.md#getkeys)
* [getListeners](olnotification.md#getlisteners)
* [getMap](olnotification.md#getmap)
* [getProperties](olnotification.md#getproperties)
* [getRevision](olnotification.md#getrevision)
* [hasListener](olnotification.md#haslistener)
* [notify](olnotification.md#notify)
* [on](olnotification.md#on)
* [once](olnotification.md#once)
* [removeEventListener](olnotification.md#removeeventlistener)
* [set](olnotification.md#set)
* [setMap](olnotification.md#setmap)
* [setProperties](olnotification.md#setproperties)
* [setTarget](olnotification.md#settarget)
* [show](olnotification.md#show)
* [un](olnotification.md#un)
* [unset](olnotification.md#unset)

## Constructors

###  constructor

\+ **new OLNotification**(`options`: Options): *[OLNotification](olnotification.md)*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`options` | Options |

**Returns:** *[OLNotification](olnotification.md)*

## Properties

### `Protected` element

• **element**: *HTMLElement*

*Inherited from void*

Defined in node_modules/@types/ol/control/Control.d.ts:14

___

### `Protected` listenerKeys

• **listenerKeys**: *EventsKey[]*

*Inherited from void*

Defined in node_modules/@types/ol/control/Control.d.ts:15

## Methods

###  addEventListener

▸ **addEventListener**(`type`: string, `listener`: ListenerFunction): *void*

*Inherited from void*

Defined in node_modules/@types/ol/events/Target.d.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | ListenerFunction |

**Returns:** *void*

___

###  changed

▸ **changed**(): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Observable.d.ts:7

**Returns:** *void*

___

###  dispatchEvent

▸ **dispatchEvent**(`event`: object | Event | string): *boolean | undefined*

*Inherited from void*

Defined in node_modules/@types/ol/events/Target.d.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`event` | object &#124; Event &#124; string |

**Returns:** *boolean | undefined*

___

###  dispose

▸ **dispose**(): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Disposable.d.ts:4

**Returns:** *void*

___

### `Protected` disposeInternal

▸ **disposeInternal**(): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Disposable.d.ts:3

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *any*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

###  getKeys

▸ **getKeys**(): *string[]*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:8

**Returns:** *string[]*

___

###  getListeners

▸ **getListeners**(`type`: string): *ListenerFunction[]*

*Inherited from void*

Defined in node_modules/@types/ol/events/Target.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *ListenerFunction[]*

___

###  getMap

▸ **getMap**(): *PluggableMap*

*Inherited from void*

Defined in node_modules/@types/ol/control/Control.d.ts:16

**Returns:** *PluggableMap*

___

###  getProperties

▸ **getProperties**(): *object*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:9

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getRevision

▸ **getRevision**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/Observable.d.ts:8

**Returns:** *number*

___

###  hasListener

▸ **hasListener**(`opt_type?`: undefined | string): *boolean*

*Inherited from void*

Defined in node_modules/@types/ol/events/Target.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`opt_type?` | undefined &#124; string |

**Returns:** *boolean*

___

###  notify

▸ **notify**(`key`: string, `oldValue`: any): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`oldValue` | any |

**Returns:** *void*

___

###  on

▸ **on**(`type`: string | string[], `listener`: function): *EventsKey | EventsKey[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:19

**Parameters:**

▪ **type**: *string | string[]*

▪ **listener**: *function*

▸ (`p0`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | any |

**Returns:** *EventsKey | EventsKey[]*

▸ **on**(`type`: "change", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:22

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *EventsKey*

▸ **on**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:25

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

___

###  once

▸ **once**(`type`: string | string[], `listener`: function): *EventsKey | EventsKey[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:20

**Parameters:**

▪ **type**: *string | string[]*

▪ **listener**: *function*

▸ (`p0`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | any |

**Returns:** *EventsKey | EventsKey[]*

▸ **once**(`type`: "change", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:23

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *EventsKey*

▸ **once**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:26

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

___

###  removeEventListener

▸ **removeEventListener**(`type`: string, `listener`: ListenerFunction): *void*

*Inherited from void*

Defined in node_modules/@types/ol/events/Target.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | ListenerFunction |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: any, `opt_silent?`: undefined | false | true): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setMap

▸ **setMap**(`map`: PluggableMap): *void*

*Inherited from void*

Defined in node_modules/@types/ol/control/Control.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`map` | PluggableMap |

**Returns:** *void*

___

###  setProperties

▸ **setProperties**(`values`: object, `opt_silent?`: undefined | false | true): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`values` | object |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setTarget

▸ **setTarget**(`target`: HTMLElement | string): *void*

*Inherited from void*

Defined in node_modules/@types/ol/control/Control.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`target` | HTMLElement &#124; string |

**Returns:** *void*

___

###  show

▸ **show**(`text`: string): *void*

*Defined in [src/types/olTypes.ts:6](https://github.com/chronark/atlas/blob/aa952e2/src/types/olTypes.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*

___

###  un

▸ **un**(`type`: string | string[], `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:21

**Parameters:**

▪ **type**: *string | string[]*

▪ **listener**: *function*

▸ (`p0`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | any |

**Returns:** *void*

▸ **un**(`type`: "change", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:24

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *void*

▸ **un**(`type`: "propertychange", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/control/Control.d.ts:27

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

___

###  unset

▸ **unset**(`key`: string, `opt_silent?`: undefined | false | true): *void*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`opt_silent?` | undefined &#124; false &#124; true |

**Returns:** *void*
