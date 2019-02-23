(function() {

    // helper function that returns a node with the folowing id
    var $ = function(id) {
        return document.getElementById(id);
    };

    window.onload = function() {
        // createList();
    };


    // creates name and puts them in a div
    function createList(names, divID) {
        var list = document.createElement("div");
        for (var i = 0; i < names.length; i++) {
            var div = document.createElement("div");
            div.innerHTML(names[i]);
            list.appendChild(div);
        }
        $(divID).appendChild(list);
    }


})();