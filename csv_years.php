<?php

if ($argc !== 2) {
    echo "Usage: php csv_year.php file_name.csv > new_file.csv";
    exit();
}
$filename = $argv[1];
if (! file_exists($filename)) {
    echo "File $filename does not exist.";
    exit();
}

if (! is_readable($filename)) {
    echo "Unable to read file $filename: Permission denied.";
    exit();
}

$fp = fopen($filename, 'r');

// Ignore the first line
fgetcsv($fp);

while ($line = fgetcsv($fp)) {
    $val = intval($line[0]);
    if ($val % 2 === 0) {
        array_walk($line, function ($item) {
            return '"'.trim('"', $item).'"';
        });
        echo implode(',', $line)."\n";
    }
}
