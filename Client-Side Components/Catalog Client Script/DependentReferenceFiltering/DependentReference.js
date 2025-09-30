function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == '') {
    return;
  }

  // Name of the city variable we will filter
  var cityVar = 'city'; 
  // You might first clear existing options
  g_form.clearOptions(cityVar);

  var ga = new GlideAjax('CatalogCityFilter');
  ga.addParam('sysparm_name', 'getCitiesByCountry');
  ga.addParam('sysparm_country', newValue);
  ga.getXMLAnswer(function(answer) {
    if (answer) {
      var cities = JSON.parse(answer);
      // Add a default “-- select --” option (optional)
      g_form.addOption(cityVar, '', '-- Select City --');
      cities.forEach(function(item) {
        g_form.addOption(cityVar, item.sys_id, item.name);
      });
    }
  });
}
