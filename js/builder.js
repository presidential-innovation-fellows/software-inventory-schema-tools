$.getJSON("../schema.json", function(json) {
$("#form").alpaca({
    "schema": json,
    "options": {
      "form": {
        "buttons": {
          "submit": {
            "title": "Add project",
            "click": function () {
                var val = this.getValue(),
                    projects = val.projects;
                val.projects = [];
                val.projects.push(projects);
                if (this.isValid(true)) {
                  if ($("#results").html() !== "") {
                    var results = JSON.stringify(val, null, "  "),
                        existingJSON = $("#results").html().slice(0, -9) + "  },";
                    $("#results").html(existingJSON);
                    results = results.substring(results.indexOf("[") + 1);
                    $("#results").append(results);
                   }
                   else {
                    var results = JSON.stringify(val, null, "  ");
                    $("#results").append(results);
                    $("#download").removeAttr('disabled');
                    $("#download_link").attr({
                      'href': 'data:text/json;charset=utf-8,' + encodeURIComponent(results),
                      'target': '_blank',
                      'download': 'civic.json'                          
                    });
                }                    
              }
            }
          }
        }
      }
  }});
});
