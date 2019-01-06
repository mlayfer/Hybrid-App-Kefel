'use strict';
/* Controllers */

appControllers.controller('splashCtrl', ['$scope', 'smpManager',
    function ($scope) {

        //properties
        $("#loader").show();
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblJob',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                window.localStorage.setItem("jobsTable", JSON.stringify(data));
                console.log('1');
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblProgram',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                window.localStorage.setItem("programsTable", JSON.stringify(data));
                console.log('2');
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblUser',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                window.localStorage.setItem("usersTable", JSON.stringify(data));
                console.log('3');
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblIssueStats',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                window.localStorage.setItem("IssueStatsTable", JSON.stringify(data));
                console.log('4');
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblActionStats',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                window.localStorage.setItem("ActionStatsTable", JSON.stringify(data));
                console.log('5');
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblEnv',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("EnvTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblActionType',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                console.log(data, status);
                window.localStorage.setItem("actionTypesTable", JSON.stringify(data));
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblActionTypeUser',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                console.log(data, status);
                window.localStorage.setItem("actionTypeUsersTable", JSON.stringify(data));
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblIssueType',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                console.log(data, status);
                window.localStorage.setItem("issueTypesTable", JSON.stringify(data));
            },
            error: function(error){
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblIssueTypeUser',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("issueTypeUsersTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblJobEnv',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("jobEnvTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblJobType',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("jobTypesTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=tblSev',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("severityTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=vwJobEnv',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("mainViewTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=vwActionStats',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("actionLogTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://ec2-52-89-157-208.us-west-2.compute.amazonaws.com/db2json.engine/data.php?op=select&tbl=vwIssueStats',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                console.log(data, status);
                window.localStorage.setItem("errorLogTable", JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
        });
        location.href = "#main";

        // Back handlers
        $scope.back = function (ev) {
            backPressed();
        };
        $scope.$on('backbutton', function () {
            backPressed();
        });
        function backPressed() {
            navigator.app.exitApp();
        }
        // Back handlers end
    }]);