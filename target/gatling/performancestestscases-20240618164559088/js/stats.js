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
        "total": "1010",
        "ok": "-",
        "ko": "1010"
    },
    "meanResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "-",
        "ko": "56"
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
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles4": {
        "total": "212",
        "ok": "-",
        "ko": "212"
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
        "total": "227.27",
        "ok": "-",
        "ko": "227.27"
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
        "total": "1010",
        "ok": "-",
        "ko": "1010"
    },
    "meanResponseTime": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "-",
        "ko": "62"
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
        "total": "83",
        "ok": "-",
        "ko": "83"
    },
    "percentiles4": {
        "total": "221",
        "ok": "-",
        "ko": "221"
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
        "total": "113.64",
        "ok": "-",
        "ko": "113.64"
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
        "total": "1008",
        "ok": "-",
        "ko": "1008"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "percentiles1": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "percentiles2": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles3": {
        "total": "22",
        "ok": "-",
        "ko": "22"
    },
    "percentiles4": {
        "total": "36",
        "ok": "-",
        "ko": "36"
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
        "total": "113.64",
        "ok": "-",
        "ko": "113.64"
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
