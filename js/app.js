
(function () {
  var router = new Router([
    new Route('Home', 'home.html'),
    // posts
    new Route('0818', '0818.html'),
    new Route('0819', '0819.html'),
    new Route('0820', '0820.html'),
    new Route('0824', '0824.html'),
    new Route('0829', '0829.html'),
    new Route('0830', '0830.html'),
    new Route('0904', '0904.html'),
    new Route('0905', '0905.html'),
    new Route('0918', '0918.html'),
    new Route('0927', '0927.html'),
    new Route('1005', '1005.html'),
    new Route('1008', '1008.html'),
    new Route('1019', '1019.html'),
    new Route('1022', '1022.html'),
    new Route('1027', '1027.html'),
    new Route('1122', '1122.html'),
    new Route('1124', '1124.html'),
    new Route('1201', '1201.html'),
    new Route('1208', '1208.html'),
  ]);

  router.init();
}());
