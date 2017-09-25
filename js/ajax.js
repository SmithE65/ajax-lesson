// JavaScript source code
$().ready(function () {
    var test;

    $.getJSON(
        "http://date.jsontest.com",
        function (json) {
            test = json;
            console.log(json);
            updateTime(json);
        }
    );

    $("button").click(function () {
        console.log(test);
        updateTime(test);
    });

    function updateTime(jsonTime)
    {
        $("#timeslot").text(jsonTime["time"]);
    }

    $.getJSON("http://prs.gregorydoud.net/Vendors/List", function (vendors) { processVendors(vendors) });

    function processVendors(vendors)
    {
        for (var vendor of vendors)
        {
            console.log(vendor["Name"], vendor["Email"], vendor["Phone"]);
        }
    }
});