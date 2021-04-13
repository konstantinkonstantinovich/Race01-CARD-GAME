<?php

class DatabaseModel {
    protected $databaseConnection;
    protected $table;

    public function __construct($table) {
        $this->setConnection();
        $this->setTable($table);
    }

    final protected function setConnection() {
        $this->databaseConnection = new DatabaseConnection("127.0.0.1", null, "ykushnerov", "securepass", "sword");
    }

    final protected function setTable($table) {
        $this->table = $table;
    }
}

?>
