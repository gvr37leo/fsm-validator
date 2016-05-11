grammar html;

html:'<'TEXT'>' ((html*)|TEXT*)? '</'TEXT'>';

TEXT:[a-z]*;
WS  : [ \t\n\r] + -> skip;