select value from {{ v$osstat }} where stat_name = 'NUM_CPU_CORES'
