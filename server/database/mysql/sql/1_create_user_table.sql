CREATE TABLE `user` (
    `id`          varchar(255) NOT NULL,
    `name`        varchar(255) NOT NULL,
    `description` varchar(255),
    `image`       varchar(255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;