function library(req, res) {
  var a = req.body.OTA_HotelAvailRS.RoomStays.RoomStay[0];
  var d = [];

  for (let i = 0; i < a.length; i++) {
    var x = a[i].RoomRates.RoomRate[i].Rates.Rate[i];
    for (let j = 0; j < x.length; j++) {
      var y = x[i].TPA_Extensions.PriceBreakdown.adults;
      d.push({ y });
    }
    
  }

  console.log(d);
  res.send(d);
}
module.exports.lb = library;
