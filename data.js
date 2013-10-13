/*
 * schema:
 *    name
 *    re: regular expression, with captures
 *    captures: names of captures
 *    link: mustache template
 */
var data = [
  { 
    'name': 'Apache JIRAs',
    're': '(hdfs|hive|avro|yarn|hadoop)[- ](\\d+)', 
    'captures': [ "project", "id" ], 
    'link': "https://issues.apache.org/jira/browse/{{project}}-{{id}}"
  }
];
