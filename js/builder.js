$.getJSON("", function(json) {
$("#form").alpaca({
    "schema": json,
    "options": {
      "form": {
        "buttons": {
          "submit": {
            "title": "Render code.json",
            "click": function () {
                var val = this.getValue();
                if (this.isValid(true)) {
                    $("#results").text('');
                    var results = JSON.stringify(val, null, "  ");
                    $("#results").append(results);
                    $("#download").removeAttr('disabled');
                    $("#download_link").attr({
                      'href': 'data:text/json;charset=utf-8,' + encodeURIComponent(results),
                      'target': '_blank',
                      'download': 'code.json'                          
                    });
                }                    
              }
            }
          }
        }
      }
  });
});
