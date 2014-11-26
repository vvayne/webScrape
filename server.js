var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
// var selectedTicker = "YOYO";

app.get('/scrape', function(req, res){

  var tickerSymbol = ['CSCO',
'VCI',
'AMER',
'OLCMF',
'MWHS',
'FMDAY',
'MACR',
'NAVR',
'ITGI',
'NETC',
'ISFEA',
'TSAI',
'UUNT',
'SPYG',
'NSCP',
'TALK',
'VRTY',
'ADAM',
'KNET',
'DTPT',
'CVUS',
'CYCH',
'SE',
'MSPG',
'LCOS',
'XCIT',
'YHOO',
'CSRV',
'INFO',
'WHIT',
'LGCY',
'SEEK',
'CNET',
'GETTY',
'OWAV',
'EGRP',
'DIGX',
'UOLP',
'ETEL',
'ONSL',
'GNET',
'AMZN',
'NSPK',
'EGHT',
'IONCY',
'CNCX',
'NXLK',
'LGTY',
'CCRD',
'NTKI',
'KLB',
'SPLN',
'ITVU',
'VRSN',
'CDNW',
'ABTG',
'ICMT',
'DCLK',
'EXDS',
'CYSP',
'ISSX',
'BRCM',
'FVCX',
'TDR',
'VRIO',
'FCCN',
'IBSX',
'INKT',
'NETG',
'ASYM',
'SWNT',
'ALGX',
'BCST',
'IMGK',
'NOPT',
'COOL',
'GCTY',
'PILT',
'DRIV',
'TFSM',
'GBLC',
'EBAY',
'EWBX',
'TGLO',
'ETEK',
'TMCS',
'UBID',
'XMCM',
'ABOV',
'GEEK',
'INSP',
'CNQR',
'ALIF',
'MKTW',
'COVD',
'ALLR',
'TUTS',
'MMPT',
'VLOG',
'HLTH',
'PRGY',
'VERT',
'VIGN',
'WEBT',
'ITRA',
'PCOR',
'ROWE',
'FLAS',
'MLTX',
'IVIL',
'CTIX',
'AWEB',
'MINE',
'ONEM',
'ABTL',
'CPTH',
'PCLN',
'ZDZ',
'CLAI',
'RTHM',
'EXTR',
'USIX',
'VUSA',
'TURF',
'WGAT',
'PXCM',
'IFSX',
'LOAX',
'LAUN',
'NETP',
'RAZF',
'TJOB',
'MRBA',
'MPTH',
'ATHY',
'TPN',
'FCST',
'MQST',
'CDOT',
'NPNT',
'PRSF',
'SILK',
'ADFC',
'MMXI',
'NETO',
'TSCM',
'CBDR',
'BIZZ',
'CMTN',
'SCNT',
'ALOY',
'NXCD',
'RBAK',
'ONES',
'ETYS',
'APLN',
'CAIS',
'FASH',
'DIR',
'JWEB',
'STRM',
'BNBN',
'EDGR',
'ZIPL',
'IIXL',
'FFIV',
'HSAC',
'NASC',
'ORCC',
'WITC',
'BWEB',
'KOOP',
'LTNX',
'PHCM',
'LINE',
'GENI',
'CARI',
'APNT',
'MAIL',
'SLNE',
'VIAN',
'GOTO',
'STAD',
'ARBA',
'NTVN',
'RAMP',
'SALN',
'CYBS',
'PASA',
'SWCM',
'TWE',
'INTM',
'JNPR',
'PRSW',
'STMP',
'SRCH',
'EELN',
'ISLD',
'NPLS',
'NFNT',
'ASKJ',
'CLRN',
'CMRC',
'PKSI',
'INIT',
'HITS',
'LQID',
'CHINA',
'CTCHC',
'TIBX',
'EFNT',
'EGOV',
'ADBL',
'PDYN',
'TCTY',
'ARTG',
'ENGA',
'HOOV',
'MPPP',
'VOYN',
'INSW',
'TANN',
'MDRX',
'JFAX',
'VRSA',
'CMDX',
'FREE',
'LBRT',
'QKKA',
'DSCM',
'DIGX',
'NTWO',
'NTIA',
'PRFT',
'ACRU',
'NTOP',
'WGRD',
'FLWS',
'SPLT',
'IIJI',
'QUOT',
'HOMS',
'CBLT',
'IPIX',
'ICGE',
'IGLD',
'TMWD',
'USIT',
'HOTJ',
'INTW',
'MDCM',
'RHAT',
'ASWX',
'QSFT',
'SSSW',
'AGIL',
'HHNT',
'LOOK',
'MYPT',
'LIOX',
'BAMB',
'IMGX',
'PPRO',
'GDEN',
'LUMT',
'VITR',
'EPNY',
'KANA',
'CGLD',
'YESM',
'ATON',
'ASFD',
'BLSW',
'NZRO',
'IWIN',
'EGAN',
'KEYN',
'FDRY',
'FSHP',
'ITXC',
'MSCP',
'EFTD',
'NTSL',
'INAP',
'LOIS',
'SPNW',
'TMNT',
'DGIN',
'BWAY',
'CLIC',
'DSLN',
'PLRX',
'HMSV',
'IWOV',
'QXLC',
'ESTM',
'JPTR',
'VSHP',
'NCNT',
'IGOC',
'JCDA',
'NETR',
'WOMN',
'CYSV',
'SIFY',
'IZAP',
'NAVI',
'SCMR',
'ITRU',
'VIAD',
'GAIA',
'AKAM',
'CAVN',
'BFRE',
'TIXX',
'COBT',
'WBVN',
'EXPE',
'NETZ',
'NXTV',
'ASDS',
'SNWL',
'IBAS',
'NTCR',
'QNTS',
'VRTA',
'KOREA',
'RMKR',
'RETK',
'TRRA',
'WEBS',
'CFLO',
'XACT',
'MPLX',
'SQST',
'DDDC',
'DIGI',
'GTHR',
'SKDS',
'KNOT',
'DMRC',
'MCAF',
'PFSW',
'HPOL',
'ANCC',
'ECRU',
'HCEN',
'ACOM',
'ANDN',
'FOGD',
'NTRT',
'PRVW',
'MDLI',
'EBNX',
'FMKT',
'MTHR',
'PSU',
'ESPD',
'HLEX',
'ECLG',
'GRIC',
'XPDR',
'EGRT',
'CBIS',
'ONDS',
'NEOF',
'HGAT',
'SVNX',
'LNTY',
'IMPT',
'SKIL',
'TSTN',
'CTRA',
'EMRG',
'FIRE',
'WQNI',
'BUYX',
'FSST',
'LCOR',
'VCNT',
'DTEC',
'XCAR',
'LNTE',
'LSPN',
'IPET',
'PCIS',
'WEBM',
'FTHL',
'VNWI',
'SVVS',
'SNHK',
'CHRD',
'TREE',
'VSTY',
'BTBC',
'CWON',
'IINV',
'GIGM',
'INFT',
'CONE',
'DTHK',
'ROOM',
'AVEA',
'NIKU',
'ONVI',
'NTGX',
'ASIA',
'PRME',
'RCOM',
'SWBD',
'VATA',
'IPRT',
'HOMG',
'RVDP',
'SLTC',
'OTGS',
'DTAS',
'FAIM',
'LMIN',
'IMPV',
'LOUD',
'UAXS',
'IISX',
'NPLI',
'SNOW',
'CALD',
'BLZE',
'PRTS',
'ETIN',
'ARTD',
'WBSN',
'TLCT',
'HANA',
'ARPT',
'VCLK',
'GOAM',
'LPSN',
'SABA',
'OPUS',
'IASIA',
'HSTM',
'CORI',
'SINA',
'QSCG',
'PECS',
'STCS',
'WNET',
'SQSW',
'IBEM',
'CSAV',
'CTLM',
'SONS',
'ONIS',
'CWLD',
'EXLT',
'TTA',
'REDF',
'ECMN',
'ACCL',
'CKCM',
'BUSY',
'GENU',
'CARE',
'VRGE',
'STOR',
'NTES',
'DVIN',
'SOHU',
'SRTI',
'TNSI',
'IMNY',
'NENG',
'SPRT',
'TALR',
'BLUE',
'EVOK',
'ILND',
'CORV',
'LXNT',
'MSPR',
'VLCT',
'WEBX',
'CVGP',
'FLRE',
'RSNT',
'SCRM',
'IAWK',
'AOLA',
'MNDO',
'EVLV',
'RADV',
'EQIX',
'QLNX',
'SYNQ',
'OTWO',
'PEOP',
'ITXI',
'WJCI',
'SVCW',
'VRYA',
'OMNY',
'INRG',
'ZNGN',
'COSN',
'AVGO',
'UOPX',
'DCNT',
'ASCX',
'AGCX',
'SYNP',
'DLEX',
'TMTA',
'GORX',
'RSTN',
'LDCL',
'SPLX',
'INET',
'ADS',
'BFUN',
'PYPL',
'NFLX',
'OSTK',
'PLUM',
'IPAS',
'REDE',
'OPEN',
'ORBZ',
'PRVD',
'TOMO',
'MCHX',
'SNDA',
'NILE',
'MOTV',
'KONG',
'SRVY',
'RNOW',
'GOOG',
'ECST',
'JOBS',
'GRU',
'LGBT',
'JRJC',
'INCX',
'SHOP',
'LONG',
'MKTX',
'INPC',
'NINE',
'SOLD',
'ARBX',
'OTT',
'OXPS',
'GRVY',
'ODMO',
'BOFI',
'PAY',
'ESCH',
'BIDU',
'TRXI',
'WBMD',
'VPRT',
'WSPI',
'VOCS',
'TRAK',
'TRFC',
'MAIL',
'DMGI',
'NHWK',
'LQDT',
'VG',
'LOOP',
'OMTR',
'GMKT',
'WNS',
'RVBD',
'CVLT',
'SFLY',
'APKT',
'EHTH',
'CPLA',
'GUID',
'PRTS',
'ARUN',
'VRAZ',
'TTGT',
'LLNW',
'SCOR',
'DHX',
'OWW',
'TYPE',
'VOLT',
'HIRE',
'MELI',
'CTCT',
'MXT',
'SMLC',
'SDBT',
'APEI',
'VRAD',
'INET',
'LRN',
'N',
'RAX',
'CYOU',
'SWI',
'OPEN',
'VITC',
'GAME',
'ACOM',
'QNST',
'FNGN',
'CNVO',
'RLOC',
'ONE',
'ENV',
'MMYT',
'SFUN',
'MCOX',
'BITA',
'DANG',
'YOKU',
'MOBI',
'GCAP',
'QIHU',
'ELLI',
'WIFI',
'RENN',
'FFN',
'LNKD',
'YNDX',
'P',
'RATE',
'AWAY',
'Z',
'CARB',
'TUDO',
'GRPN',
'ANGI',
'ZNGA',
'GWRE',
'AVG',
'SYNC',
'BV',
'YELP',
'DWRE',
'VNTV',
'PRSS',
'MM',
'BLOX',
'PFPT',
'FB',
'NOW',
'KYAK',
'TRLA',
'QLYS',
'LOCK',
'SSTK',
'YY',
'IPDN',
'QIWI',
'LITB',
'GOGO',
'CDW',
'SALE',
'FEYE',
'FUEL',
'RNG',
'VEEV',
'EIGI',
'WUBA',
'QUNR',
'WIX',
'TWTR',
'CHGG',
'ZU',
'WBAI',
'ATHM',
  ]

  for( i = 0; i<tickerSymbol.length; i++){
    var selectedTicker = tickerSymbol[i];

  url = "http://www.sec.gov/cgi-bin/browse-edgar?CIK="+selectedTicker+"&Find=Search&owner=exclude&action=getcompany"
  request(url, function(error,response,html){

    if(!error){
      var $ = cheerio.load(html);
      var company,address;
      var json = {company:"",address:""};

    $('.companyInfo').filter(function(){
      var data = $(this);
       company = data.children().first().text();
       var lastOfRelevantTextIndex = company.indexOf("#")-5; //5 because 4 will be a part of CIK# and then one space. last index will be last relevant
      company = company.substring(0,lastOfRelevantTextIndex+1);
      json.company = company;
      console.log(company);
    })

    $('.mailer').first().filter(function(){
      var data = $(this);
      address = data.children().eq(0).text();
      address += data.children().eq(1).text();
      json.address = address;
      console.log(address);
    })


fs.appendFile('locations3.json',JSON.stringify(json,null,4),function(err) {
  if(err) throw err;
})

}

})

 }
 console.log('File Successfully Written');
    res.send('check your console')
  });

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;