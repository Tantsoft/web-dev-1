$(".progress-in")
  .stop()
  .animate(
    { width: $(".progress-val").text() },
    {
      duration: 2000,
      step: function (now) {
        $(".progress-val").text(Math.ceil(now) + "%");
      },
    },
  );
