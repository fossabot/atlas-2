---
id: "clusterlayer"
title: "ClusterLayer"
sidebar_label: "ClusterLayer"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [ClusterLayer](clusterlayer.md)

## Hierarchy

* **ClusterLayer**

## Implements

* [ClusterLayer](clusterlayer.md)

## Implemented by

* [ClusterLayer](clusterlayer.md)

## Index

### Constructors

* [constructor](clusterlayer.md#constructor)

### Properties

* [animatedCluster](clusterlayer.md#animatedcluster)
* [clusterSource](clusterlayer.md#clustersource)
* [displayedLocations](clusterlayer.md#displayedlocations)
* [distance](clusterlayer.md#private-distance)

### Methods

* [addJobs](clusterlayer.md#addjobs)
* [addLocations](clusterlayer.md#addlocations)
* [clear](clusterlayer.md#clear)
* [drawLocations](clusterlayer.md#drawlocations)

## Constructors

###  constructor

\+ **new ClusterLayer**(`distance`: number): *[ClusterLayer](clusterlayer.md)*

*Defined in [src/lib/clusterLayer.ts:19](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`distance` | number | 40 |

**Returns:** *[ClusterLayer](clusterlayer.md)*

## Properties

###  animatedCluster

• **animatedCluster**: *BaseLayer*

*Defined in [src/lib/clusterLayer.ts:19](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L19)*

*Defined in [src/types/customInterfaces.ts:25](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L25)*

___

###  clusterSource

• **clusterSource**: *[OLCluster](olcluster.md)*

*Defined in [src/lib/clusterLayer.ts:18](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L18)*

*Defined in [src/types/customInterfaces.ts:24](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L24)*

___

###  displayedLocations

• **displayedLocations**: *[Location](../interfaces/location.md)[]*

*Defined in [src/types/customInterfaces.ts:22](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L22)*

___

### `Private` distance

• **distance**: *number*

*Defined in [src/lib/clusterLayer.ts:17](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L17)*

*Defined in [src/types/customInterfaces.ts:23](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L23)*

## Methods

###  addJobs

▸ **addJobs**(`jobs`: [Job](../interfaces/job.md)[]): *void*

*Defined in [src/lib/clusterLayer.ts:36](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](../interfaces/job.md)[] |

**Returns:** *void*

___

###  addLocations

▸ **addLocations**(`locations`: [Location](../interfaces/location.md)[], `draw?`: undefined | false | true): *void*

*Defined in [src/types/customInterfaces.ts:20](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`locations` | [Location](../interfaces/location.md)[] |
`draw?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [src/lib/clusterLayer.ts:50](https://github.com/chronark/atlas/blob/4c0c2ce/src/lib/clusterLayer.ts#L50)*

**Returns:** *void*

___

###  drawLocations

▸ **drawLocations**(): *void*

*Defined in [src/types/customInterfaces.ts:21](https://github.com/chronark/atlas/blob/4c0c2ce/src/types/customInterfaces.ts#L21)*

**Returns:** *void*
