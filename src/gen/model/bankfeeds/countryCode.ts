/**
 * Bank Feeds API
 * This specifing endpoints Xero Bank feeds API
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case.
*/
export enum CountryCode {
    AD = <any> 'AD',
    AE = <any> 'AE',
    AF = <any> 'AF',
    AG = <any> 'AG',
    AI = <any> 'AI',
    AL = <any> 'AL',
    AM = <any> 'AM',
    AN = <any> 'AN',
    AO = <any> 'AO',
    AQ = <any> 'AQ',
    AR = <any> 'AR',
    AS = <any> 'AS',
    AT = <any> 'AT',
    AU = <any> 'AU',
    AW = <any> 'AW',
    AZ = <any> 'AZ',
    BA = <any> 'BA',
    BB = <any> 'BB',
    BD = <any> 'BD',
    BE = <any> 'BE',
    BF = <any> 'BF',
    BG = <any> 'BG',
    BH = <any> 'BH',
    BI = <any> 'BI',
    BJ = <any> 'BJ',
    BL = <any> 'BL',
    BM = <any> 'BM',
    BN = <any> 'BN',
    BO = <any> 'BO',
    BR = <any> 'BR',
    BS = <any> 'BS',
    BT = <any> 'BT',
    BW = <any> 'BW',
    BY = <any> 'BY',
    BZ = <any> 'BZ',
    CA = <any> 'CA',
    CC = <any> 'CC',
    CD = <any> 'CD',
    CF = <any> 'CF',
    CG = <any> 'CG',
    CH = <any> 'CH',
    CI = <any> 'CI',
    CK = <any> 'CK',
    CL = <any> 'CL',
    CM = <any> 'CM',
    CN = <any> 'CN',
    CO = <any> 'CO',
    CR = <any> 'CR',
    CU = <any> 'CU',
    CV = <any> 'CV',
    CW = <any> 'CW',
    CX = <any> 'CX',
    CY = <any> 'CY',
    CZ = <any> 'CZ',
    DE = <any> 'DE',
    DJ = <any> 'DJ',
    DK = <any> 'DK',
    DM = <any> 'DM',
    DO = <any> 'DO',
    DZ = <any> 'DZ',
    EC = <any> 'EC',
    EE = <any> 'EE',
    EG = <any> 'EG',
    EH = <any> 'EH',
    ER = <any> 'ER',
    ES = <any> 'ES',
    ET = <any> 'ET',
    FI = <any> 'FI',
    FJ = <any> 'FJ',
    FK = <any> 'FK',
    FM = <any> 'FM',
    FO = <any> 'FO',
    FR = <any> 'FR',
    GA = <any> 'GA',
    GB = <any> 'GB',
    GD = <any> 'GD',
    GE = <any> 'GE',
    GG = <any> 'GG',
    GH = <any> 'GH',
    GI = <any> 'GI',
    GL = <any> 'GL',
    GM = <any> 'GM',
    GN = <any> 'GN',
    GQ = <any> 'GQ',
    GR = <any> 'GR',
    GT = <any> 'GT',
    GU = <any> 'GU',
    GW = <any> 'GW',
    GY = <any> 'GY',
    HK = <any> 'HK',
    HN = <any> 'HN',
    HR = <any> 'HR',
    HT = <any> 'HT',
    HU = <any> 'HU',
    ID = <any> 'ID',
    IE = <any> 'IE',
    IL = <any> 'IL',
    IM = <any> 'IM',
    IN = <any> 'IN',
    IO = <any> 'IO',
    IQ = <any> 'IQ',
    IR = <any> 'IR',
    IS = <any> 'IS',
    IT = <any> 'IT',
    JE = <any> 'JE',
    JM = <any> 'JM',
    JO = <any> 'JO',
    JP = <any> 'JP',
    KE = <any> 'KE',
    KG = <any> 'KG',
    KH = <any> 'KH',
    KI = <any> 'KI',
    KM = <any> 'KM',
    KN = <any> 'KN',
    KP = <any> 'KP',
    KR = <any> 'KR',
    KW = <any> 'KW',
    KY = <any> 'KY',
    KZ = <any> 'KZ',
    LA = <any> 'LA',
    LB = <any> 'LB',
    LC = <any> 'LC',
    LI = <any> 'LI',
    LK = <any> 'LK',
    LR = <any> 'LR',
    LS = <any> 'LS',
    LT = <any> 'LT',
    LU = <any> 'LU',
    LV = <any> 'LV',
    LY = <any> 'LY',
    MA = <any> 'MA',
    MC = <any> 'MC',
    MD = <any> 'MD',
    ME = <any> 'ME',
    MF = <any> 'MF',
    MG = <any> 'MG',
    MH = <any> 'MH',
    MK = <any> 'MK',
    ML = <any> 'ML',
    MM = <any> 'MM',
    MN = <any> 'MN',
    MO = <any> 'MO',
    MP = <any> 'MP',
    MR = <any> 'MR',
    MS = <any> 'MS',
    MT = <any> 'MT',
    MU = <any> 'MU',
    MV = <any> 'MV',
    MW = <any> 'MW',
    MX = <any> 'MX',
    MY = <any> 'MY',
    MZ = <any> 'MZ',
    NA = <any> 'NA',
    NC = <any> 'NC',
    NE = <any> 'NE',
    NG = <any> 'NG',
    NI = <any> 'NI',
    NL = <any> 'NL',
    False = <any> 'false',
    NP = <any> 'NP',
    NR = <any> 'NR',
    NU = <any> 'NU',
    NZ = <any> 'NZ',
    OM = <any> 'OM',
    PA = <any> 'PA',
    PE = <any> 'PE',
    PF = <any> 'PF',
    PG = <any> 'PG',
    PH = <any> 'PH',
    PK = <any> 'PK',
    PL = <any> 'PL',
    PM = <any> 'PM',
    PN = <any> 'PN',
    PR = <any> 'PR',
    PS = <any> 'PS',
    PT = <any> 'PT',
    PW = <any> 'PW',
    PY = <any> 'PY',
    QA = <any> 'QA',
    RE = <any> 'RE',
    RO = <any> 'RO',
    RS = <any> 'RS',
    RU = <any> 'RU',
    RW = <any> 'RW',
    SA = <any> 'SA',
    SB = <any> 'SB',
    SC = <any> 'SC',
    SD = <any> 'SD',
    SE = <any> 'SE',
    SG = <any> 'SG',
    SH = <any> 'SH',
    SI = <any> 'SI',
    SJ = <any> 'SJ',
    SK = <any> 'SK',
    SL = <any> 'SL',
    SM = <any> 'SM',
    SN = <any> 'SN',
    SO = <any> 'SO',
    SR = <any> 'SR',
    SS = <any> 'SS',
    ST = <any> 'ST',
    SV = <any> 'SV',
    SX = <any> 'SX',
    SY = <any> 'SY',
    SZ = <any> 'SZ',
    TC = <any> 'TC',
    TD = <any> 'TD',
    TG = <any> 'TG',
    TH = <any> 'TH',
    TJ = <any> 'TJ',
    TK = <any> 'TK',
    TL = <any> 'TL',
    TM = <any> 'TM',
    TN = <any> 'TN',
    TO = <any> 'TO',
    TR = <any> 'TR',
    TT = <any> 'TT',
    TV = <any> 'TV',
    TW = <any> 'TW',
    TZ = <any> 'TZ',
    UA = <any> 'UA',
    UG = <any> 'UG',
    US = <any> 'US',
    UY = <any> 'UY',
    UZ = <any> 'UZ',
    VA = <any> 'VA',
    VC = <any> 'VC',
    VE = <any> 'VE',
    VG = <any> 'VG',
    VI = <any> 'VI',
    VN = <any> 'VN',
    VU = <any> 'VU',
    WF = <any> 'WF',
    WS = <any> 'WS',
    XK = <any> 'XK',
    YE = <any> 'YE',
    YT = <any> 'YT',
    ZA = <any> 'ZA',
    ZM = <any> 'ZM',
    ZW = <any> 'ZW'
}
