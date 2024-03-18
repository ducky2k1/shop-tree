
    {/* // Update the progress bar and input values when the range input changes */}
    $(document).ready(function(){
      $(".range-input input").on("input", function() {
        var minVal = $(".range-min").val();
        var maxVal = $(".range-max").val();
        $(".progress").css("width", (maxVal - minVal) + "%");
        $(".input-min").val(minVal);
        $(".input-max").val(maxVal);
      });
    });
