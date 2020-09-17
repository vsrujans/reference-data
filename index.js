import React from "react";
function GetStateData(includeAdditionalStates) {
  var additionalStateData = [];
  var stateData=[];
 var labelMap = {};
  var valueMap = {};
  if (includeAdditionalStates === "true") {
    stateData  =  require('./local/en/stateList-en-additionalState.json')
    stateData.forEach(states => {
      labelMap[states.label.toLowerCase()] = states.value
      valueMap[states.value.toLowerCase()] = states.label
    })
  }
  else {
    stateData = require('./local/en/stateList-en.json')
    stateData.forEach(states => {
      labelMap[states.label.toLowerCase()] = states.value
      valueMap[states.value.toLowerCase()] = states.label
    })
  }
  return stateData
}
function GetCountryData() {
  var countryData = [];
  var labelMap = {};
  var valueMap = {};
 
    countryData = require('./local/en/countryList-en.json')
    countryData.forEach(country => {
      labelMap[country.label.toLowerCase()] = country.value
      valueMap[country.value.toLowerCase()] = country.label
    })
 
  return countryData
}

function GetCountyData() {
  var countyData = [];
  var labelMap = {};
  var valueMap = {};
   countyData = require('./local/en/countyList-en.json')
    countyData.forEach(county => {
      labelMap[county.label.toLowerCase()] = county.value
      valueMap[county.value.toLowerCase()] = county.label
    })

  return countyData
}

function GetRelationshipData(lang,type) {
  var RelationshipData = [];
  var labelMap = {};
  var valueMap = {};
  if (lang === "es") {
    if(type ==="Birth"){
    RelationshipData = require('./local/es/relationshipList-Birth-es.json')
    }else{
      RelationshipData = require('./local/es/relationshipList-Death-es.json')
    }
    RelationshipData.forEach(relationship => {
      labelMap[relationship.label.toLowerCase()] = relationship.value
      valueMap[relationship.value.toLowerCase()] = relationship.label
    })
  }
  else { 
    if(type ==="Birth"){
    RelationshipData = require('./local/en/relationshipList-Birth-en.json')
    }else{
      RelationshipData = require('./local/en/relationshipList-Death-en.json')
    }
    RelationshipData.forEach(relationship => {
      labelMap[relationship.label.toLowerCase()] = relationship.value
      valueMap[relationship.value.toLowerCase()] = relationship.label
    })
  }
  return RelationshipData
}

export  {
  GetCountryData,
  GetCountyData,
  GetRelationshipData,
  GetStateData
}
