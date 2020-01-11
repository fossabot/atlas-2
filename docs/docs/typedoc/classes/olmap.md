---
id: "olmap"
title: "OLMap"
sidebar_label: "OLMap"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [OLMap](olmap.md)

## Hierarchy

* **OLMap**

## Index

### Methods

* [addControl](olmap.md#private-addcontrol)
* [addInteraction](olmap.md#private-addinteraction)
* [addLayer](olmap.md#private-addlayer)
* [getLayers](olmap.md#private-getlayers)
* [getSize](olmap.md#private-getsize)
* [getView](olmap.md#private-getview)
* [removeLayer](olmap.md#private-removelayer)

## Methods

### `Private` addControl

▸ **addControl**(`control`: [OLControl](olcontrol.md) | [OLNotification](olnotification.md)): *void*

*Defined in [src/types/olTypes.ts:13](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`control` | [OLControl](olcontrol.md) &#124; [OLNotification](olnotification.md) |

**Returns:** *void*

___

### `Private` addInteraction

▸ **addInteraction**(`interaction`: any): *void*

*Defined in [src/types/olTypes.ts:14](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`interaction` | any |

**Returns:** *void*

___

### `Private` addLayer

▸ **addLayer**(`layer`: BaseLayer): *void*

*Defined in [src/types/olTypes.ts:16](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | BaseLayer |

**Returns:** *void*

___

### `Private` getLayers

▸ **getLayers**(): *object*

*Defined in [src/types/olTypes.ts:18](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L18)*

**Returns:** *object*

* **array_**: *BaseLayer[]*

___

### `Private` getSize

▸ **getSize**(): *number[]*

*Defined in [src/types/olTypes.ts:19](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L19)*

**Returns:** *number[]*

___

### `Private` getView

▸ **getView**(): *any*

*Defined in [src/types/olTypes.ts:15](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L15)*

**Returns:** *any*

___

### `Private` removeLayer

▸ **removeLayer**(`layer`: BaseLayer): *void*

*Defined in [src/types/olTypes.ts:17](https://github.com/chronark/atlas/blob/128c355/src/types/olTypes.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | BaseLayer |

**Returns:** *void*
