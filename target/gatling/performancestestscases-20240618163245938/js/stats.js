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
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "1018",
        "ok": "-",
        "ko": "1018"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles1": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles2": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles3": {
        "total": "18",
        "ok": "-",
        "ko": "18"
    },
    "percentiles4": {
        "total": "89",
        "ok": "-",
        "ko": "89"
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
        "total": "250",
        "ok": "-",
        "ko": "250"
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
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "270",
        "ok": "-",
        "ko": "270"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "-",
        "ko": "23"
    },
    "percentiles1": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles2": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles3": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles4": {
        "total": "104",
        "ok": "-",
        "ko": "104"
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
        "total": "125",
        "ok": "-",
        "ko": "125"
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
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "1018",
        "ok": "-",
        "ko": "1018"
    },
    "meanResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles1": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles2": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles3": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "percentiles4": {
        "total": "23",
        "ok": "-",
        "ko": "23"
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
        "total": "125",
        "ok": "-",
        "ko": "125"
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
