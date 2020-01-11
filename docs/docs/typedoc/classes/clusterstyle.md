---
id: "clusterstyle"
title: "ClusterStyle"
sidebar_label: "ClusterStyle"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [ClusterStyle](clusterstyle.md)

## Hierarchy

* **ClusterStyle**

## Index

### Constructors

* [constructor](clusterstyle.md#constructor)

### Properties

* [colorGradient](clusterstyle.md#private-colorgradient)

### Methods

* [colorByScore](clusterstyle.md#private-colorbyscore)
* [getScore](clusterstyle.md#private-getscore)
* [maxScore](clusterstyle.md#private-maxscore)
* [polygonStyle](clusterstyle.md#private-polygonstyle)
* [selectedStyle](clusterstyle.md#private-selectedstyle)
* [style](clusterstyle.md#style)

## Constructors

###  constructor

\+ **new ClusterStyle**(`colorGradient`: string[]): *[ClusterStyle](clusterstyle.md)*

*Defined in [src/styles/cluster.ts:13](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`colorGradient` | string[] |  [
      "rgb(112,148,194)",
      "rgb(103,142,191)",
      "rgb(93,135,188)",
      "rgb(84,129,186)",
      "rgb(47,103,174)",
      "rgb(75,122,183)",
      "rgb(65,116,180)",
      "rgb(56,109,177)",
      "rgb(37,96,171)",
      "rgb(28,90,168)",
      "rgb(19,83,166)",
      "rgb(9,77,163)",
      "rgb(0,70,160)",
    ] |

**Returns:** *[ClusterStyle](clusterstyle.md)*

## Properties

### `Private` colorGradient

• **colorGradient**: *string[]*

*Defined in [src/styles/cluster.ts:13](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L13)*

## Methods

### `Private` colorByScore

▸ **colorByScore**(`score`: number, `minScore`: number): *string*

*Defined in [src/styles/cluster.ts:35](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`score` | number | - |
`minScore` | number | 0.5 |

**Returns:** *string*

___

### `Private` getScore

▸ **getScore**(`feature`: [OLFeature](olfeature.md)): *number*

*Defined in [src/styles/cluster.ts:103](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [OLFeature](olfeature.md) |

**Returns:** *number*

___

### `Private` maxScore

▸ **maxScore**(`features`: [OLFeature](olfeature.md)[]): *number*

*Defined in [src/styles/cluster.ts:52](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`features` | [OLFeature](olfeature.md)[] |

**Returns:** *number*

___

### `Private` polygonStyle

▸ **polygonStyle**(`score`: number, `scale`: number, `size`: number): *[OLStyle](olstyle.md)*

*Defined in [src/styles/cluster.ts:62](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`score` | number |
`scale` | number |
`size` | number |

**Returns:** *[OLStyle](olstyle.md)*

___

### `Private` selectedStyle

▸ **selectedStyle**(`cluster`: [OLFeature](olfeature.md)): *[OLStyle](olstyle.md)[]*

*Defined in [src/styles/cluster.ts:114](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`cluster` | [OLFeature](olfeature.md) |

**Returns:** *[OLStyle](olstyle.md)[]*

___

###  style

▸ **style**(`cluster`: [OLFeature](olfeature.md)): *[OLStyle](olstyle.md)[]*

*Defined in [src/styles/cluster.ts:89](https://github.com/chronark/atlas/blob/0dc33cd/src/styles/cluster.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`cluster` | [OLFeature](olfeature.md) |

**Returns:** *[OLStyle](olstyle.md)[]*
