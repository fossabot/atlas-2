---
id: "dispatchprops"
title: "DispatchProps"
sidebar_label: "DispatchProps"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [DispatchProps](dispatchprops.md)

## Hierarchy

* **DispatchProps**

## Index

### Properties

* [addNotification](dispatchprops.md#addnotification)
* [remove](dispatchprops.md#remove)
* [search](dispatchprops.md#search)
* [setShownJobs](dispatchprops.md#setshownjobs)

## Properties

###  addNotification

• **addNotification**: *function*

*Defined in [src/components/App.tsx:21](https://github.com/chronark/atlas/blob/128c355/src/components/App.tsx#L21)*

#### Type declaration:

▸ (`level`: string, `content`: string): *[NotificationActionTypes](../globals.md#notificationactiontypes)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |
`content` | string |

___

###  remove

• **remove**: *function*

*Defined in [src/components/Notification.tsx:8](https://github.com/chronark/atlas/blob/128c355/src/components/Notification.tsx#L8)*

#### Type declaration:

▸ (`id`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

___

###  search

• **search**: *function*

*Defined in [src/components/SearchBar.tsx:7](https://github.com/chronark/atlas/blob/128c355/src/components/SearchBar.tsx#L7)*

#### Type declaration:

▸ (`search`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`search` | string |

___

###  setShownJobs

• **setShownJobs**: *function*

*Defined in [src/components/Map.tsx:11](https://github.com/chronark/atlas/blob/128c355/src/components/Map.tsx#L11)*

#### Type declaration:

▸ (`jobs`: [Job](job.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`jobs` | [Job](job.md)[] |
