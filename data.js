/*
 * schema:
 *    name
 *    re: regular expression, with captures
 *    captures: names of captures
 *    link: mustache template
 */
var data = [
  {
    'name': 'Cloudera Public JIRA',
    're': '(access|distro|crunch|flume|hue|cdk|recbreak|sqoop)[- ](\\d+)',
    'captures': [ "project", "id" ],
    'link': "https://issues.cloudera.org/browse/{{project}}-{{id}}"
  }, {
    'name': 'Apache JIRA',
    're': '(impala|hdfs|hive|avro|yarn|mapreduce|hadoop|solr|legal|accumulo|ambari|spark|parquet)[- ](\\d+)',
    'captures': [ "project", "id" ],
    'link': "https://issues.apache.org/jira/browse/{{project}}-{{id}}"
  }, {
    'name': 'Cloudera JIRA (catch-all)',
    're': '([a-zA-Z]+)[- ](\\d+)',
    'captures': [ "project", "id" ],
    'link': "https://jira.cloudera.com/browse/{{project}}-{{id}}"
  }
];
