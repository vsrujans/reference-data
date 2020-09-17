# reference-data


This package has {GetCountyData,GetStateData,GetCountryData,GetRelationshipData} operations and takes parameters to retrun the List based on Language


## Install

``` cli
npm install reference-data --save
```
or
``` cli
npm install {bitbucket location} --save
```

## Example

```js
import React, { Component } from 'react';
import Select from 'react-select'
import {GetCountyData,GetStateData,GetCountryData,GetRelationshipData} from "reference-data";

function BirthVerificationPage() {
  
  const [stateList, setStateList] = useState([]);

var stateData = GetStateData("false");

setStateList(stateData);
  render() {
    return (
              <GetStartedBirthVerification
                stateList={stateList}
              />
    )
  }
}
```


## Methods

All input or parameters are case-sensitive.

###  GetCountyData();

Retruns Texas county List
Example: 
```js
var countyDataList = GetCountyData();
```

### GetStateData(flag); 

Returns US State List
This method takes parameter true/false to include additional states

Example:

Additional States List
```js
var additonalStateData = GetStateData("true");
```
States List
```js
var stateData = GetStateData("false");
```

### countryData(); 

Returns Texas country List

Example:

Additional States List
```js
var countryData = countryData();
```

### GetRelationshipData(lang,type)

Returns Relationship List
This method takes parameter lang and type 

Example:

```js
var enBirthReleationship= GetRelationshipData("en","Birth");
var esBirthReleationship= GetRelationshipData("es","Birth");
var enDeathReleationship= GetRelationshipData("en","Death");
var esDeathReleationship= GetRelationshipData("es","Death");
```
