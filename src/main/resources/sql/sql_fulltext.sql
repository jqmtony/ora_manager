select sql_fulltext from {{ v$sqlarea }} where sql_id = :sqlId
