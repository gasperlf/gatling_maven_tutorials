var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles2": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles3": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "percentiles4": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
},
contents: {
"req_post-add-reques-061d0": {
        type: "REQUEST",
        name: "post add request",
path: "post add request",
pathFormatted: "req_post-add-reques-061d0",
stats: {
    "name": "post add request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles2": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles3": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles4": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    },"req_get-user-f0d4f": {
        type: "REQUEST",
        name: "get user",
path: "get user",
pathFormatted: "req_get-user-f0d4f",
stats: {
    "name": "get user",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles3": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles4": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
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
