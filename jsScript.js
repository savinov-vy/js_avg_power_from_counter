"use strict";

// document.getElementById('inputfile')
//     .addEventListener('change', function() {
      
//     var fr=new FileReader();
//     fr.onload=function() {
//         document.getElementById('output')
//                 .textContent =  fr.result; //getAvgPower(fr.result);
//     };
      
//     fr.readAsText(this.files[0], 'WINDOWS-1251');

// });

getAvgPower('                   Счетчик электрической энергии СЭТ-4ТМ.03М.01\n'+


'Время компьютера                        27.08.22 15:33:27 \n'+
'Серийный номер счетчика                 0806177808\n'+
'Дата изготовления счетчика              10 06 17 \n'+
'Профиль №1\n'+
'Дата		Время		A+, кВт		A-, кВт		R+, квар	R-, квар	Статус\n'+
'12.08.22	00:00-01:00	000,0000	000,5491	000,0000	000,1131	\n'+
'12.08.22	01:00-02:00	000,0000	000,5487	000,0000	000,1132	\n'+
'12.08.22	02:00-03:00	000,0000	000,5483	000,0000	000,1129\n'+
'Профиль №3\n'+
'Дата		Время		A+, кВт		A-, кВт		R+, квар	R-, квар	Статус\n'+
'26.08.22	00:00-01:00	000,0000	000,2160	000,0000	000,0615	\n'+
'26.08.22	01:00-02:00	000,0000	000,2164	000,0000	000,0617	\n'+
'26.08.22	02:00-03:00	000,0000	000,2158	000,0000	000,0619	\n'+
'26.08.22	03:00-04:00	000,0000	000,2133	000,0000	000,0603	\n'+
'26.08.22	04:00-05:00	000,0000	000,2133	000,0000	000,0608	\n'+
'26.08.22	05:00-06:00	000,0000	000,2159	000,0000	000,0615	\n'+
'26.08.22	06:00-07:00	000,0000	000,2153	000,0000	000,0616	\n'+
'26.08.22	07:00-08:00	000,0000	000,2158	000,0000	000,0614	\n'+
'26.08.22	08:00-09:00	000,0000	000,1399	000,0000	000,0772	\n'+
'26.08.22	09:00-10:00	000,0000	000,1245	000,0000	000,0805	\n'+
'26.08.22	10:00-11:00	000,0000	000,1265	000,0000	000,0814	\n'+
'26.08.22	11:00-12:00	000,0000	000,1261	000,0000	000,0824	\n'+
'26.08.22	12:00-13:00	000,0000	000,1949	000,0000	000,0680	\n'+
'26.08.22	13:00-14:00	000,0000	000,2222	000,0000	000,0641	\n'+
'26.08.22	14:00-15:00	000,0000	000,2224	000,0000	000,0645	\n'+
'26.08.22	15:00-16:00	000,0000	000,2206	000,0000	000,0643	\n'+
'26.08.22	16:00-17:00	000,0000	000,2203	000,0000	000,0639	\n'+
'26.08.22	17:00-18:00	000,0000	000,1830	000,0000	000,0717	\n'+
'26.08.22	18:00-19:00	000,0000	000,2214	000,0000	000,0645	\n'+
'26.08.22	19:00-20:00	000,0000	000,2207	000,0000	000,0643	\n'+
'26.08.22	20:00-21:00	000,0000	000,2199	000,0000	000,0633	\n'+
'26.08.22	21:00-22:00	000,0000	000,2206	000,0000	000,0635	\n'+
'26.08.22	22:00-23:00	000,0000	000,2223	000,0000	000,0643	\n'+
'26.08.22	23:00-24:00	000,0000	000,2188	000,0000	000,0630	\n'+
'============================================================\n'+
'27.08.22 11:31:25 \n');


// function getSerialNumberCounter(str) {
//     const neededStr = str.substring(str.lastIndexOf('Серийный номер счетчика'));

//     let cutStrRegEx = /Серийный номер счетчика\s*(\d*)/y;
//     let serialNumRegEx = /\d+/;

//     let match = serialNumRegEx.exec(cutStrRegEx.exec(neededStr));
//     return match[0];
// }

function getSerialNumberCounter(str) {
    let regex = /(?<=Серийный номер счетчика\s+)\d+/;
    let match = str.match(regex);
    console.log(match[0]);
}

function getAvgPower(str) {
    let threeProfile = getThreeProfilMeasurement(str);
    getAverageActivePower(threeProfile);
    getAverageReactivePower(threeProfile);
    return ;
}

function getThreeProfilMeasurement(str) {
    let threeProfile = str.substring(str.lastIndexOf('Профиль №3'));
    let measurementRegex = /((\t+|\s+)\d\d\d.\d\d\d\d){4}/g;
    let fixNumbersString = threeProfile.replace(/,/g,".");

    return fixNumbersString.match(measurementRegex);
}

function getAverageActivePower(threeProfileMeasurement) {
    let measurementActPositivePowRegex = /(\d\d\d.\d\d\d\d)\t\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d/;
    let measurementActNegativePowRegex = /\d\d\d.\d\d\d\d\t(\d\d\d.\d\d\d\d)\t\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d/;

    let sumActivePow = threeProfileMeasurement.map(period => {
        let actPositivePowAsArr = period.match(measurementActPositivePowRegex);
        let actNegativePowAsArr = period.match(measurementActNegativePowRegex);
        let totalAtPeriod = +actPositivePowAsArr[1] - (+actNegativePowAsArr[1]);
        return totalAtPeriod;
                            })
                            .reduce((sum, current) => sum + current);

    let averageAverageActivePower = sumActivePow/threeProfileMeasurement.length;
    return averageAverageActivePower;
}

function getAverageReactivePower(threeProfileMeasurement){
    let measurementReactPositivePowRegex = /\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d\t(\d\d\d.\d\d\d\d)\t\d\d\d.\d\d\d\d/;
    let measurementReactNegativePowRegex = /\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d\t\d\d\d.\d\d\d\d\t(\d\d\d.\d\d\d\d)/;

    let sumReactivePow = threeProfileMeasurement.map(period => {
        let reactPositivePowAsArr = period.match(measurementReactPositivePowRegex);
        let reactNegativePowAsArr = period.match(measurementReactNegativePowRegex);
        let totalAtPeriod = +reactPositivePowAsArr[1] - (+reactNegativePowAsArr[1]);
        return totalAtPeriod;
                            })
                            .reduce((sum, current) => sum + current);

    let averageAverageActivePower = sumReactivePow/threeProfileMeasurement.length;
    return averageAverageActivePower;
}