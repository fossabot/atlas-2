---
id: "ollayer"
title: "OLLayer"
sidebar_label: "OLLayer"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [OLLayer](ollayer.md)

## Hierarchy

* VectorLayer

  ↳ **OLLayer**

## Index

### Constructors

* [constructor](ollayer.md#constructor)

### Properties

* [type](ollayer.md#protected-type)

### Methods

* [addEventListener](ollayer.md#addeventlistener)
* [addFilter](ollayer.md#addfilter)
* [changed](ollayer.md#changed)
* [dispatchEvent](ollayer.md#dispatchevent)
* [dispose](ollayer.md#dispose)
* [disposeInternal](ollayer.md#protected-disposeinternal)
* [get](ollayer.md#get)
* [getDeclutter](ollayer.md#getdeclutter)
* [getExtent](ollayer.md#getextent)
* [getKeys](ollayer.md#getkeys)
* [getLayerState](ollayer.md#getlayerstate)
* [getLayerStatesArray](ollayer.md#getlayerstatesarray)
* [getLayersArray](ollayer.md#getlayersarray)
* [getListeners](ollayer.md#getlisteners)
* [getMaxResolution](ollayer.md#getmaxresolution)
* [getMinResolution](ollayer.md#getminresolution)
* [getOpacity](ollayer.md#getopacity)
* [getProperties](ollayer.md#getproperties)
* [getRenderBuffer](ollayer.md#getrenderbuffer)
* [getRenderMode](ollayer.md#getrendermode)
* [getRenderOrder](ollayer.md#getrenderorder)
* [getRevision](ollayer.md#getrevision)
* [getSource](ollayer.md#getsource)
* [getSourceState](ollayer.md#getsourcestate)
* [getStyle](ollayer.md#getstyle)
* [getStyleFunction](ollayer.md#getstylefunction)
* [getType](ollayer.md#gettype)
* [getUpdateWhileAnimating](ollayer.md#getupdatewhileanimating)
* [getUpdateWhileInteracting](ollayer.md#getupdatewhileinteracting)
* [getVisible](ollayer.md#getvisible)
* [getZIndex](ollayer.md#getzindex)
* [hasListener](ollayer.md#haslistener)
* [notify](ollayer.md#notify)
* [on](ollayer.md#on)
* [once](ollayer.md#once)
* [removeEventListener](ollayer.md#removeeventlistener)
* [set](ollayer.md#set)
* [setDeclutter](ollayer.md#setdeclutter)
* [setExtent](ollayer.md#setextent)
* [setMap](ollayer.md#setmap)
* [setMaxResolution](ollayer.md#setmaxresolution)
* [setMinResolution](ollayer.md#setminresolution)
* [setOpacity](ollayer.md#setopacity)
* [setProperties](ollayer.md#setproperties)
* [setRenderOrder](ollayer.md#setrenderorder)
* [setSource](ollayer.md#setsource)
* [setStyle](ollayer.md#setstyle)
* [setVisible](ollayer.md#setvisible)
* [setZIndex](ollayer.md#setzindex)
* [un](ollayer.md#un)
* [unset](ollayer.md#unset)

## Constructors

###  constructor

\+ **new OLLayer**(`opt_options?`: Options): *[OLLayer](ollayer.md)*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`opt_options?` | Options |

**Returns:** *[OLLayer](ollayer.md)*

## Properties

### `Protected` type

• **type**: *LayerType*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:35

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

###  addFilter

▸ **addFilter**(`mask`: any): *void*

*Defined in [src/types/olTypes.ts:39](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`mask` | any |

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

###  getDeclutter

▸ **getDeclutter**(): *boolean*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:36

**Returns:** *boolean*

___

###  getExtent

▸ **getExtent**(): *Extent | undefined*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:19

**Returns:** *Extent | undefined*

___

###  getKeys

▸ **getKeys**(): *string[]*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:8

**Returns:** *string[]*

___

###  getLayerState

▸ **getLayerState**(): *State*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:21

**Returns:** *State*

___

###  getLayerStatesArray

▸ **getLayerStatesArray**(`opt_states?`: State[]): *State[]*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`opt_states?` | State[] |

**Returns:** *State[]*

___

###  getLayersArray

▸ **getLayersArray**(`opt_array?`: Layer[]): *Layer[]*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`opt_array?` | Layer[] |

**Returns:** *Layer[]*

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

###  getMaxResolution

▸ **getMaxResolution**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:23

**Returns:** *number*

___

###  getMinResolution

▸ **getMinResolution**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:24

**Returns:** *number*

___

###  getOpacity

▸ **getOpacity**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:25

**Returns:** *number*

___

###  getProperties

▸ **getProperties**(): *object*

*Inherited from void*

Defined in node_modules/@types/ol/Object.d.ts:9

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getRenderBuffer

▸ **getRenderBuffer**(): *number | undefined*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:37

**Returns:** *number | undefined*

___

###  getRenderMode

▸ **getRenderMode**(): *VectorRenderType | string*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:38

**Returns:** *VectorRenderType | string*

___

###  getRenderOrder

▸ **getRenderOrder**(): *function*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:39

**Returns:** *function*

▸ (`p0`: Feature, `p1`: Feature): *number | null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`p0` | Feature |
`p1` | Feature |

___

###  getRevision

▸ **getRevision**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/Observable.d.ts:8

**Returns:** *number*

___

###  getSource

▸ **getSource**(): *VectorSource*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:40

**Returns:** *VectorSource*

___

###  getSourceState

▸ **getSourceState**(): *State_1*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:26

**Returns:** *State_1*

___

###  getStyle

▸ **getStyle**(): *StyleLike | null | undefined*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:41

**Returns:** *StyleLike | null | undefined*

___

###  getStyleFunction

▸ **getStyleFunction**(): *StyleFunction | undefined*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:42

**Returns:** *StyleFunction | undefined*

___

###  getType

▸ **getType**(): *LayerType*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:27

**Returns:** *LayerType*

___

###  getUpdateWhileAnimating

▸ **getUpdateWhileAnimating**(): *boolean*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:43

**Returns:** *boolean*

___

###  getUpdateWhileInteracting

▸ **getUpdateWhileInteracting**(): *boolean*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:44

**Returns:** *boolean*

___

###  getVisible

▸ **getVisible**(): *boolean*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:28

**Returns:** *boolean*

___

###  getZIndex

▸ **getZIndex**(): *number*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:29

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

Defined in node_modules/@types/ol/layer/Vector.d.ts:48

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

Defined in node_modules/@types/ol/layer/Vector.d.ts:51

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:extent", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:54

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:maxResolution", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:57

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:minResolution", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:60

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:opacity", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:63

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:source", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:66

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:visible", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:69

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "change:zIndex", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:72

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "postcompose", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:75

**Parameters:**

▪ **type**: *"postcompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "precompose", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:78

**Parameters:**

▪ **type**: *"precompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:81

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "render", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:84

**Parameters:**

▪ **type**: *"render"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **on**(`type`: "rendercomplete", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:87

**Parameters:**

▪ **type**: *"rendercomplete"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

___

###  once

▸ **once**(`type`: string | string[], `listener`: function): *EventsKey | EventsKey[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:49

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

Defined in node_modules/@types/ol/layer/Vector.d.ts:52

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:extent", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:55

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:maxResolution", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:58

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:minResolution", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:61

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:opacity", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:64

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:source", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:67

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:visible", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:70

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "change:zIndex", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:73

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "postcompose", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:76

**Parameters:**

▪ **type**: *"postcompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "precompose", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:79

**Parameters:**

▪ **type**: *"precompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "propertychange", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:82

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "render", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:85

**Parameters:**

▪ **type**: *"render"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *EventsKey*

▸ **once**(`type`: "rendercomplete", `listener`: function): *EventsKey*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:88

**Parameters:**

▪ **type**: *"rendercomplete"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

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

###  setDeclutter

▸ **setDeclutter**(`declutter`: boolean): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`declutter` | boolean |

**Returns:** *void*

___

###  setExtent

▸ **setExtent**(`extent`: Extent | undefined): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`extent` | Extent &#124; undefined |

**Returns:** *void*

___

###  setMap

▸ **setMap**(`map`: PluggableMap): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Layer.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`map` | PluggableMap |

**Returns:** *void*

___

###  setMaxResolution

▸ **setMaxResolution**(`maxResolution`: number): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`maxResolution` | number |

**Returns:** *void*

___

###  setMinResolution

▸ **setMinResolution**(`minResolution`: number): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`minResolution` | number |

**Returns:** *void*

___

###  setOpacity

▸ **setOpacity**(`opacity`: number): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`opacity` | number |

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

###  setRenderOrder

▸ **setRenderOrder**(`renderOrder`: OrderFunction | null | undefined): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`renderOrder` | OrderFunction &#124; null &#124; undefined |

**Returns:** *void*

___

###  setSource

▸ **setSource**(`source`: Source): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Layer.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`source` | Source |

**Returns:** *void*

___

###  setStyle

▸ **setStyle**(`style`: StyleLike | null | undefined): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`style` | StyleLike &#124; null &#124; undefined |

**Returns:** *void*

___

###  setVisible

▸ **setVisible**(`visible`: boolean): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`visible` | boolean |

**Returns:** *void*

___

###  setZIndex

▸ **setZIndex**(`zindex`: number): *void*

*Inherited from void*

Defined in node_modules/@types/ol/layer/Base.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`zindex` | number |

**Returns:** *void*

___

###  un

▸ **un**(`type`: string | string[], `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:50

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

Defined in node_modules/@types/ol/layer/Vector.d.ts:53

**Parameters:**

▪ **type**: *"change"*

▪ **listener**: *function*

▸ (`evt`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | Event |

**Returns:** *void*

▸ **un**(`type`: "change:extent", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:56

**Parameters:**

▪ **type**: *"change:extent"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:maxResolution", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:59

**Parameters:**

▪ **type**: *"change:maxResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:minResolution", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:62

**Parameters:**

▪ **type**: *"change:minResolution"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:opacity", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:65

**Parameters:**

▪ **type**: *"change:opacity"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:source", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:68

**Parameters:**

▪ **type**: *"change:source"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:visible", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:71

**Parameters:**

▪ **type**: *"change:visible"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "change:zIndex", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:74

**Parameters:**

▪ **type**: *"change:zIndex"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "postcompose", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:77

**Parameters:**

▪ **type**: *"postcompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *void*

▸ **un**(`type`: "precompose", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:80

**Parameters:**

▪ **type**: *"precompose"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *void*

▸ **un**(`type`: "propertychange", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:83

**Parameters:**

▪ **type**: *"propertychange"*

▪ **listener**: *function*

▸ (`evt`: ObjectEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | ObjectEvent |

**Returns:** *void*

▸ **un**(`type`: "render", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:86

**Parameters:**

▪ **type**: *"render"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

**Returns:** *void*

▸ **un**(`type`: "rendercomplete", `listener`: function): *void*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/ol/layer/Vector.d.ts:89

**Parameters:**

▪ **type**: *"rendercomplete"*

▪ **listener**: *function*

▸ (`evt`: RenderEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`evt` | RenderEvent |

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
