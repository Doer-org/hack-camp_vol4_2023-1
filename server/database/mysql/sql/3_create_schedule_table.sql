CREATE TABLE `schedule`(
    `id`        varchar(255) NOT NULL,
    `user_id`   varchar(255) NOT NULL,
    `date`      varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;