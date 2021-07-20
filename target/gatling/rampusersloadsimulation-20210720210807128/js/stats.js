var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1426",
        "ok": "1426",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles1": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles2": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles3": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1111",
        "ok": "1111",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.161",
        "ok": "5.161",
        "ko": "-"
    }
},
contents: {
"req_get-single-user-014f5": {
        type: "REQUEST",
        name: "Get single user request",
path: "Get single user request",
pathFormatted: "req_get-single-user-014f5",
stats: {
    "name": "Get single user request",
    "numberOfRequests": {
        "total": "160",
        "ok": "160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1426",
        "ok": "1426",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles1": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles2": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles3": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1111",
        "ok": "1111",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.161",
        "ok": "5.161",
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
