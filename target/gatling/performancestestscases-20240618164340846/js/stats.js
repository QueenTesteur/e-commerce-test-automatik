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
        "total": "187",
        "ok": "-",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
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
        "total": "66",
        "ok": "-",
        "ko": "66"
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
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "187",
        "ok": "-",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "-",
        "ko": "16"
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
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "percentiles4": {
        "total": "78",
        "ok": "-",
        "ko": "78"
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
        "total": "25",
        "ok": "-",
        "ko": "25"
    },
    "meanResponseTime": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
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
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles4": {
        "total": "21",
        "ok": "-",
        "ko": "21"
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
