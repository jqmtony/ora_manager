select serial#, username, program from {{ gv$session }} where inst_id = :instance and sid = :sid
