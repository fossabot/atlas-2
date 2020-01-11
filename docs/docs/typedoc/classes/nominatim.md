---
id: "nominatim"
title: "Nominatim"
sidebar_label: "Nominatim"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [Nominatim](nominatim.md)

## Hierarchy

* **Nominatim**

## Implements

* [Geocoder](../interfaces/geocoder.md)

## Index

### Constructors

* [constructor](nominatim.md#constructor)

### Properties

* [apiURLBase](nominatim.md#private-apiurlbase)
* [apiURLQueryParameters](nominatim.md#private-apiurlqueryparameters)

### Methods

* [buildURL](nominatim.md#private-buildurl)
* [cleanJson](nominatim.md#private-cleanjson)
* [flattenParameters](nominatim.md#private-flattenparameters)
* [forward](nominatim.md#forward)
* [reverse](nominatim.md#reverse)

## Constructors

###  constructor

\+ **new Nominatim**(): *[Nominatim](nominatim.md)*

*Defined in [src/lib/nominatim.ts:17](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L17)*

**Returns:** *[Nominatim](nominatim.md)*

## Properties

### `Private` apiURLBase

• **apiURLBase**: *string*

*Defined in [src/lib/nominatim.ts:16](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L16)*

___

### `Private` apiURLQueryParameters

• **apiURLQueryParameters**: *string[]*

*Defined in [src/lib/nominatim.ts:17](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L17)*

## Methods

### `Private` buildURL

▸ **buildURL**(`address`: string): *string*

*Defined in [src/lib/nominatim.ts:24](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

### `Private` cleanJson

▸ **cleanJson**(`jsonData`: Record‹string, any›): *[ForwardResult](../interfaces/forwardresult.md)*

*Defined in [src/lib/nominatim.ts:29](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`jsonData` | Record‹string, any› |

**Returns:** *[ForwardResult](../interfaces/forwardresult.md)*

___

### `Private` flattenParameters

▸ **flattenParameters**(`parameters`: string[]): *string*

*Defined in [src/lib/nominatim.ts:41](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameters` | string[] |  this.apiURLQueryParameters |

**Returns:** *string*

___

###  forward

▸ **forward**(`address`: string): *Promise‹object›*

*Implementation of [Geocoder](../interfaces/geocoder.md)*

*Defined in [src/lib/nominatim.ts:63](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹object›*

___

###  reverse

▸ **reverse**(`lon`: number, `lat`: number): *Promise‹GeoJSON | undefined›*

*Implementation of [Geocoder](../interfaces/geocoder.md)*

*Defined in [src/lib/nominatim.ts:45](https://github.com/chronark/atlas/blob/157126a/src/lib/nominatim.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`lon` | number |
`lat` | number |

**Returns:** *Promise‹GeoJSON | undefined›*
