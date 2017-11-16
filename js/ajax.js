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

    $.getJSON(
        "http://localhost:49315/Students/List",
        function (students)
        {
            console.log(students);
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

    $("#addbtn").click(function () {
        var student = getStudentData();

        $.post("http://localhost:49315/Students/Add", student, function (result) {
            console.log(result);
        });
    });

    function getStudentData()
    {
        var student = {
            Id: 0,
            FirstName: "FirstName",
            LastName: "LastName",
            SAT: 1600,
            GPA: 4.0,
            Email: "email",
            Phone: "phone",
            MajorId: 1
        };

        return student;
    }
});