"use strict";

document.getElementById('inputfile')
    .addEventListener('change', function() {
      
    var fr=new FileReader();
    fr.onload=function() {
        document.getElementById('output')
                .textContent = getReport(fr.result);
    };
      
    fr.readAsText(this.files[0], 'WINDOWS-1251');

});


class Counter {
    constructor(location, serialNumber, coefficienTtTn){
        this.location = location;
        this.serialNumber = serialNumber;
        this.coefficienTtTn = coefficienTtTn;
    }

    getDescription() {
        return 'Серийный номер: '+ this.serialNumber + 
                '\nМесто установки: ' + this.location + 
                '\nКтт х Ктн = ' + this.coefficienTtTn;
    }
}

const counterArr = [
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.1', '0811163928', 18000),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.2', '0811162115', 18000),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.3', '0811162491', 12000),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.6', '0812160863', 2400),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.10', '0811163365', 18000),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.11', '0812161368', 3600),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.12', '0812161389', 12000),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.15', '0811163509', 2400),
    new Counter('ПС 35 кВ УПН-1 РУ-6кВ яч.19', '0811163960', 18000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.1', '0811164315', 18000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.2', '0811164302', 18000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.3', '0811164322', 12000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.5', '0811164210', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.6', '0811163496', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.9', '0811164359', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.10', '0811164090', 18000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.11', '0811164166', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.12', '0811164083', 7200),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.13', '0811162016', 7200),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.14', '0811164332', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.15', '0811164035', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.16', '0811164219', 12000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.18', '0811164173', 3600),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.19', '0811164220', 18000),
    new Counter('ПС 35 кВ УПН-2 РУ-6кВ яч.20', '0811164021', 3600),
    new Counter('РУ-10 6кВ ЭСН-1 яч.3', '0810151071', 2400),
    new Counter('РУ-10 6кВ ЭСН-1 яч.13', '0810151021', 12000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.18', '0810150983', 12000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.19', '0809151903', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.20', '0810150411', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.21', '0810151061', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.22', '0809151922', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.23', '0809152012', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.24', '0810150383', 18000),
    new Counter('РУ-10 6кВ ЭСН-1 яч.29', '0809151978', 2400),
    new Counter('РУ-10 6кВ ЭСН-1 яч.32', '0810150811', 2400),
    new Counter('РУ-9 6кВ УПТГ-1 яч.3', '0805160473', 20),
    new Counter('РУ-9 6кВ УПТГ-1 яч.4', '0805160291', 20),
    new Counter('РУ-9 6кВ УПТГ-1 яч.5', '0805160273', 7200),
    new Counter('РУ-9 6кВ УПТГ-1 яч.6', '0805160545', 7200),
    new Counter('РУ-9 6кВ УПТГ-1 яч.10', '0811200040', 4800),
    new Counter('РУ-9 6кВ УПТГ-1 яч.11', '0805160406', 3600),
    new Counter('РУ-9 6кВ УПТГ-1 яч.12', '0805160383', 3600),
    new Counter('РУ-9 6кВ УПТГ-1 яч.13', '0805160447', 3600),
    new Counter('РУ-9 6кВ УПТГ-1 яч.14', '0805160468', 3600),
    new Counter('РУ-11 6кВ Энергоцех яч.1', '0803162427', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.2', '0803162275', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.3', '0805160704', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.4', '0805160249', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.9', '0803163064', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.10', '0803162063', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.13', '0803162425', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.14', '0803161707', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.15', '0803162443', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.16', '0803162535', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.17', '0803162594', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.18', '0805160399', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.20', '0803162629', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.21', '0803162398', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.22', '0803162120', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.23', '0803162441', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.24', '0803161241', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.25', '0805160440', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.26', '0803162240', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.29', '0803162303', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.30', '0803162591', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.31', '0811200220', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.32', '0803161076', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.33', '0803161171', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.34', '0803160921', 1),
    new Counter('РУ-11 6кВ Энергоцех яч.35', '0803162070', 1),
    new Counter('РУ-12 6кВ УПН-1 яч.1', '0802150201', 30),
    new Counter('РУ-12 6кВ УПН-1 яч.2', '0812143443', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.3', '0812140566', 18000),
    new Counter('РУ-12 6кВ УПН-1 яч.4', '0802152545', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.7', '0802152370', 18000),
    new Counter('РУ-12 6кВ УПН-1 яч.8', '0802153015', 18000),
    new Counter('РУ-12 6кВ УПН-1 яч.11', '0812142197', 4800),
    new Counter('РУ-12 6кВ УПН-1 яч.12', '0812143187', 4800),
    new Counter('РУ-12 6кВ УПН-1 яч.13', '0802151478', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.14', '0802152294', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.15', '0812142652', 9600),
    new Counter('РУ-12 6кВ УПН-1 яч.16', '0812143134', 9600),
    new Counter('РУ-12 6кВ УПН-1 яч.17', '0812136388', 4800),
    new Counter('РУ-12 6кВ УПН-1 яч.18', '0812142587', 4800),
    new Counter('РУ-12 6кВ УПН-1 яч.28', '0802152233', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.29', '0812142566', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.30', '0802152804', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.31', '0812142632', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.33', '0812140482', 3600),
    new Counter('РУ-12 6кВ УПН-1 яч.34', '0802153058', 18000),
    new Counter('РУ-12 6кВ УПН-1 яч.36', '0802150551', 30),
    new Counter('РУ-14 6кВ ЮР-5 яч.1', '0812138625', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.3', '0812138487', 1800),
    new Counter('РУ-14 6кВ ЮР-5 яч.4', '0812138515', 3600),
    new Counter('РУ-14 6кВ ЮР-5 яч.6', '0812138579', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.9', '0812138620', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.10', '0812138572', 1800),
    new Counter('РУ-14 6кВ ЮР-5 яч.12', '0812138467', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.15', '0812138628', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.17', '0812138635', 600),
    new Counter('РУ-14 6кВ ЮР-5 яч.18', '0812138583', 3600),
    new Counter('РУ-14 6кВ ЮР-5 яч.19', '0810135092', 4800),
    new Counter('РУ-14 6кВ ЮР-5 яч.20', '0812137407', 4800),
    new Counter('РУ-14 6кВ ЮР-5 яч.22', '0812137409', 1800),
    new Counter('РУ-14 6кВ ЮР-5 яч.25', '0812136550', 4800),
    new Counter('РУ-14 6кВ ЮР-5 яч.26', '0810135050', 4800),
    new Counter('РУ-15 6кВ ЭБПО яч.2', '0812143172', 900),
    new Counter('РУ-15 6кВ ЭБПО яч.8', '0812143514', 3600),
    new Counter('РУ-15 6кВ ЭБПО яч.9', '0812143617', 900),
    new Counter('РУ-15 6кВ ЭБПО яч.10', '0812143599', 600),
    new Counter('РУ-15 6кВ ЭБПО яч.11', '0812143610', 1800),
    new Counter('РУ-15 6кВ ЭБПО яч.12', '0812143561', 1800),
    new Counter('РУ-15 6кВ ЭБПО яч.13', '0812141761', 900),
    new Counter('РУ-15 6кВ ЭБПО яч.14', '0812143624', 1800),
    new Counter('РУ-15 6кВ ЭБПО яч.15', '0812142087', 1800),
    new Counter('РУ-15 6кВ ЭБПО яч.16', '0812143603', 600),
    new Counter('РУ-15 6кВ ЭБПО яч.17', '0812142378', 900),
    new Counter('РУ-15 6кВ ЭБПО яч.18', '0812143536', 3600),
    new Counter('РУ-17 6кВ РРП яч.1', '0812144109', 10),
    new Counter('РУ-17 6кВ РРП яч.2', '0812143559', 10),
    new Counter('РУ-17 6кВ РРП яч.3', '0810141213', 4800),
    new Counter('РУ-17 6кВ РРП яч.4', '0804111854', 4800),
    new Counter('РУ-17 6кВ РРП яч.7', '0810144713', 3600),
    new Counter('РУ-17 6кВ РРП яч.11', '0810126487', 3600),
    new Counter('РУ-17 6кВ РРП яч.12', '0810142894', 3600),
    new Counter('РУ-17 6кВ РРП яч.17', '0810144615', 3600),
    new Counter('РУ-17 6кВ РРП яч.18', '0810144678', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.3', '0806177820', 12000),
    new Counter('РУ-22 6кВ УПН-2 яч.4', '0806177879', 12000),
    new Counter('РУ-22 6кВ УПН-2 яч.5', '0806175675', 30),
    new Counter('РУ-22 6кВ УПН-2 яч.6', '0806179062', 30),
    new Counter('РУ-22 6кВ УПН-2 яч.7', '0806177808', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.8', '0806177637', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.11', '0806176957', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.12', '0806177329', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.13', '0806177685', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.14', '0806177706', 3600),
    new Counter('РУ-22 6кВ УПН-2 яч.17', '0806177485', 1200),
    new Counter('РУ-22 6кВ УПН-2 яч.18', '0806177727', 1200),
    new Counter('РУ-27 6кВ РП нефти яч.3', '0806175037', 1),
    new Counter('РУ-27 6кВ РП нефти яч.4', '0806175030', 1),
    new Counter('РУ-27 6кВ РП нефти яч.7', '0806175106', 1),
    new Counter('РУ-27 6кВ РП нефти яч.8', '0806175291', 1),
    new Counter('РУ-27 6кВ РП нефти яч.9', '0806170408', 1),
    new Counter('РУ-27 6кВ РП нефти яч.10', '0806170674', 1),
    new Counter('РУ-27 6кВ РП нефти яч.11', '0806175406', 1),
    new Counter('РУ-27 6кВ РП нефти яч.12', '0806175023', 1),
    new Counter('РУ-27 6кВ РП нефти яч.13', '0806175070', 1),
    new Counter('РУ-27 6кВ РП нефти яч.14', '0806175127', 1),
    new Counter('РУ-27 6кВ РП нефти яч.15', '0806175349', 1),
    new Counter('РУ-27 6кВ РП нефти яч.16', '0806175276', 1),
    new Counter('РУ-27 6кВ РП нефти яч.17', '0806175454', 1),
    new Counter('РУ-27 6кВ РП нефти яч.18', '0806175293', 1)
    ];

function getReport(dataFile) {
    const serialNum = getSerialNumberCounter(dataFile);
    console.log('serial num from file: '+ serialNum);
    const counter = findCounterBySerialNumber(serialNum);
    const avgFullPower = getAvgPower(dataFile, counter.coefficienTtTn);
    return counter.getDescription() + '\n\n' + 'Профиль №3.\nCредняя мощность: ' + avgFullPower;
}


function findCounterBySerialNumber(serial) {
    const counter = counterArr.filter(counter => counter.serialNumber == serial);
    return counter.length === 1 ? counter[0] : 
    new Counter('Счётчик не найден в базе данных или есть дубликат', serial +' - ошибка БД', -1);
}


function getSerialNumberCounter(dataFileStr) {
    let regex = /(?<=Серийный номер счетчика\s+)\d+/;
    let match = dataFileStr.match(regex);
    return match.length === 1 ? match[0] : alert('Серийный номер счётчика не найден в файле');
}

function getAvgPower(dataFileStr, coefficienTtTn) {
    if(coefficienTtTn === -1) {
        return 'счётчик не найден';
    }
    let threeProfile = getThreeProfilMeasurement(dataFileStr);
    let avgActivePower = rounded(getAverageActivePower(threeProfile) * coefficienTtTn);
    let avgReactivePower = rounded(getAverageReactivePower(threeProfile) * coefficienTtTn);

    let current = getCurrent(avgActivePower, avgReactivePower);

    return avgReactivePower > 0 ? avgActivePower + 'кВт + j' +  avgReactivePower +
    'кВАр\nСредняя нагрузка (приведена к 6кВ) = ' + current +'A' :
    avgActivePower + 'кВт - j' +  avgReactivePower*(-1)+'кВАр\nСредняя нагрузка (приведена к 6кВ) = ' + current + 'A';
}

function getThreeProfilMeasurement(dataFileStr) {
    let threeProfile = dataFileStr.substring(dataFileStr.lastIndexOf('Профиль №3'));
    let measurementRegex = /((\t+|\s+)\d?\d?\d\d\d.\d\d\d\d){4}/g;
    let fixNumbersString = threeProfile.replace(/,/g,".");

    return fixNumbersString.match(measurementRegex);
}

function getAverageActivePower(threeProfileMeasurement) {
    console.log('threeProfileMeasurement: ' +threeProfileMeasurement);
    let measurementActPositivePowRegex = /(\d?\d?\d\d\d.\d\d\d\d)\t\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d/;
    let measurementActNegativePowRegex = /\d?\d?\d\d\d.\d\d\d\d\t(\d?\d?\d\d\d.\d\d\d\d)\t\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d/;

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
    let measurementReactPositivePowRegex = /\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d\t(\d?\d?\d\d\d.\d\d\d\d)\t\d?\d?\d\d\d.\d\d\d\d/;
    let measurementReactNegativePowRegex = /\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d\t\d?\d?\d\d\d.\d\d\d\d\t(\d?\d?\d\d\d.\d\d\d\d)/;

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

function getCurrent(activePower, reactivePower) {
    const fullPower = Math.sqrt((Math.pow(1000*activePower, 2)) + (Math.pow(1000*reactivePower),2));
    const current = fullPower/(1.73*6000);
return rounded(current);
}

function rounded(number) {
    return +number.toFixed(3);
}