const DAX_DATA = [{
    id: 1,
    name: 'adidas',
    isin: 'DE000A1EWWW0',
    symbol: 'ADS',
    dividendShare: 3.00,
    exchange: 'XETRA'
},
{
    id: 2,
    name: 'Airbus',
    isin: 'NL0000235190',
    symbol: 'AIR',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 3,
    name: 'Allianz',
    isin: 'DE0008404005',
    symbol: 'ALV',
    dividendShare: 9.60,
    exchange: 'XETRA'
},
{
    id: 4,
    name: 'BASF',
    isin: 'DE000BASF111',
    symbol: 'BAS',
    dividendShare: 3.30,
    exchange: 'XETRA'
},
{
    id: 5,
    name: 'Bayer',
    isin: 'DE000BAY0017',
    symbol: 'BAYN',
    dividendShare: 2.00,
    exchange: 'XETRA'
},
{
    id: 6,
    name: 'Beiersdorf',
    isin: 'DE0005200000',
    symbol: 'BEI',
    dividendShare: 0.70,
    exchange: 'XETRA'
},
{
    id: 7,
    name: 'BMW',
    isin: 'DE0005190003',
    symbol: 'BMW',
    dividendShare: 1.90,
    exchange: 'XETRA'
},
{
    id: 8,
    name: 'Brenntag',
    isin: 'DE000A1DAHH0',
    symbol: 'BNTGF',
    dividendShare: 1.35,
    exchange: 'XETRA'
},
{
    id: 9,
    name: 'Continental',
    isin: 'DE0005439004',
    symbol: 'CON',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 10,
    name: 'Covestro',
    isin: 'DE0006062144',
    symbol: 'CVVTF',
    dividendShare: 1.30,
    exchange: 'XETRA'
},
{
    id: 11,
    name: 'Daimler',
    isin: 'DE0007100000',
    symbol: 'DAI',
    dividendShare: 1.13,
    exchange: 'XETRA'
},
{
    id: 12,
    name: 'Delivery Hero',
    isin: 'DE000A2E4K43',
    symbol: 'DLVHF',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 13,
    name: 'Deutsche Bank',
    isin: 'DE0005140008',
    symbol: 'DBK',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 14,
    name: 'Deutsche Börse',
    isin: 'DE0005810055',
    symbol: 'DB1',
    dividendShare: 3.00,
    exchange: 'XETRA'
},
{
    id: 15,
    name: 'Deutsche Post',
    isin: 'DE0005552004',
    symbol: 'DPW',
    dividendShare: 1.35,
    exchange: 'XETRA'
},
{
    id: 16,
    name: 'Deutsche Telekom',
    isin: 'DE0005557508',
    symbol: 'DTE',
    dividendShare: 0.60,
    exchange: 'XETRA'
},
{
    id: 17,
    name: 'E.ON',
    isin: 'DE000ENAG999',
    symbol: 'EOA',
    dividendShare: 0.47,
    exchange: 'XETRA'
},
{
    id: 18,
    name: 'Fresenius',
    isin: 'DE0005785604',
    symbol: 'FRE',
    dividendShare: 0.88,
    exchange: 'XETRA'
},
{
    id: 19,
    name: 'Fresenius Medical Care',
    isin: 'DE0005785802',
    symbol: 'FME',
    dividendShare: 1.34,
    exchange: 'XETRA'
},
{
    id: 20,
    name: 'HeidelbergCement',
    isin: 'DE0006047004',
    symbol: 'HEI',
    dividendShare: 2.20,
    exchange: 'XETRA'
},
{
    id: 21,
    name: 'HelloFresh',
    isin: 'DE000A161408',
    symbol: 'HLFFF',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 22,
    name: 'Henkel vz.',
    isin: 'DE0006048432',
    symbol: 'HEN3',
    dividendShare: 1.85,
    exchange: 'XETRA'
},
{
    id: 23,
    name: 'Infineon',
    isin: 'DE0006231004',
    symbol: 'IFX',
    dividendShare: 0.27,
    exchange: 'XETRA'
},
{
    id: 24,
    name: 'Linde',
    isin: 'IE00BZ12WP82',
    symbol: 'LIN',
    dividendShare: 3.85,
    exchange: 'XETRA'
},
{
    id: 25,
    name: 'Merck',
    isin: 'DE0006599905',
    symbol: 'MRK',
    dividendShare: 1.40,
    exchange: 'XETRA'
},
{
    id: 26,
    name: 'MTU Aero Engines',
    isin: 'DE000A0D9PT0',
    symbol: 'MTX',
    dividendShare: 1.25,
    exchange: 'XETRA'
},
{
    id: 27,
    name: 'Münchener Rückversicherungs-Gesellschaft',
    isin: 'DE0008430026',
    symbol: 'MUV2',
    dividendShare: 9.80,
    exchange: 'XETRA'
},
{
    id: 28,
    name: 'Porsche',
    isin: 'DE000PAH0038',
    symbol: 'POR3',
    dividendShare: 2.20,
    exchange: 'XETRA'
},
{
    id: 29,
    name: 'PUMA',
    isin: 'DE0006969603',
    symbol: 'PUM',
    dividendShare: 0.16,
    exchange: 'XETRA'
},
{
    id: 30,
    name: 'QIAGEN',
    isin: 'NL0012169213',
    symbol: 'QIA',
    dividendShare: 0.00,
    exchange: 'XETRA'
},
{
    id: 31,
    name: 'RWE',
    isin: 'DE0007037129',
    symbol: 'RWE',
    dividendShare: 0.85,
    exchange: 'XETRA'
},
{
    id: 32,
    name: 'SAP',
    isin: 'DE0007164600',
    symbol: 'SAP',
    dividendShare: 1.69,
    exchange: 'XETRA'
},
{
    id: 33,
    name: 'Sartorius vz.',
    isin: 'DE0007165631',
    symbol: 'SRT3',
    dividendShare: 1.01,
    exchange: 'XETRA'
},
{
    id: 34,
    name: 'Siemens',
    isin: 'DE0007236101',
    symbol: 'SIE',
    dividendShare: 4.00,
    exchange: 'XETRA'
},
{
    id: 35,
    name: 'Siemens Energy',
    isin: 'DE000ENER6Y0',
    symbol: 'SMEGF',
    dividendShare: 0.10,
    exchange: 'XETRA'
},
{
    id: 36,
    name: 'Siemens Healthineers',
    isin: 'DE000SHL1006',
    symbol: 'SEMHF',
    dividendShare: 0.85,
    exchange: 'XETRA'
},
{
    id: 37,
    name: 'Symrise',
    isin: 'DE000SYM9999',
    symbol: 'SY1',
    dividendShare: 0.97,
    exchange: 'XETRA'
},
{
    id: 38,
    name: 'Volkswagen (VW) vz.',
    isin: 'DE0007664039',
    symbol: 'VOW3',
    dividendShare: 4.86,
    exchange: 'XETRA'
},
{
    id: 39,
    name: 'Vonovia',
    isin: 'DE000A1ML7J1',
    symbol: 'ANN',
    dividendShare: 1.58,
    exchange: 'XETRA'
},
{
    id: 40,
    name: 'Zalando',
    isin: 'DE000ZAL1111',
    symbol: 'ZLDSF',
    dividendShare: 0.00,
    exchange: 'XETRA'
}
]

export default DAX_DATA;