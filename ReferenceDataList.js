export  function GetstateData(lang) {
    var countryData= [];
       if (lang === "es") {
          stateData = require('./local/es/stateList-es.json')
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
 export  function GetCountriesData(lang) {
        var countryData= [];
           if (lang === "es") {
              countryData = require('./local/es/countryList-es.json')
             countryData.forEach(country => {
               labelMap[country.label.toLowerCase()] = country.value
               valueMap[country.value.toLowerCase()] = country.label
             })    
           }
           else {
             countryData = require('./local/en/countryList-en.json')
             countryData.forEach(country => {
               labelMap[country.label.toLowerCase()] = country.value
               valueMap[country.value.toLowerCase()] = country.label
             })   
           }
           return countryData
         }

         export  function GetCountyData(lang) {
            var countyData= [];
               if (lang === "es") {
                 countyData = require('/local/es/countyList-es.json')
                 countyData.forEach(county => {
                   labelMap[county.label.toLowerCase()] = county.value
                   valueMap[county.value.toLowerCase()] = county.label
                 })    
               }
               else {
                 countyData = require('./local/en/countyList-en.json')
                 countyData.forEach(county => {
                   labelMap[county.label.toLowerCase()] = county.value
                   valueMap[county.value.toLowerCase()] = county.label
                 })   
               }
               return countyData
             }

             export  function GetRelationshipData(lang) {
                var RelationshipData= [];
                   if (lang === "es") {
                     RelationshipData = require('./local/es/relationshipList-es.json')
                     RelationshipData.forEach(relationship => {
                       labelMap[relationship.label.toLowerCase()] = relationship.value
                       valueMap[relationship.value.toLowerCase()] = relationship.label
                     })    
                   }
                   else {
                     RelationshipData = require('./local/en/relationshipList-en.json')
                     RelationshipData.forEach(relationship => {
                       labelMap[relationship.label.toLowerCase()] = relationship.value
                       valueMap[relationship.value.toLowerCase()] = relationship.label
                     })   
                   }
                   return RelationshipData
                 }


