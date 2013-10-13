var data = [
  { 
    'name': 'Internal JIRA',
    're': '(opsaps|cdh|kitchen|helpdesk)[- ](\\d+)', 
    'captures': [ "project", "id" ], 
    'link': "http://jira.cloudera.com/browse/{{project}}-{{id}}"
  },
  { 
    'name': 'Hadoop JIRA',
    're': '(hdfs|hive|avro|yarn|hadoop)[- ](\\d+)', 
    'captures': [ "project", "id" ], 
    'link': "https://issues.apache.org/jira/browse/{{project}}-{{id}}"
  },
  { 
    // Doesn't work yet
    'name': 'JIRA Search (does not work yet)',
    're': 'jira[ ](.+)', 
    'captures': [ "q" ], 
    'link': "http://jira.cloudera.com/browse/QuickSearch.jspa?searchString={{q}}"
  }
];
