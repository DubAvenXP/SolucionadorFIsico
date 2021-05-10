const unit = {
    length: {
        meters: {
            centimeters: 0.01,
            kilometres: 1000,
            miles: 1609.34,
            feets: 0.9144,
            inches: 0.0254
        },
        kilometres: {
            centimeters: 0.00001,
            meters: 0.001,
            miles: 1609.34,
            feets: 0.0003048,
            inches: 0.0039370079
        },
        centimeters: {
            meters: 100,
            kilometres: 100000,
            miles: 160934,
            feets: 30.48,
            inches: 2.54
        },
        feets: {
            meters: 32.8084,
            kilometres: 3280.84,
            centimeters: 0.0328084,
            miles: 5280,
            inches: 0.0833333
        },
        inches: {
            meters: 39.3701,
            kilometres: 39370.1,
            centimeters: 0.393701,
            miles: 63360,
            feets: 12,
        },
    },
    time: {
        seconds: {
            minutes: 60,
            hours: 3600,
            days: 86400,
            years: 31536000
        },
        minutes: {
            seconds: 0.166667,
            hours: 60,
            days: 1440,
            years: 525600
        },
        hours: {
            seconds: 0.00027778,
            minutes: 0.016667,
            days: 24,
            years: 8760
        },
        days: {
            seconds: 0.0000115741,
            minutes: 0.000694444,
            hours: 0.0416667,
            years: 365
        },
        years: {
            seconds: 0.000000031709863,
            minutes: 0.0000019026,
            hours: 0.0001141553,
            days: 0.002739726,
        },
    },
    weight: {
        grams: {
            kilograms: 1000,
            pounds: 453.592,
            ounces: 28.3495
        },
        kilograms:{
            grams: 0.001,
            pounds: 0.453592,
            ounces: 0.0283495
        },
        pounds:{
            grams: 0.00220462,
            kilograms: 2.20462,
            ounces: 0.0625
        },
        ounces:{
            grams: 0.035274,
            pounds: 16,
            kilograms: 35.274
        },
    }
}

const translate = {
    length: {
        meters: 'Metros',
        kilometres: 'Kilometros',
        centimeters: 'Centimetros',
        feets: 'Pies',
        inches: 'Pulgadas',
    },time: {
        seconds: 'Segundos',
        minutes: 'Minutos',
        hours: 'Horas',
        days: 'Dias',
        years: 'Años',
    },
    weight: {
        grams: 'Gramos',
        kilograms: 'Kilogramos',
        pounds: 'Libras',
        ounces: 'Onzas',
    }
}




export {
    unit,
    translate
}

