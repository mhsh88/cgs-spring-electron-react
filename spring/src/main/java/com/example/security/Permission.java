package com.example.security;


public interface Permission {
    String PIPE_SPECIFICATIONS_READ = "pipeSpecifications.read";
    String PIPE_SPECIFICATIONS_UPDATE = "pipeSpecifications.update";
    String PIPE_SPECIFICATIONS_CREATE = "pipeSpecifications.create";
    String PIPE_SPECIFICATIONS_DELETE = "pipeSpecifications.delete";

    String RUNS_HAS_STATE_READ = "runsHasState.read";
    String RUNS_HAS_STATE_UPDATE = "runsHasState.update";
    String RUNS_HAS_STATE_CREATE = "runsHasState.create";
    String RUNS_HAS_STATE_DELETE = "runsHasState.delete";

    String STATE_READ = "state.read";
    String STATE_UPDATE = "state.update";
    String STATE_CREATE = "state.create";
    String STATE_DELETE = "state.delete";

    String RUNS_READ = "runs.read";
    String RUNS_UPDATE = "runs.update";
    String RUNS_CREATE = "runs.create";
    String RUNS_DELETE = "runs.delete";

    String AFTER_HEATER_READ = "afterHeater.read";
    String AFTER_HEATER_UPDATE = "afterHeater.update";
    String AFTER_HEATER_CREATE = "afterHeater.create";
    String AFTER_HEATER_DELETE = "afterHeater.delete";

    String GAS_READ = "gas.read";
    String GAS_UPDATE = "gas.update";
    String GAS_CREATE = "gas.create";
    String GAS_DELETE = "gas.delete";

    String COLLECTOR_READ = "collector.read";
    String COLLECTOR_UPDATE = "collector.update";
    String COLLECTOR_CREATE = "collector.create";
    String COLLECTOR_DELETE = "collector.delete";

    String HEATERS_READ = "heaters.read";
    String HEATERS_UPDATE = "heaters.update";
    String HEATERS_CREATE = "heaters.create";
    String HEATERS_DELETE = "heaters.delete";

    String BURNERS_READ = "burners.read";
    String BURNERS_UPDATE = "burners.update";
    String BURNERS_CREATE = "burners.create";
    String BURNERS_DELETE = "burners.delete";

    String CITY_GATE_STATION_READ = "cityGateStation.read";
    String CITY_GATE_STATION_UPDATE = "cityGateStation.update";
    String CITY_GATE_STATION_CREATE = "cityGateStation.create";
    String CITY_GATE_STATION_DELETE = "cityGateStation.delete";

    String BEFORE_HEATER_READ = "beforeHeater.read";
    String BEFORE_HEATER_UPDATE = "beforeHeater.update";
    String BEFORE_HEATER_CREATE = "beforeHeater.create";
    String BEFORE_HEATER_DELETE = "beforeHeater.delete";

    String PIPE_SIZE_READ = "pipeSize.read";
    String PIPE_SIZE_UPDATE = "pipeSize.update";
    String PIPE_SIZE_CREATE = "pipeSize.create";
    String PIPE_SIZE_DELETE = "pipeSize.delete";

    String BURNERS_HAS_STATE_READ = "burnersHasState.read";
    String BURNERS_HAS_STATE_UPDATE = "burnersHasState.update";
    String BURNERS_HAS_STATE_CREATE = "burnersHasState.create";
    String BURNERS_HAS_STATE_DELETE = "burnersHasState.delete";

    String ORGANIZATION_READ = "organization.read";
    String ORGANIZATION_UPDATE = "organization.update";
    String ORGANIZATION_CREATE = "organization.create";
    String ORGANIZATION_DELETE = "organization.delete";

    String TOKEN_ACTION_READ = "tokenAction.read";
    String TOKEN_ACTION_UPDATE = "tokenAction.update";
    String TOKEN_ACTION_CREATE = "tokenAction.create";
    String TOKEN_ACTION_DELETE = "tokenAction.delete";

    String USER_READ = "user.read";
    String USER_UPDATE = "user.update";
    String USER_CREATE = "user.create";
    String USER_DELETE = "user.delete";

    String LINKED_ACCOUNT_READ = "linkedAccount.read";
    String LINKED_ACCOUNT_UPDATE = "linkedAccount.update";
    String LINKED_ACCOUNT_CREATE = "linkedAccount.create";
    String LINKED_ACCOUNT_DELETE = "linkedAccount.delete";

    String ROLE_READ = "role.read";
    String ROLE_UPDATE = "role.update";
    String ROLE_CREATE = "role.create";
    String ROLE_DELETE = "role.delete";

    String PERMISSION_READ = "permission.read";
    String PERMISSION_UPDATE = "permission.update";
    String PERMISSION_CREATE = "permission.create";
    String PERMISSION_DELETE = "permission.delete";
}