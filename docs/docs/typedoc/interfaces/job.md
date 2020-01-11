---
id: "job"
title: "Job"
sidebar_label: "Job"
---

[Atlas documentation](../index.md) › [Globals](../globals.md) › [Job](job.md)

## Hierarchy

* **Job**

## Index

### Properties

* [corp](job.md#corp)
* [date](job.md#date)
* [id](job.md#id)
* [locations](job.md#locations)
* [logo](job.md#logo)
* [score](job.md#score)
* [title](job.md#title)
* [type](job.md#type)
* [url](job.md#url)

## Properties

###  corp

• **corp**: *string*

*Defined in [src/types/customTypes.ts:48](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L48)*

Name of the corporation offering the job.

___

###  date

• **date**: *string*

*Defined in [src/types/customTypes.ts:56](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L56)*

The entrydate for the job.

___

###  id

• **id**: *number*

*Defined in [src/types/customTypes.ts:60](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L60)*

Internal id for each job.

___

###  locations

• **locations**: *[Location](location.md)[]*

*Defined in [src/types/customTypes.ts:52](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L52)*

An array of locations where the job is offered.

___

###  logo

• **logo**: *string*

*Defined in [src/types/customTypes.ts:64](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L64)*

URL to the job's or company's logo.

___

###  score

• **score**: *number*

*Defined in [src/types/customTypes.ts:69](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L69)*

Calculated matching score for the user and job.
Must be between 0.0 and 1.0 included.

___

###  title

• **title**: *string*

*Defined in [src/types/customTypes.ts:73](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L73)*

Job title description.

___

###  type

• **type**: *string*

*Defined in [src/types/customTypes.ts:77](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L77)*

Job classification.

___

###  url

• **url**: *string*

*Defined in [src/types/customTypes.ts:81](https://github.com/chronark/atlas/blob/25d5919/src/types/customTypes.ts#L81)*

URL for more information about this job or company's page.
