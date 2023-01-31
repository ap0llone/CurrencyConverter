const RATES = {
    usd: 0.59,
    eur: 0.54,
    rub: 41.52,
    lira: 11.06,
    gbp: 0.48,
    hryvnia: 21.69
};

function convert(man, currency){
    if(!RATES[currency]){
        return null;
    };

    const convert = man * RATES[currency];
    return convert.toFixed(2);
};