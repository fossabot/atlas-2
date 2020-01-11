---
id: "charon"
title: "Charon"
sidebar_label: "Charon"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [Charon](charon.md)

## Hierarchy

* **Charon**

## Index

### Constructors

* [constructor](charon.md#constructor)

### Properties

* [serverURL](charon.md#private-serverurl)

### Methods

* [forwardGeocoding](charon.md#forwardgeocoding)
* [getStyle](charon.md#getstyle)
* [getTileURL](charon.md#gettileurl)

## Constructors

###  constructor

\+ **new Charon**(): *[Charon](charon.md)*

*Defined in [src/lib/charon.ts:6](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/charon.ts#L6)*

**Returns:** *[Charon](charon.md)*

## Properties

### `Private` serverURL

• **serverURL**: *string*

*Defined in [src/lib/charon.ts:6](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/charon.ts#L6)*

## Methods

###  forwardGeocoding

▸ **forwardGeocoding**(`search`: string, `types`: string[]): *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*

*Defined in [src/lib/charon.ts:19](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/charon.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`search` | string |
`types` | string[] |

**Returns:** *Promise‹[GeocodingResponseObject](../interfaces/geocodingresponseobject.md) | undefined›*

___

###  getStyle

▸ **getStyle**(): *Promise‹Record‹string, any››*

*Defined in [src/lib/charon.ts:15](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/charon.ts#L15)*

**Returns:** *Promise‹Record‹string, any››*

___

###  getTileURL

▸ **getTileURL**(): *string*

*Defined in [src/lib/charon.ts:11](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/charon.ts#L11)*

**Returns:** *string*
