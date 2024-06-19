var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2500",
        "ok": "0",
        "ko": "2500"
    },
    "minResponseTime": {
        "total": "197",
        "ok": "-",
        "ko": "197"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "-",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "6835",
        "ok": "-",
        "ko": "6835"
    },
    "standardDeviation": {
        "total": "7177",
        "ok": "-",
        "ko": "7177"
    },
    "percentiles1": {
        "total": "3109",
        "ok": "-",
        "ko": "3109"
    },
    "percentiles2": {
        "total": "11411",
        "ok": "-",
        "ko": "11411"
    },
    "percentiles3": {
        "total": "20005",
        "ok": "-",
        "ko": "20005"
    },
    "percentiles4": {
        "total": "20593",
        "ok": "-",
        "ko": "20593"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2500,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30.86",
        "ok": "-",
        "ko": "30.86"
    }
},
contents: {
"req_load-login-page--1525855104": {
        type: "REQUEST",
        name: "Load Login Page",
path: "Load Login Page",
pathFormatted: "req_load-login-page--1525855104",
stats: {
    "name": "Load Login Page",
    "numberOfRequests": {
        "total": "1250",
        "ok": "0",
        "ko": "1250"
    },
    "minResponseTime": {
        "total": "332",
        "ok": "-",
        "ko": "332"
    },
    "maxResponseTime": {
        "total": "28273",
        "ok": "-",
        "ko": "28273"
    },
    "meanResponseTime": {
        "total": "9306",
        "ok": "-",
        "ko": "9306"
    },
    "standardDeviation": {
        "total": "7905",
        "ok": "-",
        "ko": "7905"
    },
    "percentiles1": {
        "total": "6713",
        "ok": "-",
        "ko": "6713"
    },
    "percentiles2": {
        "total": "19382",
        "ok": "-",
        "ko": "19382"
    },
    "percentiles3": {
        "total": "20006",
        "ok": "-",
        "ko": "20006"
    },
    "percentiles4": {
        "total": "22042",
        "ok": "-",
        "ko": "22042"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1250,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.43",
        "ok": "-",
        "ko": "15.43"
    }
}
    },"req_submit-login--150810271": {
        type: "REQUEST",
        name: "submit login",
path: "submit login",
pathFormatted: "req_submit-login--150810271",
stats: {
    "name": "submit login",
    "numberOfRequests": {
        "total": "1250",
        "ok": "0",
        "ko": "1250"
    },
    "minResponseTime": {
        "total": "197",
        "ok": "-",
        "ko": "197"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "-",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "4364",
        "ok": "-",
        "ko": "4364"
    },
    "standardDeviation": {
        "total": "5321",
        "ok": "-",
        "ko": "5321"
    },
    "percentiles1": {
        "total": "2147",
        "ok": "-",
        "ko": "2147"
    },
    "percentiles2": {
        "total": "4646",
        "ok": "-",
        "ko": "4646"
    },
    "percentiles3": {
        "total": "17498",
        "ok": "-",
        "ko": "17498"
    },
    "percentiles4": {
        "total": "20005",
        "ok": "-",
        "ko": "20005"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1250,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.43",
        "ok": "-",
        "ko": "15.43"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
