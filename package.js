Package.describe({
  summary: "Check whether a date is a german holiday",
  version: "1.1.0",
  git: "https://github.com/wtfuii/german-holiday.git"
});

Package.onUse(function (api) {
  api.addFiles('german-holiday.js', ['client', 'server']);
  api.export('holidayCheck', ['client', 'server']);
});