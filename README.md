# german-holiday for NodeJS

This Module accepts a JS date object and returns state-specific either the name of a holiday or ```false```. It could be helpful in calendar- or schedulingapplications.

## Installation
Installation of german-holiday is as easy as every other NPM-package.

```sh
$ npm install german-holiday
```
##Usage
Call the ```holidayCheck``` function and pass two arguments. 
* First argument: A JavaScript Date Object.
* Second argument: The short form of a german state as string. 

Possible short forms:

|short | state
|--- | ---
|BW | Baden-Württemberg
|BY | Bayern
|BE | Berlin
|BB | Brandenburg
|HB | Bremen
|HH | Hamburg
|HE | Hessen
|MV | Mecklenburg-Vorpommern
|NI | Niedersachsen
|NW | Nordrhein-Westfalen
|RP | Rheinland-Pfalz
|SL | Saarland
|SN | Sachsen
|ST | Sachsen-Anhalt
|SH | Schleswig-Holstein
|TH | Thüringen

##Examples
Input:
```JavaScript
var hcheck = require("german-holiday")
console.log(hcheck.holidayCheck(new Date(2015, 11, 25), "NW"))
```
Output:
```JavaScript
'1. Weihnachtstag'
```
___
Input:
```JavaScript
var hcheck = require("german-holiday")
console.log(hcheck.holidayCheck(new Date(2015, 11, 27), "BB"))
```
Output:
```JavaScript
false
```